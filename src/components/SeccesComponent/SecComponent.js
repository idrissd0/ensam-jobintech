import React from "react";
import './SeecComponent.css'
import SecStoryCom from "./SecStoryCom"
const SecComponent = ()=>{
    return <>
        <div id="SecComponent" className="container">
            <div className="SecInfo">
                <h1>Témoignages de nos alumnis</h1>
                <p>N'hésitez pas à explorer les témoignages de réussite de nos anciens élèves et à vous laisser inspirer par leur parcours extraordinaire.</p>

            </div>
            <div className="SecImage">
                <img src="https://jobintech.academy/wp-content/uploads/2023/05/ian-schneider-TamMbr4okv4-unsplash-1024x684.jpg" />
                
            </div>
            
        </div>
        <SecStoryCom/>
    </>
}

export default SecComponent;