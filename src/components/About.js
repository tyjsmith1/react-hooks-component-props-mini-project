import React from "react";

function About ({image, about}) {
    const imageUrl = image ? image : 'https://via.placeholder.com/215'

    return (
        <aside>
            <img src={imageUrl} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    )
}

export default About