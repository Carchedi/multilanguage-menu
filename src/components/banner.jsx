import './banner.css'
import Modal from './modal';
import ProjectInfo from './modalProjectInfo';

function Banner(props){
 
    return( 
        <header className="masthead text-center d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1 className="text-uppercase">
                            <strong>{props.mainText}</strong>
                        </h1>
                        <hr></hr>
                        <h4>{props.caption}</h4>
                        <Modal 
                            chooseLanguage={props.chooseLanguage}
                            languages={props.languages}
                        /> 
                    </div>
                    <div className="col-lg-10 mx-auto">
                        <ProjectInfo/>
                    </div>
                    
                </div>
            </div>
        </header> 
    )
}
export default Banner;