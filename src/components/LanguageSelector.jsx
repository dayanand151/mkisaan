import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
const { i18n } = useTranslation();

const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
};

return (
    <div className="absolute top-4 right-4">
    <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="border border-green-500 text-green-800 rounded-lg px-3 py-1 bg-white focus:outline-none"
        defaultValue={i18n.language}
    >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
    </select>
    </div>
);
};

export default LanguageSelector;