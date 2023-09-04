import './section.css';
import MenuItem from './menuItem';

function Section(props){
    return(
        <div id={props.name} className="col-md-12">
            <div class="container">
            <h1>{props.name}</h1> 
            <hr/>
                <div class="row"> 
                    {props.items.map(({imgSrc, itemName,itemDescription}) => (
                        <div class="col-md-3 d-flex align-items-stretch">
                            <MenuItem 
                                imgSrc={imgSrc}
                                imgAlt={itemName}
                                itemName={itemName}
                                itemDescription={itemDescription}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Section;