import React from "react";
import SectionCard from "../ui/SectionCard";

function ContactForm() {
    return (
        <SectionCard title="Formulaire de contact">
            <form>
                <div className="mb-3">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Votre nom"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="email"
                        className="form-control"
                        placeholder="Votre adresse email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="tel"
                        className="form-control"
                        placeholder="Votre numéro de téléphone"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Sujet"
                        required
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        rows="7"
                        placeholder="Votre message"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary text-center">
                    Envoyer
                </button>
            </form>
        </SectionCard>
    )
}

export default ContactForm;