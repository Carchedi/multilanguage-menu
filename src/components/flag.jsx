import React, {useState} from "react";  
import { useTranslation, initReactI18next } from "react-i18next";  

function generateFlag(props){
    return (
        <>
            <div className="container ">
                <div> 
                    <img src={`../node_modules/flag-icon-css/flags/4x3/${props.country_code}.svg`}
                        alt={props.name} 
                        style={{ width: '80px' }}
                    />  
                    <span className="rounded float"></span> 
                    <span>{props.name}</span> 
                </div> 
            </div>
        </>
    );
}

export default generateFlag;