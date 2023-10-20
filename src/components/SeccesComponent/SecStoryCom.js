import React, { useState } from "react";
import "./SecStoryCom.css";
import StroyCom from "./StroyCom";

const SecStoryCom = () => {
  const [Story, SetStory] = useState([
    {
      img: "https://jobintech.academy/wp-content/uploads/2023/05/Untitled-design-5.png",
      name: "Sara ZAIMI & Nabilla ABRAK",
      title:
        "Aujourd’hui, grâce à Jobintech, nous avons réussi à réaliser notre transition professionnelle. Je travaille maintenant en tant que développeuse web à Capgemini",
      par: "Si vous êtes à la recherche d’un programme de formation en technologie qui offre une approche pratique, des formateurs expérimentés et un réseau solide, je vous recommande vivement de considérer Jobintech. Cela a été une véritable transformation pour moi, et je suis convaincu que cela peut aussi être le tremplin dont vous avez besoin pour concrétiser vos ambitions dans le domaine de la technologie.",
    },
    {
      img: "https://jobintech.academy/wp-content/uploads/2023/05/Untitled-design-6-1.png",
      name: "Badr BAATOUTI",
      title:
        "Je me sens épanoui et passionné chaque jour dans mon travail, et je suis reconnaissant envers Jobintech pour m’avoir offert cette opportunité de réaliser mes rêves.",
      par: "Ce qui m’a vraiment marqué chez Jobintech, c’est l’accent mis sur la pratique. Nous avons travaillé sur des projets concrets qui simulaient les défis réels de l’industrie, ce qui nous a permis de développer des compétences pratiques essentielles.Chaque jour, je suis motivé et stimulé par les défis techniques que je rencontre, et je suis reconnaissant envers Jobintech de m’avoir donné les compétences et les opportunités nécessaires pour atteindre mes objectifs.",
    },
    {
      img: "https://jobintech.academy/wp-content/uploads/2023/05/Untitled-design-7-1.png",
      name: "Fatima Erraha AIT YAHYA",
      title:
        "Jobintech a le pouvoir de transformer des aspirations en réussites concrètes, je n’ai jamasi regretté ma décision",
      par: "Si vous êtes passionné(e) par l’IT et que vous recherchez une formation qui allie expertise technique, encadrement personnalisé et débouchés professionnels concrets, je vous encourage vivement à rejoindre le programme Jobintech. Ne laissez pas vos rêves en suspens, saisissez cette occasion de vous épanouir dans un domaine qui vous passionne.",
    },
    {
      img: "https://jobintech.academy/wp-content/uploads/2023/05/Untitled-design-8-1.png",
      name: "Ismail NOURI",
      title:
        "Grâce à la formation complète et à l’accompagnement personnalisé, j’ai pu décrocher un emploi dans le domaine de l’informatique qui correspond pleinement à mes aspirations.",
      par: "Rejoindre Jobintech a été une décision qui a changé ma vie. J’ai pu combiner ma passion pour l’IT avec une formation complète et spécialisée, conçue pour répondre aux exigences du marché du travail dans ce domaine en constante évolution.",
    },
    {
      img: "https://jobintech.academy/wp-content/uploads/2023/05/Untitled-design-9-1.png",
      name: "Zineb SID ELKHIR",
      title:
        "Aujourd’hui, je peux affirmer sans aucun doute que rejoindre Jobintech a été la meilleure décision que j’ai prise pour ma carrière",
      par: "Avant de rejoindre Jobintech, j’étais en pleine recherche d’emploi dans le domaine de la logistique. Cependant, ma passion pour l’informatique et la technologie était toujours présente, et je savais que c’était là où résidait ma véritable motivation. C’est pourquoi, lorsque j’ai découvert le programme de Jobintech, je n’ai pas hésité une seconde à saisir cette opportunité unique.",
    },
  ]);
  return (
    <>
      <div id="HeaderSecStroy">
        <p className="Info container">
          Nous sommes fiers de mettre en lumière les parcours inspirants et les
          succès professionnels de nos anciens apprenants. Ces témoignages sont
          une véritable source d’inspiration pour tous ceux qui aspirent à une
          carrière florissante dans le domaine de la technologie. Nos anciens
          élèves sont les preuves vivantes que la formation Jobintech peut
          ouvrir les portes vers des opportunités incroyables. À travers leurs
          expériences personnelles, ils vous raconteront leur voyage, depuis le
          moment où ils ont rejoint notre programme jusqu’à leur insertion
          professionnelle réussie.
        </p>
        <div className="storyCon container">
          {Story.map((item) => {
            return (
              <StroyCom
                className="stroyItem"
                img={item.img}
                name={item.name}
                title={item.title}
                par={item.par}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default SecStoryCom;
