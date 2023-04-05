import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { Logo } from "../../assets/icon";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import {
  RiTelegramFill,
  RiInstagramFill,
  RiFacebookBoxFill,
} from "react-icons/ri";

function Footer() {
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
              <Link {...css.link} href="mailto:infogroup@gmail.com">
                infogroup@gmail.com
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Flex mt="20px" {...css.card}>
          <Flex align="center" gap="30px">
            <Link {...css.link} href="/">
              Asosiy
            </Link>
            <Link {...css.link} href="/">
              About
            </Link>
            <Link {...css.link} href="/">
              Products
            </Link>
            <Link {...css.link} href="/">
              Contact
            </Link>
          </Flex>
          <Flex ml="auto" mt="3" gap="0 25px">
            <Link href="https://www.instagram.com/" className="footer-link">
              <RiInstagramFill />
            </Link>
            <Link href="https://t.me/UZDSA" className="footer-link">
              <RiTelegramFill />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100040627792747&sk=about" className="footer-link">
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
    background: "linear-gradient(90deg,#00bee6,#008ac9)",
    p: "35px 0",
    mt:"100px"
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
