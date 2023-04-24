import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { TicketImage } from "../../../../assets/img";
import { PlayerIcon } from "../../../../assets/icon";
import { useTranslation } from "react-i18next";

function Section() {
  const { t } = useTranslation();
  return (
    <Box {...css.card}>
      <Box className="container">
        <Flex align="center" gap="10px 50px">
          <Box style={{ textAlign: "center" }}>
            <Heading {...css.title}>{t("jamoa")}</Heading>
            <Text {...css.text}>{t("text")}</Text>
            <Flex justify="center" gap="10px">
              <Link {...css.link} href="#">
                More Info
              </Link>
              <Box {...css.item}>
                <Image {...css.icon} src={PlayerIcon} />
              </Box>
            </Flex>
          </Box>
          <Image src={TicketImage} alt="Ticket Image" />
        </Flex>
      </Box>
    </Box>
  );
}

export default Section;

const css = {
  card: {
    p: "30px 0",
  },
  title: {
    fontSize: "35px",
    lineHeight: "40px",
    color: "#2D4382",
    fontWeight: 700,
  },
  text: {
    fontSize: "18px",
    lineHeight: "24px",
    mt: "20px",
    mb: "30px",
  },
  link: {
    fontFamily: "Lato,sans-serif",
    textDecoration: "none",
    color: "#2D4382",
    fontSize: "18px",
    lineHeight: "20px",
  },
  icon: {
    w: "15px",
    h: "15px",
    borderRadius: "50%",
  },
  item: {
    background: "#f4f5f6",
    w: "25px",
    h: "25px",
    textAlign: "center",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
