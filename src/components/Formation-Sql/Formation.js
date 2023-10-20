import React from "react";
import './Formation.css'
import { Link } from "react-router-dom";
import Introduction from "./Introcution";

const FormationSql = ()=>{
    return<>
        <div id="FormationPage">
            <div className="ForInfo container">
                <h1>Data SQL Webservices – ENSAM</h1>
                <p>Deviens développeur de bases de données et développeur web service en 4 mois avec l’ENSAM de Rabat</p>
                <img src="https://jobintech.academy/wp-content/uploads/2023/06/Untitled-design-23.png" />
                <div className="ForInfoMore">
                    <img src="https://jobintech.academy/wp-content/uploads/2023/06/Lieu-de-formation-Casablanca-500-%C3%97-200-px-12-300x120.png"/>
                    <img src="https://jobintech.academy/wp-content/uploads/2023/06/Lieu-de-formation-Casablanca-500-%C3%97-200-px-8-300x120.png" />
                    <img src="https://jobintech.academy/wp-content/uploads/2023/06/Lieu-de-formation-Casablanca-500-%C3%97-200-px-1-2-300x120.png" />
                    <img src="https://jobintech.academy/wp-content/uploads/2023/06/Lieu-de-formation-Casablanca-500-%C3%97-200-px-11.png" />
                </div>
                <Link to="/inscrire"><button className="submitB">S'inscrire</button></Link>
            </div>
            <Introduction />
        </div>  
    </>
}

export default FormationSql