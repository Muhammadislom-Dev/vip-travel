import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { TravelImage } from "../../../../assets/img";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <Box {...css.card}>
      <Box className="container">
        <Flex gap="25px 50px">
          <Image {...css.img} src={TravelImage} />
          <Box>
            <Heading {...css.title}>{t("company")}</Heading>
            <Text {...css.text}>{t("text1")}</Text>
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
    color: "#2D4382",
    fontWeight: 700,
  },
};
