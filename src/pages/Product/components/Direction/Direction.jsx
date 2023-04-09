import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { direction } from "../data";
import ModalChat from "../../../../components/ModalChat/ModalChat";

function Direction() {
  return (
    <Box {...css.card}>
      <Box className="container">
        <Box>
          {direction.map((direction) => (
            <Flex {...css.list} key={direction.id}>
              <Image
                {...css.images}
                src={direction.images}
                alt={direction.title}
              />
              <Box p="18px 16px" w="100%">
                <Flex {...css.item}>
                  <Heading {...css.title}>{direction.title}</Heading>
                  <Text {...css.cost}>{direction.cost} UZS</Text>
                </Flex>
                <Text {...css.text}>{direction.description}</Text>
                <Flex
                  {...css.item}
                  style={{ borderBottom: "2px solid #E1E4E9" }}
                  pb="12px">
                  <Text>{direction.country}</Text>
                  <Link {...css.phone} href="tel:+998901695269">
                    Показать телефон
                  </Link>
                </Flex>
                <ModalChat />
              </Box>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Direction;

const css = {
  card: {
    p: "30px 0",
    background: "#E5E5E5",
  },
  images: {
    w: "260px",
    h: "205px",
    objectFit: "cover",
  },
  list: {
    background: "#FFFFFF",
    border: " 1px solid #E6E7E8",
    borderRadius: "10px",
    m: "24px 0",
    cursor: "pointer",
  },
  title: {
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "120%",
    color: "#1A73EB",
  },
  item: {
    align: "center",
    w: "100%",
    justifyContent: "space-between",
    mt: "7",
  },
  cost: {
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "130%",
    color: "#1A73EB",
  },
  text: {
    color: "#05101D",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "18px",
    mt: "3",
  },
  phone: {
    background: "#1A73EB",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: 700,
    color: "#fff",
    textDecoration: "none",
    w: "152px",
    h: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
