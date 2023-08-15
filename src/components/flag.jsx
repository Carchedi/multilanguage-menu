import React, {useState} from "react";  
import { useTranslation, initReactI18next } from "react-i18next";  


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
    
function generateFlag(props){
    return (
        <>    
            <button href="#" class="list-group-item list-group-item-action"  onClick={() => i18next.changeLanguage(code)} > 
                <div className="row">
                    <div className="col-sm-2">
                        <img className="img-fluid" 
                            src={`../node_modules/flag-icon-css/flags/4x3/${props.country_code}.svg`}
                            alt={props.name} 
                            style={{ width: '100px' }}
                        />     
                    </div>
                    <div className="col-sm-2">
                        <span>{props.name}</span>
                    </div>
                </div>
            </button>
            
        </>
    );
}

export default generateFlag;