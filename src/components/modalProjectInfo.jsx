import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next";
import './modalProjectInfo.css';

function ProjectInfo() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { t } = useTranslation(); 

	return (
		<>
			<button className="projectButton" onClick={handleShow} type="button">
				<span>{t('about')}</span>
			</button>

			<Modal
				show={show} onHide={handleClose} keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>{t('about')}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>{t('aboutp1')}</p>
					<p>{t('aboutp2')}</p>
					<p>{t('aboutp3')}</p>
					<p>{t('aboutp4')}</p>
				</Modal.Body>
				<Modal.Footer>
					<button onClick={handleClose} id="closeModalInfo" type="button" className='btn btn-xl'>
						<span>{t('close')}</span>
					</button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
export default ProjectInfo;