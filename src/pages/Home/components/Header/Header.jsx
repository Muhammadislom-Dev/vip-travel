import { Box, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <Box {...css.card}>
      <Box className="container">
        <Heading {...css.title}>Транспортные услуги</Heading>
        <Text {...css.text}>
          Доставка, оформление документации и полное сопровождение сделки при
          покупке нового автомобиля из любой точки мира
        </Text>
        <Link {...css.link} href="#">
          VIEW ALL VEHICLES
        </Link>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  card: {
    textAlign: "center",
    p: "150px 0",
  },
  title: {
    fontSize: "55px",
    lineHeight: "60px",
    fontWeight: 700,
  },
  text: {
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: 500,
    width:"800px",
    margin:"20px auto",
    mb:"40px"
  },
  link: {
    background: "linear-gradient(90deg, #00bee6 0%, #008ac9 100%)",
    padding: "15px 60px",
    height: "50px",
    fontSize: "15px",
    letterSpacing: "1.2px",
    color: "white",
    transition: "0.3s",
    textDecoration: "none",

    _hover: {
      color: "#008ac9",
      border: "1px solid #008ac9",
      transform: "scale(0.9)",
      background: "white",
    },
  },
};
