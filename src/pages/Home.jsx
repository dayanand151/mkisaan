import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector";
import Button from "../components/Button";

const Home = () => {
const { t } = useTranslation();

return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-50 to-green-200">
    <LanguageSelector />
    <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">
        {t("welcome")}
    </h1>
    <div className="flex gap-6">
        <Button label={t("login")} />
        <Button label={t("signup")} />
    </div>
    </div>
);
};

export default Home;