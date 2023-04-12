import "./Loader.css";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [countLoad, setCountLoad] = useState(0);
  const [loader, setLoader] = useState(
    sessionStorage.getItem("loader") ? false : true
  );

  function removeLoader() {
    setLoader(false);
    sessionStorage.setItem("loader", "false");
  }

  useEffect(() => {
    setInterval(() => {
      setCountLoad((c) =>
        c === 100 ? removeLoader() : (c = "NaN" ? (c = "100") : c + 1)
      );
    }, 500);
    setTimeout(() => {
      removeLoader();
    }, 5000);
  }, []);

  return (
    <div className={`Loader ${!loader && "no-load"}`}>
      <h1 className="logo">
        DIPLOMATIC <span className="loader-span"> Service Agency</span> <br />
      </h1>
      <div className="percent"></div>
      <div className="out-door">
        <h1 className="logo">
          DIPLOMATIC<span className="loader-span">Service Agency</span> <br />
        </h1>
        <div className="percent1"></div>
      </div>
    </div>
  );
};

export default Loader;
