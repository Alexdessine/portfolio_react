import React from "react";

import ProjectBlock from "../components/cards/ProjectCard";
import TitleBlock from "../components/title/Title";
import titleImage from "../assets/images/banner.jpg";

import image1 from "../assets/images/portfolio/coder.jpg";
import image2 from "../assets/images/portfolio/espace-bien-etre.jpg";
import image3 from "../assets/images/portfolio/fresh-food.jpg";
import image4 from "../assets/images/portfolio/restaurant-japonais.jpg";
import image5 from "../assets/images/portfolio/screens.jpg";
import image6 from "../assets/images/portfolio/seo.jpg";

function Realisations() {
    const pageTitle = {
        image: titleImage,
        title: "Portfolio",
        paragraph: "Voici quelques-une de mes réalisations."
    };

    const projectsData = [
        {
            title: "Fresh Food",
            image: image3,
            paragraph: "Site de vente de produits frais en ligne",
            link: "https://fresh-food.example.com",
            realize: "Site réalisé avec PHP et MySQL"
        },
        {
            title: "Restaurant Akira",
            image: image4,
            paragraph: "Site de vente de produits frais en ligne",
            link: "https://restaurant-akira.example.com",
            realize: "Site réalisé avec WordPress"
        },
        {
            title: "Espace bien-être",
            image: image2,
            paragraph: "Site de vente de produits frais en ligne",
            link: "https://espace-bien-etre.example.com",
            realize: "Site réalisé avec LARAVEL"
        },
        {
            title: "SEO",
            image: image6,
            paragraph: "Amélioration du référencement d'un site e-commerce",
            link: "https://seo.example.com",
            realize: "utilisation des outils SEO"
        },
        {
            title: "Création d'une API",
            image: image1,
            paragraph: "Création d'une API RESTFULL publique",
            link: "https://seo.example.com",
            realize: "PHP - SYMFONY"
        },
        {
            title: "Maquette d'un site web",
            image: image5,
            paragraph: "Création d'un prototype d'un site",
            link: "https://seo.example.com",
            realize: "Réaliser avec FIGMA"
        },

    ];

    return (
        <main>
            <section className="container-fluid p-0 ">
                <TitleBlock
                    image={pageTitle.image}
                    title={pageTitle.title}
                    paragraph={pageTitle.paragraph}
                />
            </section>
            <section className="container my-5">
                <article className="row g-4">
                    {projectsData.map((projet, index) => (
                        <div className="col-md-4" key={index}>
                            <ProjectBlock
                                title={projet.title}
                                image={projet.image}
                                paragraph={projet.paragraph}
                                realize={projet.realize}
                            />
                        </div>
                    ))}
                </article>

            </section>
        </main>
    )
}

export default Realisations