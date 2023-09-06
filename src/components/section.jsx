import './section.css';
import MenuItem from './menuItem';

function Section(props){
    return(
        <div id={props.name} className="w-100">
            <div class="container">
            <h1>{props.name}</h1> 
            <hr/>
                <div class="row"> 
                    {props.items.map(({imgSrc, itemName,itemDescription, alergics}) => (
                        <div class="col-sm-6 col-md-4 d-flex align-items-stretch" style={{padding: "1rem"}}> 
                            <MenuItem 
                                imgSrc={imgSrc}
                                imgAlt={itemName}
                                itemName={itemName}
                                itemDescription={itemDescription}
                                alergics={alergics}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Section;