import { Box, Button } from "@chakra-ui/react";
import { Input, Modal } from "antd";

import React, { useState } from "react";

function ModalChat() {
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

  const [textValue, setTextValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  // invalid input states

  const [, setInvalidText] = useState(false);
  const [, setInvalidName] = useState(false);
  const [, setInvalidNumber] = useState(false);

  function changeNumber(item) {
    setNumberValue(item);
    setInvalidNumber(false);
  }

  function changeName(item) {
    setNameValue(item);
    setInvalidName(false);
  }

  function changeText(item) {
    setTextValue(item);
    setInvalidText(false);
  }

  let bot = {
    TOKEN: "6199941139:AAG5VGAAgU-h7bxiFFdZp5EUeQPnGbYiA1w",
    chatID: "-1001809300543",
    message: `
      Assalomu alaykum sizga yangi buyurtma xabari!%0A
      %0AIsmi 👤: ${nameValue}; 
      %0ATelefon raqami ☎: ${numberValue}`,
  };

  function sendMessage() {
    if (nameValue === "") {
      setInvalidName(true);
    } else if (numberValue === "") {
      setInvalidNumber(true);
    } else {
      fetch(
        `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
        {
          method: "GET",
        }
      ).then(
        (success) => {
          console.log("send message");
        },
        (error) => {
          console.log(error);
        }
      );

      setNameValue("");
      setTextValue("");
      setNumberValue("");
      handleCancel()
    }
  }
  return (
    <Box>
      <Button {...css.button} onClick={showModal}>
        Chat With Us Now
      </Button>
      <Modal
        title="Leave your message."
        open={isModalOpen}
        centered
        onOk={handleOk}
        onCancel={handleCancel}>
        <Box mt="30px">
          <Input
            value={nameValue}
            onChange={(e) => changeName(e.target.value)}
            size="large"
            placeholder="Name"
          />
        </Box>
        <Box m="30px 0">
          <Input
            value={numberValue}
            onChange={(e) => changeNumber(e.target.value)}
            size="large"
            placeholder="Telefon raqam"
          />
        </Box>
        <Button onClick={() => sendMessage()} {...css.submit}>
          Submit
        </Button>
      </Modal>
    </Box>
  );
}

export default ModalChat;

const css = {
  button: {
    textTransform: "capitalize",
    background: "#2D4382",
    border: "1px solid #fff",
    color: "#fff",
    mt: "10px",
    w: "160px",
    h: "35px",
    fontSize: "10px",
    letterSpacing: "2px",
    cursor: "pointer",
    transition: "0.25s all ease-in-out",

    _hover: {
      transform: "scale(0.9)",
      background: "#fff",
      color: "#2D4382",
      border: "1px solid #2D4382",
    },
  },
  submit: {
    textTransform: "capitalize",
    background: "#2D4382",
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
      color: "#2D4382",
      border: "1px solid #2D4382",
    },
  },
};
