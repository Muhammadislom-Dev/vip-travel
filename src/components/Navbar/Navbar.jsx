import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { LogoIcon } from "../../assets/icon";
import { useLocation } from "react-router-dom";

function Navbar() {
  // const location = useLocation();
  // const located = location?.pathname;
  // console.log(location);
  return (
    <Box {...css.card}>
      <Box className="container">
        <Flex {...css.list}>
          <Image {...css.img} src={LogoIcon} />
          <Flex gap="15px 50px">
            <Link
              // color={located === "/" ? "#fff" : "#1A73EB"}
              {...css.link}
              href="#">
              Home
            </Link>
            <Link
              // color={located === "/" ? "#fff" : "#1A73EB"}
              {...css.link}
              href="#">
              About
            </Link>
            <Link
              // color={located === "/" ? "#fff" : "#1A73EB"}
              {...css.link}
              href="#">
              Products
            </Link>
            <Link
              // color={located === "/" ? "#fff" : "#1A73EB"}
              {...css.link}
              href="#">
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

export default Navbar;

const css = {
  card: {
    p: "30px 0",
  },
  list: {
    align: "center",
    justifyContent: "space-between",
  },
  link: {
    fontSize: "18px",
    lineHeight: "24px",
    // color: "#fff",
    textDecoration: "none",
    transition: "0.25s all ease-in-out",

    _hover: {
      color: "#008ac9",
    },
  },
  img: {
    width: "180px",
    objectFit: "contain",
  },
};
