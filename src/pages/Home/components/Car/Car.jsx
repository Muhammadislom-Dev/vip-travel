import { Box } from "@chakra-ui/react";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { BusImage } from "../../../../assets/img";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { travel } from "../../../../contants/travel";

function TravelCar() {
  return (
    <Box {...css.body}>
      <Box className="container-fluid">
        <Splide
          options={{ type: "loop", perPage: 3, perMove: 1, autoplay: true }}>
          {travel.map((car, i) => (
            <SplideSlide key={i}>
              <Box>
                <LazyLoadImage src={car.image} {...css.image} />
                <h4>{car.title} </h4>
              </Box>
            </SplideSlide>
          ))}
        </Splide>
      </Box>
    </Box>
  );
}

export default TravelCar;

const css = {
  body: {
    p: "50px 10px",
  },
  card: {
    transition: "0.3s",

    _hover: {
      transform: "scale(0.9)",
    },
  },
  image: {
    width: "380px",
    height: "300px",
    // objectFit: "cover",
  },
};
