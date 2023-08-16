import './navbar.css'; 
import LanguageButton from './languageSelectButton'; 
import { useTranslation, initReactI18next } from "react-i18next"; 

function navbar(props) { 
    const { t } = useTranslation(); 
    return (

        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Carchedi Ristorante </a> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>  
                <LanguageButton languages={props.languages} />
                <div class="container">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="nav-items">
                        {props.itens.map(({ path, name }) => ( 
                            <li key={path}>
                                <button className="dropdown-item" onClick={() => i18next.changeLanguage(code)} > 
                                {t(name).toUpperCase()}
                                </button>
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