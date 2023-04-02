import { Box } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import About from "./components/About/About";
import Section from "./components/Section/Section";

function Home() {
  return (
    <Box>
      <video autoPlay="true" muted className="home-video" id="myVideo">
        <source
          src="https://3a73912591e33a34c7ec-0b2c97842f44191203c9b45228f673bc.ssl.cf1.rackcdn.com/currentautomotive/home-video.mp4"
          type="video/mp4"
        />
      </video>
      <Box {...css.card}>
        <Navbar />
        <Header />
      </Box>
      <About />
      <Section />
    </Box>
  );
}

export default Home;

const css = {
  card: {
    width: "100%",
    height: "100vh",
    position: "relative",
    opacity: 1,
    color: "#f1f1f1",
  },
};
