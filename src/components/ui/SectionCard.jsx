import React from "react";

function SectionCard({ title, children, className = ""}) {
    return (
        <div className={`about-skills-block ${className}`}>
            <h3>{title}</h3>
            <div className="section-card-body">
                {children}
            </div>
        </div>
    );
}