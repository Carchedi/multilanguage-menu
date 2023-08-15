import React, {useState} from "react"; 
import Modal from 'react-bootstrap/Modal'; 
import { useTranslation, initReactI18next } from "react-i18next";
import Flag from './flag';

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
            <div class="list-group"> 
              {props.languages.map(({ code, name, country_code }) => ( 
                <Flag 
                  code={code}
                  name={name}
                  country_code={country_code} 
                />      
              ))}
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  export default languageModal;