import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./translations/en.json";
import translationVI from "./translations/vn.json";

const resources = {
    vi: {
        translation: translationVI,
    },
    en: {
        translation: translationEN,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "vi", // Ngôn ngữ mặc định
    fallbackLng: "vi", // Ngôn ngữ dự phòng nếu ngôn ngữ hiện tại không được hỗ trợ
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
