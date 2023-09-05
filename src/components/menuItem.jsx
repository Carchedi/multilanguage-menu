import './menuItem.css';
import { useTranslation} from "react-i18next"; 

function MenuItem(props){
    const { t } = useTranslation(); 

    return(  
        <div className="card border-secondary mb-2">
            <div className="card-header">{props.itemName}</div>
            <div className="card-body"> 
                <img src={props.imgSrc} class="img-fluid imgCard" alt={props.imgAlt}
                    style={{ width:'250px', height: '180px'}}
                /> 
                <div className="textCard">
                    <p className="card-text limited">{props.itemDescription}</p>
                </div>
            </div>
        </div>
    )
}
export default MenuItem;