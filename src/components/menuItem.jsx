import './menuItem.css';
function MenuItem(props){
    return(  
        <div className="card border-secondary mb-2">
            <div className="card-header">{props.itemName}</div>
            <div className="card-body"> 
                <img src={props.imgSrc} class="img-fluid imgCard" alt={props.imgAlt}/> 
                <div className="textCard">
                    <p className="card-text limited">{props.itemDescription}</p>
                </div>
            </div>
        </div>
    )
}
export default MenuItem;