import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import LanguageSelector from "../components/LanguageSelector";
import mkisaanImg from "../assets/mkisaan.jpg"; // ✅ Correct import for Vite

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-center text-black relative"
      style={{
        backgroundImage: `url(${mkisaanImg})`, // ✅ use local image
      }}
    >
      {/* Optional overlay to improve text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg text-white">
          {t("welcome")} 🌾
        </h1>

        <p className="text-lg mb-6 font-medium text-white">
          {t("empoweringFarmers")}
        </p>

        <div className="flex items-center justify-center space-x-4 mb-6">
          <LanguageSelector />
        </div>

        <div className="flex space-x-4 justify-center">
          <Button label={t("login")} onClick={() => alert("Login Clicked")} />
          <Button label={t("signup")} onClick={() => alert("Signup Clicked")} />
        </div>
      </div>
    </div>
  );
};

export default Home;