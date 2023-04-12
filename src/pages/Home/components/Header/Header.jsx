import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Header() {
  const { t } = useTranslation();
  return (
    <Box className="header" {...css.card}>
      <Box className="container">
        <Heading {...css.title}>{t("catalog")}</Heading>
        <Text {...css.text}>{t("news")}</Text>
        <Link className="header-link" {...css.link} to="/direction">
          {t("button")}
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
