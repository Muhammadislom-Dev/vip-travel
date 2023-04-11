import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { LogoIcon } from "../../assets/icon";

function Nav() {
  return (
    <Box {...css.card}>
      <Box className="container">
        <Flex {...css.list}>
          <Link href="/">
            <Image {...css.img} src={LogoIcon} />
          </Link>
          <Flex gap="15px 50px">
            <Link {...css.link} href="#">
              Home
            </Link>
            <Link {...css.link} href="#">
              About
            </Link>
            <Link {...css.link} href="#">
              Products
            </Link>
            <Link {...css.link} href="#">
              Contact
            </Link>
          </Flex>
          <Flex>
            <Image />
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
  },
  list: {
    align: "center",
    justifyContent: "space-between",
  },
  link: {
    fontSize: "18px",
    lineHeight: "24px",
    color: "#008ac9",
    textDecoration: "none",
    transition: "0.25s all ease-in-out",
  },
  img: {
    width: "180px",
    objectFit: "contain",
  },
};
