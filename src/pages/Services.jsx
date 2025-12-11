import React from "react";

import ServiceBlock from "../components/cards/ServiceCard";

function Services() {
    const servicesData = [
        {
            title: "UX Design",
            icon: "bi-brush",
            paragraph: "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible."
        },
        {
            title: "Développement web",
            icon: "bi-code-slash",
            paragraph: "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc)."
        },
        {
            title: "Référencement",
            icon: "bi-search",
            paragraph: "Le référencement (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."
        },
    ];

    return (
        <main>
            <section className="container my-5">
                <article className="row g-4">
                    {servicesData.map((service, index) => (
                        <div className="col-md-4" key={index}>
                            <ServiceBlock 
                                title={service.title}
                                icon={service.icon}
                                paragraph={service.paragraph}
                            />
                        </div>
                    ))}
                </article>

            </section>
        </main>
    )
}

export default Services