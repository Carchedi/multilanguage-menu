
function MenuItem(props){
    return(  
        <div class="card border-secondary mb-2" >
            <div class="card-header">{props.itemName}</div>
            <div class="card-body text-secondary">
                <img src={props.imgSrc} alt={props.imgAlt} style={{width:"100%", height:"100%"}}/>
                <p class="card-text">{props.itemDescription}</p>
            </div>
        </div>
    )
}
export default MenuItem;