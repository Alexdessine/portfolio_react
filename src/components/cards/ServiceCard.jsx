import React from "react";

function ServiceBlock({title, icon, paragraph}) {
    return (
        <div className="card service-card">
            <i className={`bi ${icon} service-icon`}></i>
            <h3 className="service-title">{title}</h3>
            <p>{paragraph}</p>
        </div>
    )
}

export default ServiceBlock;