import "./App.css";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer/Footer";
import Question from "./components/Question/Question";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/direction",
    element: <Product />,
  },
]);

function App() {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, []);
  return (
    <>
      {animation && <Loader />}
      <RouterProvider router={router} />
      <Question />
      <Footer />
    </>
  );
}

export default App;
