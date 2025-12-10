import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="logo">Alexandre Bourlier</div>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/realisations" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Réalisations</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mentions-legales" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Mentions Légales</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;