import './banner.css'
function Banner(props){
 
    return( 
        <header className="masthead text-center d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1 className="text-uppercase">
                            <strong>{props.mainText}</strong>
                        </h1>
                         <h6>{props.caption}</h6>

                         <hr></hr>
                        <button variant="primary" type='button' className='btn btn-secondary btn-xl js-scrll-trigger'>
                            {props.chooseLanguage}
                        </button> 
                    </div>
                    
                </div>
            </div>
        </header> 
    )
}
export default Banner;