import React from "react"

function Article ({title,date,preview,minutes}) {
    const fallbackDate = date || "January 1, 1970"

    function minutesToRead () {
        const coffeeEmoji = "☕️"
        const bentoEmoji = "🍱"

        if (minutes < 30) {
            const numCoffees = Math.ceil(minutes/5)
            let coffeeArray = []
            for (let i = 0; i < numCoffees; i++) {
                coffeeArray.push(coffeeEmoji)
            }
            return coffeeArray.join(' ')
        } else {
            const numBentos = Math.ceil(minutes/10)
            let bentoArray = []
            for (let i = 0; i < numBentos; i++) {
                bentoArray.push(bentoEmoji)
            }
            return bentoArray.join(' ')
        }
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{fallbackDate}</small>
            <p>{preview}</p>
            <p>{minutesToRead()} {minutes} min read</p>
        </article>
    )
}

export default Article