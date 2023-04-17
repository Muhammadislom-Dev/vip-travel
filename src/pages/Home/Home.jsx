import { Box } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Section from "./components/Section/Section";
import Service from "./components/Service/Service";
import TravelCar from "./components/Car/Car";
import Nav from "../../components/Nav/Nav";

function Home() {
  return (
    <Box>
      <Nav />
      <Header />
      <About />
      {/* <Section /> */}
      <Service />
      <TravelCar />
    </Box>
  );
}

export default Home;
