import React from 'react'

function GenericView(props) {
    console.log(props, 'props1')
    return (
        <main>
            <h1>{props.title}</h1>
            <div>{props.heroText}</div>
        </main>
    )
}

export default GenericView
