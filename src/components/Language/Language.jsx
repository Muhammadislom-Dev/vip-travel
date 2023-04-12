import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { RussianImage, EnglishImage } from "../../assets/icon";
import { Flex } from "@chakra-ui/react";

const languages = [
  {
    title: "en",
    img: <img src={EnglishImage} className="language-img" />,
  },
  {
    title: "ru",
    img: <img src={RussianImage} className="language-img" />,
  },
];

const Languages = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("i18nextLng")
  );

  const onChangeLanguage = (value) => {
    localStorage.setItem("i18nextLng", value);
    i18n.changeLanguage(value);
    setSelectedLanguage(value);
  };
  return (
    <div className="languages">
      <Flex align="center" gap="0 8px">
        {languages?.map((lang) => (
          <Flex {...css.card} onClick={() => onChangeLanguage(lang.title)}>
            {lang.img}
            <p>{lang.title}</p>
          </Flex>
        ))}
      </Flex>
    </div>
  );
};

export default Languages;

const css = {
  card: {
    flexDirection: "column",
    alignItems: "center",
    margin: "0 10px",
    cursor: " pointer",
    textTransform: "uppercase",
  },
};
