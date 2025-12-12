import React from "react";

// Composants réutilisables
import ProjectBlock from "../components/cards/ProjectCard";
import TitleBlock from "../components/title/Title";

// Image du bandeau de page
import titleImage from "../assets/images/banner.jpg";

// Images des projets du portfolio
import image1 from "../assets/images/portfolio/site_internet.jpg";
import image2 from "../assets/images/portfolio/cv.jpg";
import image3 from "../assets/images/portfolio/billard-score.jpg";
import image4 from "../assets/images/portfolio/bcj.jpg";
import image5 from "../assets/images/portfolio/screens.jpg";
import image6 from "../assets/images/portfolio/quizz.jpg";

/**
 * Page Réalisations / Portfolio
 * - Présente une sélection de projets
 * - Utilise des Cards Bootstrap via un composant réutilisable
 * - Les projets sont générés dynamiquement à partir d'un tableau de données
 */
function Realisations() {

    // Données du titre de page (bandeau)
    const pageTitle = {
        image: titleImage,
        title: "Portfolio",
        paragraph: "Voici quelques-une de mes réalisations."
    };

    /**
     * Liste des projets du portfolio
     * Chaque objet représente un projet : 
     * - titre
     * - image illustrative
     * - description courte
     * - lien vers le site ou la réalisation
     * - technologies utilisées
     */
    const projectsData = [
        {
            title: "Billard Score",
            image: image3,
            paragraph: "Site d'enregistrement et de suivi de parties de billard",
            link: "https://billard-score.fr",
            realize: "Site réalisé avec PHP et MySQL"
        },
        {
            title: "BCJ37",
            image: image4,
            paragraph: "Site du club de billard de Joué-lès-Tours",
            link: "https://bcj37.fr",
            realize: "Site réalisé avec Laravel"
        },
        {
            title: "CV en ligne",
            image: image2,
            paragraph: "Cv en ligne",
            link: "https://cv.alexandrebourlier.fr",
            realize: "Site réalisé avec HTML et CSS"
        },
        {
            title: "Quizz",
            image: image6,
            paragraph: "Site de Quizz en ligne",
            link: "https://quizz.alexandrebourlier.fr",
            realize: "Site réalisé avec PHP et MySQL"
        },
        {
            title: "AlexDessine",
            image: image1,
            paragraph: "Site de création artistique",
            link: "https://alexdessine.fr",
            realize: "PHP - SYMFONY"
        },
        {
            title: "Maquette d'un site web",
            image: image5,
            paragraph: "Création d'un prototype d'un site",
            link: "/realisations",
            realize: "Réaliser avec FIGMA"
        },

    ];

    return (
        <main>
            {/* Bandeau de titre de la page Portfolio */}
            <section className="container-fluid p-0 ">
                <TitleBlock
                    image={pageTitle.image}
                    title={pageTitle.title}
                    paragraph={pageTitle.paragraph}
                />
            </section>

            {/* Grilles des projets */}
            <section className="container my-5">
                <article className="row g-4">
                    {/* génération dynamique des cartes projets */}
                    {projectsData.map((projet, index) => (
                        <div className="col-md-4" key={index}>
                            <ProjectBlock
                                title={projet.title}
                                image={projet.image}
                                paragraph={projet.paragraph}
                                realize={projet.realize}
                                link={projet.link}
                            />
                        </div>
                    ))}
                </article>

            </section>
        </main>
    )
}

export default Realisations