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
              "Diplomatic Service Agency” компания которая на протяжении
              нескольких лет активно оказывает услуги для дипломатического
              корпуса в Узбекистане. В целях оказания поддержки и удобств
              деятельности миссий, любезно готовы оказать сервис различного
              рода.
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
    borderRadius: "8px",
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
