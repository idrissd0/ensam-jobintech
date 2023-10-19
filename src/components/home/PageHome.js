import React, { useState, useEffect } from 'react';
import './PageHome.css';
import Um5wide from "../../assets/um5-wide.png";


function PageHome() {

  return (
    <div className='container-fluid'>

      <section className='ensam-intro'>

        <div className='page-header row container-fluid m-auto'>
          <div className='col left-sec '>
            <p className='text-light'>
              Ecole Nationale Supérieure d'Arts et Métiers
            </p>
          </div>

          <div className='col right-sec bg-light border border-red'>
            <img src={Um5wide} className="w-md-2 d-flex m-auto" alt="" />
          </div>
        </div>

        <div className="after-header  row container-fluid m-auto">

          <p class="text-align-justify col">
            En 2009, avec son&nbsp; transfert à&nbsp;&nbsp; l'Université Mohammed V, l'ENSET a progressivement amélioré son potentiel de développement et ses offres de formation, à travers la création de nouvelles filières et a réussi à démarrer dans la foulée 6 DUT, 5 Licences professionnelles et 2 Masters. L'année 2014, marquée par un nouveau Cahier des Normes Pédagogiques Nationales, a constitué un tournant capital dans l'évolution de l'ENSET, puisqu'une nouvelle offre de formation a été mise en place, caractérisée principalement par l'accréditation de trois filières d'ingénieur, en Conception et Production Industrielles, en Génie Electrique et en Génie Biomédical. Cette nouvelle situation a constitué un formidable élan et a donné lieu à une remarquable montée en puissance.<br/> Aujourd'hui, l'ENSET est à la croisée des chemins, puiqu'elle est appelée à changer de paradigme dans le cadre de son projet de transformation en ENSAM-Rabat pour&nbsp; confirmer sa place de leader dans la formation d'ingénieurs à l'échelle nationale. Ainsi, par son passé, son expérience et son expertise, l'école ambitionne de continuer à jouer un rôle prépondérant dans la formation d'élites dans le domaine technique et de l'ingénierie. Tous les efforts sont déployés pour que L'ENSET soit un établissement dynamique, innovant et créatif dans ses missions d'enseignement et de recherche avec éthique et professionnalisme, dans une posture d'ouverture, de coopération et de partenariats avec les communautés locales, régionales, continentales et internationales.
          </p>
          <iframe 
            // width="560" 
            // height="315" 
            src="https://www.youtube.com/embed/ezztwnooO6A?si=x9B5jcD8uZUubXH3" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
            className='col'>
          </iframe>
                    
        </div>

      </section>
      

    </div>
  );
}

export default PageHome;
