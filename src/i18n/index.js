import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
en: {
    translation: {
    welcome: "Welcome to M-Kisaan 🌾",
    login: "Login",
    signup: "Sign Up"
    }
},
hi: {
    translation: {
    welcome: "एम-किसान में आपका स्वागत है 🌾",
    login: "लॉगिन",
    signup: "साइन अप"
    }
}
};

i18n.use(initReactI18next).init({
resources,
lng: "en",
interpolation: {
    escapeValue: false
}
});

export default i18n;