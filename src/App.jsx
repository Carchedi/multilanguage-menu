import './App.css'
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'flag-icon-css/css/flag-icons.min.css';
import i18n from "i18next"; 
import Banner from './components/banner';
import Navbar from './components/navbar'; 
import Section from './components/section'
import ContactUs from './components/contactUs';

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
        backend: { loadPath: '/assets/locales/{{lng}}/translation.json'},
        react: { useSuspense: false }
    });

const languages = [
    {code: 'en', name: 'English', country_code: 'gb' }, 
    {code: 'it', name: 'Italiano', country_code: 'it'},
    {code: 'de',name: 'Deutsch',country_code: 'de'}, 
    {code: 'pt',name: 'Português',country_code: 'pt'}  
]

function App() {
    const { t } = useTranslation() 

    const menu01Items = [
        {imgSrc: '../img/menu_items/menu01/calzonne.jpg', itemName:'Calzonne',itemDescription:'descA'},
        {imgSrc: '../img/menu_items/menu01/funghi.jpg', itemName:'Funghi',itemDescription:'descB'},
        {imgSrc: '../img/menu_items/menu01/margherita.jpg', itemName:'Margheritta',itemDescription:'descC'},
        {imgSrc: '../img/menu_items/menu01/pollo.png', itemName:'Pollo',itemDescription:'descB'},
        {imgSrc: '../img/menu_items/menu01/prosciutto.jpg', itemName:'Prosciutto',itemDescription:'descB'},
        {imgSrc: '../img/menu_items/menu01/salame.jpg', itemName:'Salame',itemDescription:'descC'},
        {imgSrc: '../img/menu_items/menu01/tonno.jpg', itemName:'Tonno',itemDescription:'descB'}
    ]

    const menu02Items = [
        {imgSrc: '../img/menu_items/menu02/canellonni.png', itemName:'Canellonne',itemDescription:'descB'},
        {imgSrc: '../img/menu_items/menu02/gnocchi.png', itemName:'Gnochi',itemDescription:'descC'},
        {imgSrc: '../img/menu_items/menu02/lasagna.png', itemName:'Lasagna',itemDescription:'descA'},
        {imgSrc: '../img/menu_items/menu02/Linguine.png', itemName:'Linguine',itemDescription:'descB'},
        {imgSrc: '../img/menu_items/menu02/macaroni.jpg', itemName:'Macaroni',itemDescription:'descB'},
        {imgSrc: '../img/menu_items/menu02/penne.png', itemName:'Penne',itemDescription:'descC'},
        {imgSrc: '../img/menu_items/menu02/raviolli.jpg', itemName:'Raviolli',itemDescription:'descA'},
        {imgSrc: '../img/menu_items/menu02/spaghetti.jpg', itemName:'Spaghetti',itemDescription:'descA'},
        {imgSrc: '../img/menu_items/menu02/vermicelli.png', itemName:'Vermicelli',itemDescription:'descB'}
    ]

    const menu03Items = [
        {imgSrc: '../img/menu_items/menu03/insalata01.jpg', itemName:'Insalata 01',itemDescription:'descA'},
        {imgSrc: '../img/menu_items/menu03/insalata02.jpg', itemName:'Insalata 02',itemDescription:'descB'},
        {imgSrc: '../img/menu_items/menu03/insalata03.jpg', itemName:'Insalata 03',itemDescription:'descC'},
        {imgSrc: '../img/menu_items/menu03/insalata04.jpg', itemName:'Insalata 04',itemDescription:'descA'},
        {imgSrc: '../img/menu_items/menu03/insalata05.jpg', itemName:'Insalata 05',itemDescription:'descB'},
        {imgSrc: '../img/menu_items/menu03/insalata06.jpg', itemName:'Insalata 06',itemDescription:'descC'},
        {imgSrc: '../img/menu_items/menu03/insalata07.jpg', itemName:'Insalata 07',itemDescription:'descB'},
        {imgSrc: '../img/menu_items/menu03/insalata08.jpg', itemName:'Insalata 08',itemDescription:'descC'},
        {imgSrc: '../img/menu_items/menu03/insalata09.jpg', itemName:'Insalata 09',itemDescription:'descB'}
    ]

    const menu04Items = [
        {imgSrc: '../img/menu_items/menu04/acqua_minerale.jpg', itemName:'Acqua Minerale',itemDescription:'descA'},
        {imgSrc: '../img/menu_items/menu04/bevande_analcoliche.jpg', itemName:'Bevande Analcholiche',itemDescription:'descB'},
        {imgSrc: '../img/menu_items/menu04/birra.jpg', itemName:'Birra',itemDescription:'descC'},
        {imgSrc: '../img/menu_items/menu04/succo_naturali.jpg', itemName:'Succo Naturali',itemDescription:'descB'}
    ]

    const menu05Items = [
        {imgSrc: '../img/menu_items/menu05/budino_speciale.jpg', itemName:'Budino Speciale',itemDescription:'descA'},
        {imgSrc: '../img/menu_items/menu05/budino.jpg', itemName:'Budino',itemDescription:'descB'},
        {imgSrc: '../img/menu_items/menu05/fruit_salad.jpg', itemName:'Fruit Salad',itemDescription:'descC'},
        {imgSrc: '../img/menu_items/menu05/gelatto.jpg', itemName:'Gelatto',itemDescription:'descC'},
        {imgSrc: '../img/menu_items/menu05/mousse_fragole.jpg', itemName:'Mousse Fragole',itemDescription:'descB'}
    ]

    // Put the items for nav menu, refered in translation.json
    const navItens = [
        {path: '#', name: 'menu01', items: menu01Items},
        {path: '#', name: 'menu02', items: menu02Items},
        {path: '#', name: 'menu03', items: menu03Items},
        {path: '#', name: 'menu04', items: menu04Items},
        {path: '#', name: 'menu05', items: menu05Items}
    ]
   
    return (
        <> 
            <Navbar languages = {languages} itens = {navItens}/> 
            <Banner 
                mainText={t('welcome')}
                caption={t('caption')}
                chooseLanguage={t('chooseLang')}
                languages = {languages}               
            />  
            {navItens.map(({name, items}) => (
                <Section 
                    name={t(name)}
                    items={items}
                />   
            ))}
            <ContactUs name={t('menu06')}/>
        </>
    );
}

export default App