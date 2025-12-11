import React from "react";

import AccordionBlock from "../components/legal/LegalAccordion";
import TitleBlock from "../components/title/Title";
import titleImage from "../assets/images/banner.jpg";

function Accordion() {
    const pageTitle = {
        image: titleImage,
        title: "Mentions légales",
    };

    const accordionId= "legalAccordion";

    const items = [
        {
            id: 1,
            title: "Editeur du site",
            // icon: "bi-brush",
            content: (
                <>
                    <p className="fw-bold">John Doe</p>
                    <address className="text-black-50">
                        <a className="text-black-50" href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.796404,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank"><i class="bi bi-map"></i> 40 rue Laure Diebold</a>
                        <a className="text-black-50" href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.796404,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank"><i class="bi bi-geo-alt"></i> 69009 Lyon, France</a>
                        <a className="text-black-50" href="tel:+33606060606" target="_blank"><i class="bi bi-phone"></i> 06.06.06.06.06</a>
                        <a className="text-black-50" href="mailto:example@mail.com" target="_blank"><i class="bi bi-envelope-at"></i> example@mail.com</a>
                    </address>
                </>
            )
        },
        {
            id: 2,
            title: "Hébergeur",
            // icon: "bi-code-slash",
            content: (
                <>
                    <p className="fw-bold">alwaysdata</p>
                    <address className="text-black-50">
                        <a className="text-black-50" href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.796404,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank">91 rue du Faubourg Saint-Honoré, 75008 Paris</a>
                    </address>
                    <a href="https://alwaysdata.com" target="_blank"><i class="bi bi-browser-chrome"></i> www.alwaysdata.com</a>
                </>
            )
        },
        {
            id: 3,
            title: "Crédits",
            // icon: "bi-search",
            content: (
                <>
                    <p className="fw-bold">Crédits</p>
                    <p className="fs-6">Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr">Centre Européen de formation</a></p>
                    <p className="fs-6 fst-italic">Les images utilisées sur ce site sont libres e droits et ont été obtenues sur le site <a href="https://pixabay.com/fr">Pixabay</a></p>
                    <p className="fs-6 fst-italic">La favicon de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe">John doe Icons erstellt von Freepik - Flaticon</a></p>
                </>
            )
        },
    ];

    return (
        <main>
            <section className="container-fluid p-0 ">
                <TitleBlock
                    image={pageTitle.image}
                    title={pageTitle.title}
                />
            </section>
            <section className="container my-5">
                <article className="row g-4">
                    <div className="accordion" id={accordionId}>
                        {items.map(item => (
                            <AccordionBlock
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                content={item.content}
                                parentId={accordionId}
                            />
                        ))}
                    </div>
                </article>

            </section>
        </main>
    )
}

export default Accordion