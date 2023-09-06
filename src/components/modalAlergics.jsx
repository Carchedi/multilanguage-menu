import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next";
import './modalAlergics.css';

import Chili from './icons/chili';
import Crustaceans from './icons/crustaceans';
import Egg from './icons/egg';
import Glutem from './icons/glutem';
import Milk from './icons/milk';
import Pork from './icons/pork';
import SeaFood from './icons/seafood';
import TransFat from './icons/transFat';

function alergicsModal(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { t } = useTranslation();

	const InfoIcon = ({ width = props.width }) => (
		<svg xmlns="http://www.w3.org/2000/svg" width={width} height={width} fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
			<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
			<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
		</svg>
	)

	if (props.width == 0) {
		return
	}

	return (
		<>
			<button onClick={handleShow} type="button" class="btn infoButton">
				<InfoIcon />
			</button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>{t('dietaryRestrictions')}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<table class="table table-borderless"> 
						<tbody>  
							<tr><td className="simpleCell"><Chili iconType="modalIcon"/></td><td className="simpleCell"><p class="text-left">Left aligned text.</p></td> 
							    <td className="simpleCell"><Crustaceans iconType="modalIcon"/></td><td className="simpleCell"><p class="text-left">Left aligned text.</p></td></tr>
							<tr><td className="simpleCell"><Egg iconType="modalIcon"/></td><td className="simpleCell"><p class="text-left">Left aligned text.</p></td>
								<td className="simpleCell"><Glutem iconType="modalIcon"/></td><td className="simpleCell"><p class="text-left">Left aligned text.</p></td></tr>
							<tr><td className="simpleCell"><Milk iconType="modalIcon"/></td><td className="simpleCell"><p class="text-left">Left aligned text.</p></td>
								<td className="simpleCell"><SeaFood iconType="modalIcon"/></td><td className="simpleCell"><p class="text-left">Left aligned text.</p></td></tr>
							<tr><td className="simpleCell"><TransFat iconType="modalIcon"/></td><td className="simpleCell"><p class="text-left">Left aligned text.</p></td>
								<td className="simpleCell"><Pork iconType="modalIcon"/></td><td className="simpleCell"><p class="text-left">Left aligned text.</p></td></tr>
						</tbody>
					</table>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default alergicsModal;