import React, {useState} from "react"; 
import Modal from 'react-bootstrap/Modal'; 
import { useTranslation, initReactI18next } from "react-i18next"; 
import i18next from 'i18next'; 

function languageModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { t } = useTranslation();
  
    return (
      <>
        <button onClick={handleShow} variant="primary" type='button' className='btn btn-secondary btn-xl js-scrll-trigger'>
            {props.chooseLanguage}
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
            <div className="container">  
                <div className="row">  
                    {props.languages.map(({ code, name, country_code }) => (
                        <div key={country_code}>
                            <div role="button" onClick={() => i18next.changeLanguage(code)} >

                              <span className={`flag-icon flag-icon-${country_code}`}></span>
                              <span>{name}</span>                                  
                            </div>  
                        </div>
                    ))} 
                </div>     
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  export default languageModal;