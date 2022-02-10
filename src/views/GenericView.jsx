import React from 'react'

function GenericView({ title, heroText }) {
    return (
        <main>
            <h1>{title}</h1>
            <div>{heroText}</div>
        </main>
    )
}

export default GenericView
