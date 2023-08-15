import './App.css'
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'flag-icon-css/css/flag-icons.min.css';
import i18n from "i18next";
import i18next from 'i18next';
import Banner from './components/banner';
import Navbar from './components/navbar'; 

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en', 'de', 'it', 'pt'],
        fallbackLng: "en",
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
            caches: ['cookies']
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },
        react: { useSuspense: false }
    });

const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    }, {
        code: 'it',
        name: 'Italiano',
        country_code: 'it'
    }, {
        code: 'de',
        name: 'Deutsch',
        country_code: 'de'
    }, {
        code: 'pt',
        name: 'Português',
        country_code: 'pt'
    }  
]

function App() {
    const { t } = useTranslation()

    return (
        <>
            <Navbar languages = {languages}/> 
            <Banner
                mainText={t('welcome')}
                caption={t('caption')}
                chooseLanguage={t('chooseLang')}
                languages = {languages}               
            />
            <Banner
                mainText={t('welcome')}
                caption={t('caption')}
                chooseLanguage={t('chooseLang')}
                languages = {languages}               
            />
            <Banner
                mainText={t('welcome')}
                caption={t('caption')}
                chooseLanguage={t('chooseLang')}
                languages = {languages}               
            />
            <Banner
                mainText={t('welcome')}
                caption={t('caption')}
                chooseLanguage={t('chooseLang')}
                languages = {languages}               
            />
            <Banner
                mainText={t('welcome')}
                caption={t('caption')}
                chooseLanguage={t('chooseLang')}
                languages = {languages}               
            />
        </>
    );
}

export default App