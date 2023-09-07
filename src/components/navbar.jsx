import './navbar.css'; 
import LanguageButton from './languageSelectButton'; 
import { useTranslation, initReactI18next } from "react-i18next"; 


function navbar(props) { 
    const { t } = useTranslation(); 

    const closeToggle = event => {
        const button = document.getElementById("chave");
        button.click();
    }
  
    return ( 
        <>
        <nav className="navbar navbar-light bg-light flex-nowrap fixed-top second-line">
            <div className="container">  
                    {props.itens.map(({ path, name }) => ( 
                            <a className="nav-link" href={`#${t(name)}`} onClick={closeToggle}>
                            {t(name).toUpperCase()}
                            </a> 
                    ))} 
                    <a className="nav-link" href={`#${t("menu06")}`} onClick={closeToggle}>
                    {t("menu06").toUpperCase()}
                    </a> 
            </div>  
        </nav>
        <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" id="brandName">Carchedi Ristorante </a>
                <LanguageButton languages={props.languages} /> 
            </div>
        </nav>
        </>
    );
}

export default navbar;