import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { Logo } from "../../assets/icon";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import {
  RiTelegramFill,
  RiInstagramFill,
  RiFacebookBoxFill,
} from "react-icons/ri";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <Box {...css.body}>
      <Box className="container">
        <Flex {...css.card}>
          <Link href="/">
            <Image {...css.image} src={Logo} />
          </Link>
          <Flex {...css.list}>
            <Flex align="center" gap="8px">
              <FiPhoneCall color="#fff" fontSize="1.1em" />
              <Link {...css.link} href="tel:+998977318535">
                +998 97 731 85 35
              </Link>
            </Flex>
            <Flex align="center" gap="8px">
              <HiOutlineMail color="#fff" fontSize="1.1em" />
              <Link {...css.link} href="mailto:uzdipsag@gmail.com">
              uzdipsag@gmail.com
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Flex mt="20px" {...css.card}>
          <Flex align="center" gap="30px">
            <Link {...css.link} href="/">
              {t("home")}
            </Link>
            <Link {...css.link} href="/">
              {t("head2")}
            </Link>
            <Link {...css.link} href="/">
              {t("head5")}
            </Link>
            <Link {...css.link} href="/">
              {t("head4")}
            </Link>
          </Flex>
          <Flex ml="auto" mt="3" gap="0 25px">
            <Link href="https://www.instagram.com/https://www.instagram.com/diplomatic_service_agency/" className="footer-link">
              <RiInstagramFill />
            </Link>
            <Link href="https://t.me/UZDSA" className="footer-link">
              <RiTelegramFill />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100040627792747&sk=about"
              className="footer-link">
              <RiFacebookBoxFill />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;

const css = {
  body: {
    // background: "#062A49",
    background: "#2D4382",
    p: "35px 0",
    mt: "100px",
  },
  image: {
    w: "170px",
    objectFit: "contain",
  },
  list: {
    ml: "auto",
    align: "center",
    gap: "20px 40px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    opacity: 0.85,
    lineHeight: "26px",
  },
  card: {
    borderBottom: "1px solid #fff",
    align: "center",
    pb: "30px",
  },
};
