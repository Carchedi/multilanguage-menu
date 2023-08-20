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
        <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" id="brandName">Carchedi Ristorante </a> 
                <button id="chave" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" >
                    <span className="navbar-toggler-icon"></span>
                </button>  
                <LanguageButton languages={props.languages} />
                <div class="container">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="nav-items">
                            {props.itens.map(({ path, name }) => ( 
                                <li className="nav-item active" key={path}>
                                    <a className="nav-link" href={`#${t(name)}`} onClick={closeToggle}>
                                    {t(name).toUpperCase()}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav> 

    );
}

export default navbar;