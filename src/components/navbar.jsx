import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { NavLink } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import LanguageButton from './languageSelectButton';

function navbar(props) {

    const navLinks = [
        {
            path: '#',
            name: "Pizza"
        },
        {
            path: '#',
            name: "Pasta"
        },
        {
            path: '#',
            name: "Insalata"
        },
        {
            path: '#',
            name: "Bevande"
        },
        {
            path: '#',
            name: "Dolce"
        },
        {
            path: '#',
            name: "Contatto"
        }
    ]
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar w/ text</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <LanguageButton languages={props.languages} />
                <div class="container">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {navLinks.map(({ path, name }) => (
                            <li key={path}>
                                <button className="dropdown-item " onClick={() => i18next.changeLanguage(code)} > 
                                    {name}
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