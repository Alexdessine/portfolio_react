import React from "react";

function HeroBlock({ title, subtitle, onOpenModal }) {
    return (
        <div className="hero-block">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <button className="btn btn-danger"  onClick={onOpenModal}>En savoir plus</button>
        </div>
    )
}

export default HeroBlock;