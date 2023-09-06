import React, {useState} from "react"; 
import Modal from 'react-bootstrap/Modal'; 
import { useTranslation} from "react-i18next"; 
import i18next from 'i18next'; 
import './modal.css';

function languageModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { t } = useTranslation();
  
    const TranslateIcon = ({ width = 24, height = 24 }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
            <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
            <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
        </svg>
    )

    return (
      <>
        <button onClick={handleShow} type='button' className='btn btn-xl js-scrll-trigger main-button'>
          <div class="container">
              <div class="row"> 
                	<div class="col-10">
                		{props.chooseLanguage} 
					</div>
                	<div class="col-2">
						<TranslateIcon/>
                  	</div>
              </div>
          </div> 
        </button>
         
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{t('chooseLang')}</Modal.Title>
          </Modal.Header>
          <Modal.Body>    
            <div className="row">  
                {props.languages.map(({ code, name, country_code }) => (
                    <div key={country_code} className="col-md-4 text-center" onClick={handleClose}>
                        <div role="button" onClick={() => i18next.changeLanguage(code)} >
                          <div className={`flag-icon flag-icon-${country_code}`} style={{ width: '100px', height: '100px' }}></div>
                        </div>  
                        <span >{name}</span>                                  
                    </div>
                ))} 
            </div>      
          </Modal.Body>
        </Modal>
      </>
    );
  }

  export default languageModal;