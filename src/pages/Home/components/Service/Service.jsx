import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { service } from "../../../../contants/service";

function Service() {
  return (
    <Box p="30px 0">
      <Box className="container">
        <Heading color="#008ac9">
          Why book with DIPLOMATIC Service Agency?
        </Heading>
        <SimpleGrid mt="35px" columns="2" gap="15px 25px">
          {service.map((service) => (
            <Box {...css.card} key={service.id}>
              <Heading {...css.title}>{service.title}</Heading>
              <Text {...css.text}>{service.text}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Service;

const css = {
  title: {
    fontSize: "20px",
    lineHeight: "26px",
    fontWeight: 600,
    margin: "10px 0",
  },
  text: {
    fontSize: "14px",
    lineHeight: "18px",
    width: "520px",
  },
  card: {
    borderRadius: "10px",
    border: "2px solid #008ac9",
    p: "10px 15px",
    cursor: "pointer",
    transition: "1s",

    _hover: {
      background: "#008ac9",
      color:"#fff"
    },
  },
};
