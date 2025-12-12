import React from "react";

function TitleBlock({ image, title, paragraph }) {
    return (
        <div className="title">
            {image && <img src={image} alt={title} />}
            <div className="encart">
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}

export default TitleBlock;