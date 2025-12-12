import React from "react";

function ContactForm({title, type, labelFor}) {
    return (
        <>
        <h3>{title}</h3>
        <div class="mb-3">
            <input type={type} class="form-control" id={labelFor}/>
        </div>
        </>
    )
}

export default ContactForm;