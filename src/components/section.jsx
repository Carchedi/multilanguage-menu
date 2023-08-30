import './section.css';
import MenuItem from './menuItem';

function Section(props){
    return(
        <div id={props.name} className="col-md-12">
            <div class="container">
            <h1>{props.name}</h1>
            <hr/>
                <div class="row">
                    <div class="col-md-3">
                        <MenuItem 
                            imgSrc="../img/menu_items/birra.jpg"
                            imgAlt={props.name}
                            itemName={props.name}
                            itemDescription=" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
                        />
                    </div>
                    <div class="col-md-3">
                        <MenuItem 
                            imgSrc="../img/menu_items/budino.jpg"
                            imgAlt={props.name}
                            itemName={props.name}
                            itemDescription=" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
                        />
                    </div>
                    <div class="col-md-3">
                        <MenuItem 
                            imgSrc="../img/menu_items/birra.jpg"
                            imgAlt={props.name}
                            itemName={props.name}
                            itemDescription=" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
                        />
                    </div>
                    <div class="col-md-3">
                        <MenuItem 
                            imgSrc="../img/menu_items/budino.jpg"
                            imgAlt={props.name}
                            itemName={props.name}
                            itemDescription=" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
                        />
                    </div>
                    <div class="col-md-3">
                        <MenuItem 
                            imgSrc="../img/menu_items/birra.jpg"
                            imgAlt={props.name}
                            itemName={props.name}
                            itemDescription=" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
                        />
                    </div>
                    <div class="col-md-3">
                        <MenuItem 
                            imgSrc="../img/menu_items/budino.jpg"
                            imgAlt={props.name}
                            itemName={props.name}
                            itemDescription=" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;