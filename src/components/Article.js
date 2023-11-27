import React from "react";

function Article ({ title, date, preview }) {
    // console.log({ title,date,preview }); 
    // const { title, date, preview } = post
    const dateFallback = date || 'January 1, 1970'
    return (
        <article>
            <h3>{title}</h3>
            <small>{dateFallback}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article