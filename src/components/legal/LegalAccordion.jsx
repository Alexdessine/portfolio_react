import React from "react";

function AccordionBlock({id, title, content, parentId}) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`heading-${id}`}>
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${id}`}
                    aria-expanded="false"
                    aria-controls={`collapse-${id}`}
                    >
                        {title}
                    </button>
            </h2>
            <div
                id={`collapse-${id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading-${id}`}
                data-bs-parent={`#${parentId}`}>
                    <div className="accordion-body">
                        {content}
                    </div>
                </div>
        </div>
    )
}

export default AccordionBlock;