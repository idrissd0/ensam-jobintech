import React from "react";
import './Introduction.css'

const Introduction = ()=>{
    return<>

        <div id="Introduction">
            <div className="IntrInfo">
                <h6>Introduction au métier de développement Web </h6>
                <h2>Explorez le potentiel du développement Web</h2>
            </div>
            <div className="IntrMoreInformation">
                <div className="IntrItem IntrItem1">
                    <div>
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
        </div>
    
    </>
}
export default Introduction