import React from "react";
import './StroyCom.css'

const StroyCom = ({img,name,title,par})=>{
    console.log(img)
    return <>
        <div id="story">
            <img src={img} />
            <h4>{name}</h4>
            <h2>{title}</h2>
            <p>{par}</p>

        </div>
    </>
}
export default StroyCom;