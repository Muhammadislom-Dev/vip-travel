import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { travel } from "../../../../contants/travel";
import { useTranslation } from "react-i18next";
import ModalChat from "../../../../components/ModalChat/ModalChat";

function TravelCar() {
  const { t } = useTranslation();
  return (
    <Box {...css.body}>
      <Box className="container-fluid">
        <Heading as="h1" size="4xl" mb="25px">
          {t("catalog1")}
        </Heading>
        <SimpleGrid gap="25px" columns="3">
          {travel.map((car) => (
            <Box {...css.card}>
              <LazyLoadImage src={car.image} {...css.image} />
              <Heading as="h2" size="xl">
                {car.title}
              </Heading>
              <ModalChat />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default TravelCar;

const css = {
  body: {
    p: "50px 10px",
    background: "#F5F8FC",
  },
  card: {
    transition: "0.3s",
    background: "#FFFFFF",
    border: "1.5px solid rgba(240, 242, 244, 0.2)",
    p: "15px",
    textAlign: "center",
    cursor: "pointer",

    _hover: {
      transform: "scale(0.9)",
    },
  },
  image: {
    width: "300px",
    height: "270px",
    objectFit: "contain",
  },
};
