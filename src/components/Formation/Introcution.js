import React from "react";
import './Introduction.css'

const Introduction = ()=>{
    return<>

        <div id="Introduction">
            <div className="IntrInfo">
                <div className="container">
                <h6>Introduction au métier de développement Web </h6>
                <h2>Explorez le potentiel du développement Web</h2>
                </div>
            </div>
            <div className="IntrMoreInformation">
                <div className="IntrItem IntrItem1 container">
                    <div >
                        <h6>
                            <img src="https://images.ctfassets.net/344fh7n2hs9h/5nadmJl9e4uJMtfrSRUW5G/d025e7447c7d3aaaa2be0ab9cf63707e/jobtitles_32x32.svg" />
                            Les débouchés (les postes que vous pourrez occuper après cette formation)
                        </h6>
                        <p> Developpeur web</p>
                    </div>
                    <div>
                        <h6> Pourquoi devenir Développeur Web ?</h6>
                        <ul>
                            <li>Salaire avoisinant 7 000 Dhs</li>
                            <li>Perspectives de carrière : possibilités d’évolution rapide dans l’entreprise.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="ProgrammFormation">
                <h1 className="HeaderProgrammation container">
                    Programme de la formation
                </h1>
                <div className="FormationInfo container">
                    <ul>
                            <li className="FirstHeader"><h6>Développement web front end</h6>
                                <ul>
                                    <li>Les concepts de la programmation</li>
                                    <li>   HTML5</li>
                                    <li>    CSS</li>
                                    <li>    L’essentiel de JavaScript</li>
                                    <li>    JQuery</li>
                                    <li>    Créer une page web interactive avec HTML5 et CSS</li>
                                    <li>    Bootstrap</li>
                                    <li>    Le design web responsif</li>
                                    <li>    JS</li>
                                    <li>    Angular</li>
                                    <li>    React</li>
                                    </ul>
                            </li>
                            <li className="FirstHeader">
                                    <h6>Développement web back end</h6>
                                <ul>
                                    <li>PHP initiation</li>
                                    <li>MySQL</li>
                                    <li>Serveur Web</li>
                                    <li>PHP avancé</li>
                                    <li>PHP orienté objet</li>
                                    <li>Symfony</li>
                                    <li>WordPress</li>
                                    
                                </ul>

                            </li>
                    </ul>
                </div>
            </div>
        </div>
    
    </>
}
export default Introduction