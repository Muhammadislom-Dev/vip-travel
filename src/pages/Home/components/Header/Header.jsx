import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box {...css.card}>
      <Box className="container">
        <Heading {...css.title}>Транспортные услуги</Heading>
        <Text {...css.text}>
          Доставка, оформление документации и полное сопровождение сделки при
          покупке нового автомобиля из любой точки мира
        </Text>
        <Link className="header-link" {...css.link} to="/direction">
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
    width: "800px",
    margin: "20px auto",
    mb: "40px",
  },
};
