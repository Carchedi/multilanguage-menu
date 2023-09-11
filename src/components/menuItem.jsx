import './menuItem.css';
import { useTranslation} from "react-i18next";

import Chili from './icons/chili';
import Crustaceans from './icons/crustaceans'; 
import Egg from './icons/egg';
import Glutem from './icons/glutem';
import Milk from './icons/milk';
import Pork from './icons/pork';
import SeaFood from './icons/seafood';
import TransFat from './icons/transFat';
import Modal from './modalAlergics';


function MenuItem(props){
    const { t } = useTranslation();
    let w = 0;

    if(props.alergics.length > 0){
        w = 25;
    } 
 
    return( 
        <div className="card border-secondary" >
            <div className="card-header">{props.itemName}</div>
            <div className="card-body"> 
                <img src={props.imgSrc} class="img-fluid imgCard" alt={props.imgAlt} /> 
                <div className="textCard">
                    <p className="card-text limited">{props.itemDescription}</p>
                </div>
            </div>
            <div className="cord-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-8">                         
                                {props.alergics.map((item) =>{
                                    if (item == 'chili') {
                                        return <Chili iconType="simpleIcon"/>;
                                    } 
                                    if (item == 'crustaceans') {
                                        return <Crustaceans iconType="simpleIcon"/>;
                                    } 
                                    if (item == 'egg') {
                                        return <Egg iconType="simpleIcon"/>;
                                    }
                                    if (item == 'glutem') {
                                        return <Glutem iconType="simpleIcon"/>;
                                    } 
                                    if (item == 'milk') {
                                        return <Milk iconType="simpleIcon"/>;
                                    } 
                                    if (item == 'pork') {
                                        return <Pork iconType="simpleIcon"/>;
                                    } 
                                    if (item == 'seafood') {
                                        return <SeaFood iconType="simpleIcon"/>;
                                    } 
                                    if (item == 'trnasfat') {
                                        return <TransFat iconType="simpleIcon"/>; 
                                    } 
                                })} 
                             
                        </div>
                        <div class="col-4 text-end"> 
                            <Modal
                                width={w}
                            />        
                        </div>  
                    </div>
                </div> 
            </div>
        </div>
    )
}
export default MenuItem;