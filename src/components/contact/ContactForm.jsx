import React from "react";
import SectionCard from "../ui/SectionCard";

function ContactForm() {

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const subject = form.subject.value;
        const message = form.message.value;

        alert(
            `Nom : ${name}\n` +
            `Email : ${email}\n` +
            `Téléphone : ${phone}\n` +
            `Sujet : ${subject}\n` +
            `Message : ${message}`
        );
    };
    return (
        <SectionCard title="Formulaire de contact">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input 
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Votre nom"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Votre adresse email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Votre numéro de téléphone"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Sujet"
                        required
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        name="message"
                        className="form-control"
                        rows="7"
                        placeholder="Votre message"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Envoyer
                </button>
            </form>
        </SectionCard>
    )
}

export default ContactForm;