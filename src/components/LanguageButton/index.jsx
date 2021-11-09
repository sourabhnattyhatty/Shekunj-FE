import React, { useEffect, useState } from "react";
import "./index.scss";
import { useTranslation } from "react-i18next";

function ChangeLanguageButton() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const lan = localStorage.getItem("i18nextLng");
    setLanguage(lan);
  });

  const handleLanguageChange = (e) => {
    if (e.target.value === "Hindi") {
      i18n.changeLanguage("hi");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <>
      <select className='language_button' onChange={handleLanguageChange}>
        <option selected={language==='en' ? true : false}>English</option>
        <option selected={language==='hi' ? true : false}>Hindi</option>
      </select>
    </>
  );
}

export default ChangeLanguageButton;
