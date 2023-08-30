
function MenuItem(props){
    return(  
        <div class="card border-secondary mb-2" >
            <div class="card-header">{props.itemName}</div>
            <div class="card-body text-secondary">
                <img src={props.imgSrc} alt={props.imgAlt}/>
                <p class="card-text">{props.itemDescription}</p>
            </div>
        </div>
    )
}
export default MenuItem;