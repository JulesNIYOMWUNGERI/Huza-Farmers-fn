/* eslint-disable no-unused-vars */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';



i18n.use(initReactI18next)
.use(LanguageDetector)
.use(HttpApi)
.init({
    supportedLngs: ['en', 'fr', 'rw'],
    fallbackLng: 'en',
    enterpolation: { escapeValue: false },
    detection: {
        order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
        caches: ['cookie'],
    },
    backend: {
        loadPath: '/locales/{{lng}}/translation.json',
    }
});

export default i18n;