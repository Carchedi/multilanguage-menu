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
        backend: { loadPath: './assets/locales/{{lng}}/translation.json'},
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
        {imgSrc: './src/img/menu_items/menu01/calzonne.jpg',   itemName:t('menu01ItemA_name'), itemDescription:t('menu01ItemA_description'), alergics:['trnasfat', 'glutem']},
        {imgSrc: './src/img/menu_items/menu01/funghi.jpg',     itemName:t('menu01ItemB_name'), itemDescription:t('menu01ItemB_description'), alergics:['glutem']},
        {imgSrc: './src/img/menu_items/menu01/margherita.jpg', itemName:t('menu01ItemC_name'), itemDescription:t('menu01ItemC_description'), alergics:[]},
        {imgSrc: './src/img/menu_items/menu01/pollo.png',      itemName:t('menu01ItemD_name'), itemDescription:t('menu01ItemD_description'), alergics:[]},
        {imgSrc: './src/img/menu_items/menu01/prosciutto.jpg', itemName:t('menu01ItemE_name'), itemDescription:t('menu01ItemE_description'), alergics:[]},
        {imgSrc: './src/img/menu_items/menu01/salame.jpg',     itemName:t('menu01ItemF_name'), itemDescription:t('menu01ItemF_description'), alergics:[]},
        {imgSrc: './src/img/menu_items/menu01/tonno.jpg',      itemName:t('menu01ItemG_name'), itemDescription:t('menu01ItemG_description'), alergics:[]}
    ]

    const menu02Items = [
        {imgSrc: './../src/img/menu_items/menu02/canellonni.png', itemName:t('menu02ItemA_name'), itemDescription:t('menu02ItemA_description'),  alergics:['chili','b','c']},
        {imgSrc: './../src/img/menu_items/menu02/gnocchi.png',    itemName:t('menu02ItemB_name'), itemDescription:t('menu02ItemB_description'),  alergics:['chili','crustaceans','c']},
        {imgSrc: './../src/img/menu_items/menu02/lasagna.png',    itemName:t('menu02ItemC_name'), itemDescription:t('menu02ItemC_description'),  alergics:['chili','glutem','c']},
        {imgSrc: './../src/img/menu_items/menu02/Linguine.png',   itemName:t('menu02ItemD_name'), itemDescription:t('menu02ItemD_description'),  alergics:['chili','b','c']},
        {imgSrc: './../src/img/menu_items/menu02/macaroni.jpg',   itemName:t('menu02ItemE_name'), itemDescription:t('menu02ItemE_description'),  alergics:['crustaceans','b','c']},
        {imgSrc: './../src/img/menu_items/menu02/penne.png',      itemName:t('menu02ItemF_name'), itemDescription:t('menu02ItemF_description'),  alergics:['chili','b','c']},
        {imgSrc: './../src/img/menu_items/menu02/raviolli.jpg',   itemName:t('menu02ItemG_name'), itemDescription:t('menu02ItemG_description'),  alergics:['chili','crustaceans','c']},
        {imgSrc: './../src/img/menu_items/menu02/spaghetti.jpg',  itemName:t('menu02ItemH_name'), itemDescription:t('menu02ItemH_description'),  alergics:['chili','b','c']},
        {imgSrc: './../src/img/menu_items/menu02/vermicelli.png', itemName:t('menu02ItemI_name'), itemDescription:t('menu02ItemI_description'),  alergics:['chili','glutem','c']}
    ]

    const menu03Items = [
        {imgSrc: './../src/img/menu_items/menu03/insalata01.jpg', itemName:t('menu03ItemA_name'), itemDescription:t('menu03ItemA_description'),  alergics:['chili','b','c']},
        {imgSrc: './../src/img/menu_items/menu03/insalata02.jpg', itemName:t('menu03ItemB_name'), itemDescription:t('menu03ItemB_description'),  alergics:['chili','crustaceans','c']},
        {imgSrc: './../src/img/menu_items/menu03/insalata03.jpg', itemName:t('menu03ItemC_name'), itemDescription:t('menu03ItemC_description'),  alergics:['chili','glutem','c']},
        {imgSrc: './../src/img/menu_items/menu03/insalata04.jpg', itemName:t('menu03ItemD_name'), itemDescription:t('menu03ItemD_description'),  alergics:['chili','b','c']},
        {imgSrc: './../src/img/menu_items/menu03/insalata05.jpg', itemName:t('menu03ItemE_name'), itemDescription:t('menu03ItemE_description'),  alergics:['chili','b','c']},
        {imgSrc: './../src/img/menu_items/menu03/insalata06.jpg', itemName:t('menu03ItemF_name'), itemDescription:t('menu03ItemF_description'),  alergics:['crustaceans','b','c']},
        {imgSrc: './../src/img/menu_items/menu03/insalata07.jpg', itemName:t('menu03ItemG_name'), itemDescription:t('menu03ItemG_description'),  alergics:['chili','b','c']},
        {imgSrc: './../src/img/menu_items/menu03/insalata08.jpg', itemName:t('menu03ItemH_name'), itemDescription:t('menu03ItemH_description'),  alergics:['crustaceans','b','c']},
        {imgSrc: './../src/img/menu_items/menu03/insalata09.jpg', itemName:t('menu03ItemI_name'), itemDescription:t('menu03ItemI_description'),  alergics:['chili','b','c']}
    ]

    const menu04Items = [
        {imgSrc: './../src/img/menu_items/menu04/acqua_minerale.jpg',     itemName:t('menu04ItemA_name'), itemDescription:t('menu04ItemA_description'),  alergics:[]},
        {imgSrc: './../src/img/menu_items/menu04/bevande_analcoliche.jpg',itemName:t('menu04ItemB_name'), itemDescription:t('menu04ItemB_description'),  alergics:[]},
        {imgSrc: './../src/img/menu_items/menu04/birra.jpg',              itemName:t('menu04ItemC_name'), itemDescription:t('menu04ItemC_description'),  alergics:[]},
        {imgSrc: './../src/img/menu_items/menu04/succo_naturali.jpg',     itemName:t('menu04ItemD_name'), itemDescription:t('menu04ItemD_description'),  alergics:[]}
    ]

    const menu05Items = [
        {imgSrc: './../src/img/menu_items/menu05/budino_speciale.jpg',itemName:t('menu05ItemA_name'), itemDescription:t('menu05ItemA_description'),  alergics:['milk','egg']},
        {imgSrc: './../src/img/menu_items/menu05/budino.jpg',         itemName:t('menu05ItemB_name'), itemDescription:t('menu05ItemB_description'),  alergics:['milk','egg']},
        {imgSrc: './../src/img/menu_items/menu05/fruit_salad.jpg',    itemName:t('menu05ItemC_name'), itemDescription:t('menu05ItemC_description'),  alergics:[]},
        {imgSrc: './../src/img/menu_items/menu05/gelatto.jpg',        itemName:t('menu05ItemD_name'), itemDescription:t('menu05ItemD_description'),  alergics:['milk','egg']},
        {imgSrc: './../src/img/menu_items/menu05/mousse_fragole.jpg', itemName:t('menu05ItemE_name'), itemDescription:t('menu05ItemE_description'),  alergics:['milk','egg']}
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