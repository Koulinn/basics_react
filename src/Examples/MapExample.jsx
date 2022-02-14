import React, { useState } from 'react'

const mockData = [
    { id: 1, text: 'lorem 1', caption: 'caption_1' },
    { id: 2, caption: 'caption_2' },
    { id: 3, text: 'lorem 3' },
]

function MapExample() {
    const [serverData, setServerData] = useState([])
    return (
        <>
            <div>
                {/* {mock response, after fetching data and parsing it} */}
                <button
                    onClick={() => {
                        setServerData(mockData)
                    }}
                >
                    Mock response
                </button>
            </div>

            <div>
                {serverData.map((data) => (
                    <div>
                        <h6>{data.id}</h6>
                        {/* notice that text and imgUrl are doesn't exist in 2 elements of the data */}
                        <p>{data.text}</p>
                        <h6>{data.caption}</h6>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MapExample
