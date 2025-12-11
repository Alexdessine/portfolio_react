import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">John Doe</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Accueil</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/realisations" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Portfolio</NavLink>
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