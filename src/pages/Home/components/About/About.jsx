import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { TravelImage } from "../../../../assets/img";

function About() {
  return (
    <Box {...css.card}>
      <Box className="container">
        <Flex gap="25px 50px">
          <Image {...css.img} src={TravelImage} />
          <Box>
            <Heading {...css.title}>DIPLOMATIC Service Agency</Heading>
            <Text {...css.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              qui veniam aliquam in consequatur illum similique culpa expedita
              fuga quis cum non nobis impedit, eaque recusandae nam, corrupti
              tempora totam! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cupiditate voluptates esse minima dolores deserunt dolor,
              aliquam error molestiae? Veritatis velit voluptate unde eaque
              dolores a nihil ipsam cupiditate quae consequatur.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default About;

const css = {
  card: {
    p: "50px 0",
  },
  img: {
    w: "500px",
    borderRadius:"8px"
  },
  text: {
    fontSize: "18px",
    lineHeight: "24px",
    mt: "20px",
  },
  title: {
    fontSize: "35px",
    lineHeight: "40px",
    color: "#008ac9",
    fontWeight: 700,
  },
};
