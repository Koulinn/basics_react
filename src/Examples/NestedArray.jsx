import React, { useState } from 'react'

const mockData = [
    {
        category: 'Dairy',
        items: [
            {
                id: 1,
                name: 'Milk',
            },
            {
                id: 2,
                name: 'Cheese',
            },
            {
                id: 3,
                name: 'Yogurt',
            },
        ],
        qty: 45,
    },
    {
        category: 'Seafood',
        items: [
            {
                id: 4,
                name: 'Prawns',
            },
            {
                id: 5,
                name: 'Plaice',
            },
            {
                id: 6,
                name: 'Cod',
            },
        ],
        qty: 10,
    },
    { category: 'BBQ' },
]

function NestedArray() {
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
                    <div key={data.category}>
                        <h6>{data.category}</h6>
                        {data.items && (
                            <ul>
                                {data.items.map((i) => (
                                    <li key={i.name}>{i.name}</li>
                                ))}
                            </ul>
                        )}
                        <h5>Qty : {data.qty ? data.qty : 'N/A'}</h5>
                    </div>
                ))}
            </div>
            {/* {mockData[3].items ? : <p></p>} */}
        </>
    )
}

export default NestedArray
