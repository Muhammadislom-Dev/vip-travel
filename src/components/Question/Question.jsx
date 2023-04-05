import { Box, Button, Heading } from "@chakra-ui/react";

function Question() {
  return (
    <Box {...css.card}>
      <Box className="container">
        <Heading {...css.name}>Have a question?</Heading>
        <Button {...css.button}>Chat With Us Now</Button>
      </Box>
    </Box>
  );
}

export default Question;

const css = {
  card: {
    background: "linear-gradient(90deg,#00bee6,#008ac9)",
    p: "50px 10px",
    textAlign: "center",
    mt:"40px"
  },
  name: {
    color: "#fff",
    fontSize: "40px",
    lineHeight: "45px",
  },
  button: {
    textTransform: "capitalize",
    background: "linear-gradient(90deg,#00bee6,#008ac9)",
    border: "1px solid #fff",
    color: "#fff",
    mt: "20px",
    w: "280px",
    h: "60px",
    fontSize: "20px",
    letterSpacing: "2px",
    cursor: "pointer",
    transition: "0.25s all ease-in-out",

    _hover: {
      transform: "scale(0.9)",
      background: "#fff",
      color: "#008ac9",
    },
  },
};
