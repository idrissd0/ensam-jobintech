import React from "react";
import "./Formation.css";
import { Link } from "react-router-dom";
import Introduction from "./Introcution";

const Formation = () => {
  return (
    <>
      <div id="FormationPage">
        <div className="ForInfo container">
          <h1>Développement Fullstack PHP - ENSAM</h1>
          <p>Deviens développeur web en 4 mois avec ENSAM de Rabat</p>
          <img src="https://jobintech.academy/wp-content/uploads/2023/06/Untitled-design-23.png" />
          <div className="ForInfoMore">
            <img src="https://jobintech.academy/wp-content/uploads/2023/06/Lieu-de-formation-Casablanca-500-%C3%97-200-px-12-300x120.png" />
            <img src="https://jobintech.academy/wp-content/uploads/2023/06/Lieu-de-formation-Casablanca-500-%C3%97-200-px-8-300x120.png" />
            <img src="https://jobintech.academy/wp-content/uploads/2023/06/Lieu-de-formation-Casablanca-500-%C3%97-200-px-1-2-300x120.png" />
            <img src="https://jobintech.academy/wp-content/uploads/2023/06/Lieu-de-formation-Casablanca-500-%C3%97-200-px-11.png" />
          </div>
          <Link to="/inscrire">
            <button className="submitB">S'inscrire</button>
          </Link>
        </div>
        <Introduction />
      </div>
    </>
  );
};

export default Formation;
