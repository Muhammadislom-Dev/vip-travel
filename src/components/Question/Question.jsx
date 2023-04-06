import { Box, Heading } from "@chakra-ui/react";
import AModal from "../Modal/Modal";

function Question() {
  return (
    <Box {...css.card}>
      <Box className="container">
        <Heading {...css.name}>Have a question?</Heading>
        <AModal />
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
    mt: "40px",
  },
  name: {
    color: "#fff",
    fontSize: "40px",
    lineHeight: "45px",
  },
};
