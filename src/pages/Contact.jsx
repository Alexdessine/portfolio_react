import React from "react";

// Composant de la page Contact
import ContactForm from "../components/contact/ContactForm";
import InfoBlock from "../components/contact/ContactInfo";
import SectionCard from "../components/ui/SectionCard";
import TitleBlock from "../components/title/Title";

/**
 * Page Contact
 * - Affiche un titre de page
 * - Présente un formulaire de contact
 * - Affiche les coordonnées et une carte Google maps 
 */
function Contact() {

    // Données du titre de page
    const pageTitle = {
        title: "Contact",
        paragraph: "Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact."
    };

    /**
     * Données de contact
     * - Informations textuelles
     * - Adresse structurée avec la balise <adresse>
     * - Carte Google Maps intégrée
     */
    const infoContact = {
        title: "Mes Coordonnées",
        paragraphs: [
            <>
                <p>John Doe</p>
                <address className="text-black-50">
                    <a className="text-black-50" href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.796404,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank"><i class="bi bi-map"></i> 40 rue Laure Diebold</a>
                    <a className="text-black-50" href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.796404,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank"><i class="bi bi-geo-alt"></i> 69009 Lyon, France</a>
                    <a className="text-black-50" href="tel:+33606060606" target="_blank"><i class="bi bi-phone"></i> 06.06.06.06.06</a>
                    <a className="text-black-50" href="mailto:example@mail.com" target="_blank"><i class="bi bi-envelope-at"></i> example@mail.com</a>
                </address>
                <div className="ratio ratio-16x9 mt-3">
                <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5566.103205087327!2d4.794815855773696!3d45.779081064080955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1765531240944!5m2!1sfr!2sfr"
                        width="500"
                        height="450"
                        allowfullscreen
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </>
        ]
    }

    return (
        <main>
            <section>
                {/* Titre de la page Contact */}
                <TitleBlock
                    title={pageTitle.title}
                    paragraph={pageTitle.paragraph}
                />
            </section>

            {/* Section formulaire + information de contact */}
            <section>
                <div className="container my-5">
                    <div className="row g-4">
                        <div class="row mb-4 mt-4">
                            <div class="col-sm-12 col-md-10 m-auto mb-3 mb-sm-0">
                                <div class="card about-skills-card">
                                    <div class="card-body col-md-6">
                                        <ContactForm />
                                    </div>
                                    <div class="card-body col-md-6">
                                           <InfoBlock
                                            title={infoContact.title}
                                            paragraphs={infoContact.paragraphs}
                                           /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )


}

export default Contact;