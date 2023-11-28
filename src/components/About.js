import React from "react"

function About ({image, about}) {
    const fallbackImage = image || "https://via.placeholder.com/215"

    return (
        <aside>
            <img  src={fallbackImage} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}

export default About