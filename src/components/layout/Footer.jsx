import React from "react";
import { NavLink } from "react-router-dom";


function Footer() {
    return (
        <footer className="bg-body-tertiary" data-bs-theme="dark">
            <section>
                <p>John Doe</p>
                <address>
                    <a href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.796404,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank">40 rue Laure Diebold</a>
                    <a href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.796404,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank">69009 Lyon, France</a>
                    <a href="tel:+33606060606" target="_blank">06.06.06.06.06</a>
                    <a href="mailto:example@mail.com" target="_blank">example@mail.com</a>
                </address>
                <div className="social-link">
                    <a href="" target="_blank"><i class="bi bi-github"></i></a>
                    <a href="" target="_blank"><i class="bi bi-twitter-x"></i></a>
                    <a href="" target="_blank"><i class="bi bi-linkedin"></i></a>
                </div>
            </section>
            <section>
                <p>Liens utiles</p>
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/realisations">Portfolio</NavLink></li>
                    <li><NavLink to="/contact">Me contacter</NavLink></li>
                    <li><NavLink to="/mentions-legales">Mentions légales</NavLink></li>
                </ul>
            </section>
            <section>
                <p>Mes dernières réalisations</p>
                <ul>
                    <li><a href="https://billard-score.fr" target="_blanck" rel="noopener noreferrer">Billard Score</a></li>
                    <li><a href="https://bcj37.fr" target="_blanck" rel="noopener noreferrer">BCJ37</a></li>
                    <li><a href="https://cv.alexandrebourlier.fr" target="_blanck" rel="noopener noreferrer">CV en ligne</a></li>
                    <li><a href="https://quizz.alexandrebourlier.fr" target="_blanck" rel="noopener noreferrer">Quizz</a></li>
                    <li><a href="https://alexdessine.fr" target="_blanck" rel="noopener noreferrer">AlexDessine</a></li>
                    <li><NavLink to="/realisations">Maquette d'un site web</NavLink></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;