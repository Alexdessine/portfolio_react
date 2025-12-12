import React from "react";
import ContactForm from "../components/contact/ContactForm";
import TitleBlock from "../components/title/Title";


function Contact() {
    const pageTitle = {
        title: "Contact",
        paragraph: "Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact."
    };

    return (
        <main>
            <section>
                <TitleBlock
                    title={pageTitle.title}
                    paragraph={pageTitle.paragraph}
                />
            </section>
        </main>
    )


}

export default Contact;