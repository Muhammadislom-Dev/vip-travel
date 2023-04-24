import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { LogoIcon } from "../../assets/icon";
import Languages from "../Language/Language";
import { useTranslation } from "react-i18next";

function Nav() {

  const {t} = useTranslation()
  return (
    <Box {...css.card}>
      <Box className="container">
        <Flex {...css.list}>
          <Link href="/">
            <Image {...css.img} src={LogoIcon} />
          </Link>
          <Flex gap="15px 50px">
            <Link {...css.link} href="#">
              {t("home")}
            </Link>
            <Link {...css.link} href="#">
            {t("head2")}
            </Link>
            <Link {...css.link} href="#">
            {t("head5")}
            </Link>
            <Link {...css.link} href="#">
            {t("head4")}
            </Link>
          </Flex>
          <Flex align="center">
            <Languages />
            {/* <Image /> */}
            <Link {...css.link} href="tel:+998977318535">
              +998 97 731 85 35
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Nav;

const css = {
  card: {
    p: "15px 0",
    position: "fixed",
    width: "100%",
    background: "#fff",
    zIndex: 1,
  },
  list: {
    align: "center",
    justifyContent: "space-between",
  },
  link: {
    fontSize: "18px",
    lineHeight: "24px",
    color: "#2D4382",
    textDecoration: "none",
    transition: "0.25s all ease-in-out",
    fontWeight: 600,
  },
  img: {
    width: "180px",
    objectFit: "contain",
  },
};
