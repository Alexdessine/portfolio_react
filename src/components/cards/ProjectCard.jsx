import React from "react";

function ProjectBlock({title, image, paragraph, realize, link}) {
    return (
        <div class="card">
            <img src={image} class="card-img-top" alt={title} />
            <div class="card-body text-center">
                <h5 class="card-title fs-3 fw-bold">{title}</h5>
                <p class="card-text fs-6">{paragraph}</p>
                <a href={`${link}`} className="btn btn-primary">Voir le site</a>
            </div>
            <div class="card-body bg-light border-top text-center">
                <small className="fs-6 fw-lighter">{realize}</small>
            </div>
        </div>
    )
}

export default ProjectBlock;