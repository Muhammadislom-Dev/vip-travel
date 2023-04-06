import { Box, Button } from "@chakra-ui/react";
import { Input, Modal } from "antd";

import React, { useState } from "react";

function AModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Box>
      <Button {...css.button} onClick={showModal}>
        Chat With Us Now
      </Button>
      <Modal
        title="Leave your message."
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <Box mt="30px">
          <Input size="large" placeholder="Name" />
        </Box>
        <Box m="30px 0">
          <Input size="large" placeholder="Telefon raqam" />
        </Box>
        <Button {...css.submit}>Submit</Button>
      </Modal>
    </Box>
  );
}

export default AModal;

const css = {
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
  submit: {
    textTransform: "capitalize",
    background: "linear-gradient(90deg,#00bee6,#008ac9)",
    border: "1px solid #fff",
    color: "#fff",
    mt: "20px",
    w: "100%",
    h: "45px",
    fontSize: "18px",
    letterSpacing: "2px",
    cursor: "pointer",
    transition: "0.25s all ease-in-out",
    borderRadius: "10px",

    _hover: {
      transform: "scale(0.9)",
      background: "#fff",
      color: "#008ac9",
      border: "1px solid #008ac9",
    },
  },
};
