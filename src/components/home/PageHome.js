import React, { useState, useEffect } from "react";
import "./PageHome.css";
import Jonintech from "../../assets/logo-jobintech.png";
import UM5 from "../../assets/ensam-logo.jpg";
import Ensam from "../../assets/um5.jpg";
import Headingjobintech from "../../assets/heading-jobintech.jpg";
import NumericCluster from "../../assets/maroc-numeric-cluster.png";
import CDG from "../../assets/CDG.jpg";
import rdmaroc from "../../assets/ministère-de-l'enseignement-supérieur-de-la-recherche-scientifique-et-de-l'innovation.png";
import MdTransitionReforme from "../../assets/ministère-de-la-transition-numérique-et-de-la-réforme-administrative.png";

function PageHome() {
  // useEffect(() => {
  //   const userJSON = localStorage.getItem('user');
  //   if (userJSON) {
  //     const user = JSON.parse(userJSON);
  //     setEmail(user.email);
  //   } else {
  //     console.log('User data not found in localStorage');
  //     navigate('/Login')
  //   }
  // }, []);

  return (
    <div className="container-fluid">
      <section className="ensam-intro my-3  ">
        <div className="section-header row container-fluid m-auto">
          <div className="bg-light d-flex justify-content-center ">
            <img src={UM5} className=" " alt="" />
            <img src={Ensam} className=" " alt="" />
          </div>
        </div>

        <div className="after-header row container-fluid m-auto">
          <p className="titre">
            {" "}
            PRÉSENTATION DE L'ECOLE NATIONALE SUPÉRIEURE D'ARTS ET MÉTIERS{" "}
          </p>

          <p class="text-align-justify col">
            En 2009, avec son&nbsp; transfert à&nbsp;&nbsp; l'Université
            Mohammed V, l'ENSET a progressivement amélioré son potentiel de
            développement et ses offres de formation, à travers la création de
            nouvelles filières et a réussi à démarrer dans la foulée 6 DUT, 5
            Licences professionnelles et 2 Masters. L'année 2014, marquée par un
            nouveau Cahier des Normes Pédagogiques Nationales, a constitué un
            tournant capital dans l'évolution de l'ENSET, puisqu'une nouvelle
            offre de formation a été mise en place, caractérisée principalement
            par l'accréditation de trois filières d'ingénieur, en Conception et
            Production Industrielles, en Génie Electrique et en Génie
            Biomédical. Cette nouvelle situation a constitué un formidable élan
            et a donné lieu à une remarquable montée en puissance.
            <br /> Aujourd'hui, l'ENSET est à la croisée des chemins, puiqu'elle
            est appelée à changer de paradigme dans le cadre de son projet de
            transformation en ENSAM-Rabat pour&nbsp; confirmer sa place de
            leader dans la formation d'ingénieurs à l'échelle nationale. Ainsi,
            par son passé, son expérience et son expertise, l'école ambitionne
            de continuer à jouer un rôle prépondérant dans la formation d'élites
            dans le domaine technique et de l'ingénierie. Tous les efforts sont
            déployés pour que L'ENSET soit un établissement dynamique, innovant
            et créatif dans ses missions d'enseignement et de recherche avec
            éthique et professionnalisme, dans une posture d'ouverture, de
            coopération et de partenariats avec les communautés locales,
            régionales, continentales et internationales.
          </p>
          <iframe
            // width="560"
            height="500"
            src="https://www.youtube.com/embed/ezztwnooO6A?si=x9B5jcD8uZUubXH3"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="col"
          ></iframe>
        </div>
      </section>

      <section className="jobintech-intro ">
        <div className="section-header row container-fluid m-auto mb-2">
          <div className="col bg-light d-flex justify-content-center">
            <img src={Jonintech} className="m-auto" alt="" />
          </div>
        </div>

        <div className="after-header container-fluid m-auto my-4 row">
          <div className="paragraphs-container col-7 ">
            <div className="paragraphs d-flex flex-column justify-content-center  h-100">
              <p class="heading text-align-justify ">
                15.000 talents job-ready pour le secteur des technologies
                digitales d'ici 2026
              </p>
              <p class="text-align-justify ">
                Jobintech le label de référence en formation-insertion,
                spécialiste du reskilling/upskilling de talents Job-Ready dans
                le secteur IT.
              </p>
            </div>
          </div>

          <div className="col image-container">
            <div className="h-100 w-100 d-flex justify-content-center">
              <img
                src={Headingjobintech}
                alt="jobintech heading"
                className="w-75"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="Partenaires">
        <h1 className="mb-3">Partenaires du projet</h1>
        <div className="Partenaires-container w-100 row">
          <div className="col-3">
            <img
              src={NumericCluster}
              alt="jobintech heading"
              className="w-75"
            />
          </div>
          <div className="col-3">
            <img src={CDG} alt="jobintech heading" className="w-75" />
          </div>
          <div className="col-3">
            <img src={rdmaroc} alt="jobintech heading" className="w-75" />
          </div>
          <div className="col-3">
            <img
              src={MdTransitionReforme}
              alt="jobintech heading"
              className="w-75"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default PageHome;
