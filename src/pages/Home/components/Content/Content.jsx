import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { content } from "./data";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Content() {
  return (
    <Box p="3">
      <Box className="container">
        <Heading >DIPLOMATIC Service Agency</Heading>
        <SimpleGrid mt="25px" gap="25px" columns="3">
          {content.map((evt) => (
            <Box {...css.card}>
              <LazyLoadImage
                style={{ width: "100%", height: "230px", objectFit: "cover",borderRadius:"8px 8px 0 0" }}
                src={evt.img}
              />
              <Text mt="2">{evt.text}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Content;

const css = {
  card: {
    transition: "0.3s",
    background: "#FFFFFF",
    border: "1.5px solid rgba(240, 242, 244, 0.2)",
    textAlign: "center",
    cursor: "pointer",
    pb: "15px",
    borderRadius:"8px"
  },
};
