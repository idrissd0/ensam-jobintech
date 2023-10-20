import React from "react";
import "./Introduction.css";

const IntroductionSql = () => {
  return (
    <>
      <div id="Introduction">
        <div className="IntrInfo">
          <div className="container">
            <h6>Introduction au métier de développement de base de données </h6>
            <h2>Explorez le potentiel du développement de base de données</h2>
          </div>
        </div>
        <div className="IntrMoreInformation">
          <div className="IntrItem IntrItem1 container">
            <div>
              <h6>
                <img src="https://images.ctfassets.net/344fh7n2hs9h/5nadmJl9e4uJMtfrSRUW5G/d025e7447c7d3aaaa2be0ab9cf63707e/jobtitles_32x32.svg" />
                Les débouchés (les postes que vous pourrez occuper après cette
                formation)
              </h6>
              <p>Développeur de bases de données</p>
              <p>Développeur web service</p>
            </div>
            <div>
              <h6> Pourquoi devenir Développeur Web ?</h6>
              <ul>
                <li>Salaire avoisinant 7 000 Dhs</li>
                <li>
                  Perspectives de carrière : possibilités d’évolution rapide
                  dans l’entreprise.
                </li>
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
              <li className="FirstHeader">
                <h6>Développeur web service</h6>
                <ul>
                  <li>
                    Décrire les aspects physiques et les aspects théoriques
                    d’une base de données relationnelle
                  </li>
                  <li>
                    Décrire l’implémentation Oracle des SGBDR et des SGBD
                    orientés objet
                  </li>
                  <li>Ecrire des instructions SQL SELECT élémentaires</li>
                  <li>
                    Limiter le nombre de lignes extraites par une interrogation
                  </li>
                  <li>Décrire différents types de fonction SQL</li>
                  <li>
                    Écrire des instructions SELECT pour accéder aux données de
                    plusieurs tables en utilisant des équijointures et des
                    non-équijointures
                  </li>
                  <li>Regrouper des données à l’aide de la clause GROUP BY</li>
                  <li>
                    Inclure ou exclure des groupes de lignes à l’aide de la
                    clause HAVING
                  </li>
                  <li>Définir des sous-interrogations</li>
                  <li>Décrire chaque instruction LMD</li>
                  <li>Décrire les principaux objets de base de données</li>
                  <li>Créer des tables</li>
                  <li> Définir des contraintes</li>
                  <li> Créer et mettre à jour des index</li>
                  <li>Créer des utilisateurs</li>
                  <li>
                    Créer des rôles afin de faciliter la configuration et la
                    maintenance du modèle de sécurité
                  </li>
                  <li>
                    Accorder et retirer des privilèges objet à l’aide des
                    instructions GRANT et REVOKE
                  </li>
                </ul>
              </li>
              <li className="FirstHeader">
                <h6>Oracle PL/SQL</h6>
                <ul>
                  <li>Environnement PL/SQL</li>
                  <li>Déclaration de variables</li>
                  <li>Ecrire des instructions exécutables</li>
                  <li>Interagir avec le serveur Oracle</li>
                  <li>Ecrire des structures de contrôle</li>
                  <li>Utiliser des types de données composites</li>
                  <li>Ecrire des curseurs explicites</li>
                  <li>Concepts avancés sur les curseurs explicites</li>
                  <li>Traiter les exceptions</li>
                </ul>
              </li>
              <li className="FirstHeader">
                <h6>UML & java</h6>
                <ul>
                  <li>
                    {" "}
                    Technique de modélisation et de conception d’un système
                    industriel multidisciplinaire à l’aide d’UML et de SysML
                  </li>
                  <li>
                    {" "}
                    La modélisation statique : le diagramme de classes, la
                    notion de classe et d’objet, les attributs, les opérations,
                    les relations d’association, les relations de
                    généralisation/héritage
                  </li>
                  <li>
                    {" "}
                    La modélisation dynamique : Diagramme de séquences, de
                    collaboration, d’état et d’activité, notion de messages
                    synchrones/asynchrones, Modélisation de la communication
                    entre objets avec le diagramme de séquence, diagramme de
                    déploiement et de composant
                  </li>
                  <li>
                    {" "}
                    Les éléments du langage JAVA et manipulation des classes et
                    objets
                  </li>
                  <li> Les classes abstraites et les interfaces</li>
                  <li> La gestion des Exceptions</li>
                  <li> Les interfaces Home Machine en Java</li>
                  <li> Gestion des événements</li>
                  <li> Java Database Connectivity (JDBC)</li>
                  <li> Les Processus Légers</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default IntroductionSql;
