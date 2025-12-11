import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <div className="logo">Alexandre Bourlier</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Accueil</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/realisations" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Réalisations</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/mentions-legales" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Mentions Légales</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;