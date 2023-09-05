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


function MenuItem(props){
    const { t } = useTranslation();
 
    const InfoIcon = ({ width = 24, height = 24 }) =>(
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
    )
  
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
                        <div class="col-sm">                         
                                {props.alergics.map((item) =>{
                                    if (item === 'chili') {
                                        return <Chili/>;
                                    } 
                                    if (item === 'crustaceans') {
                                        return <Crustaceans/>;
                                    } 
                                    if (item === 'egg') {
                                        return <Egg/>;
                                    }
                                    if (item === 'glutem') {
                                        return <Glutem/>;
                                    } 
                                    if (item === 'milk') {
                                        return <Milk/>;
                                    } 
                                    if (item === 'pork') {
                                        return <Pork/>;
                                    } 
                                    if (item === 'seafood') {
                                        return <SeaFood/>;
                                    } 
                                    if (item === 'trnasfat') {
                                        return <TransFat/>;
                                    } 
                                })} 
                             
                        </div>
                        <div class="col-sm text-end" style={{paddingBottom:"0.5rem"}}>
                            <InfoIcon/>
                            {props.alergics (() =>{
                                    //if (props.alergics.s === 'chili') {
                                         <p>{props.alergics.length}</p>
                                    //}
                                })} 
                        </div>  
                    </div>
                </div>
                 
            </div>
        </div>
    )
}
export default MenuItem;