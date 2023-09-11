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
        <nav className="navbar navbar-light bg-light flex-nowrap justify-content-center fixed-top second-line" id="menuNav">
            <div className="container">  
                    {props.itens.map(({ path, name, id }) => ( 
                            <a className="nav-link" id={id} href={`#${t(name)}`} onClick={closeToggle}>
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
                <a className="navbar-brand" href="#" id="brandName">{props.brand}</a>
                <LanguageButton languages={props.languages} /> 
            </div>
        </nav>
        </>
    );
}

export default navbar;