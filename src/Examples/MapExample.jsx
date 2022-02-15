import React, { useState } from "react";

const mockData = [
  { id: 1, text: "lorem 1", caption: "caption_1" },
  { id: 2, caption: "caption_2" },
  { id: 3, text: "lorem 3" },
];

function MapExample() {
  const [serverData, setServerData] = useState([]);
  return (
    <>
      <div>
        {/* {mock response, after fetching data and parsing it} */}
        <button
          onClick={() => {
            setServerData(mockData);
          }}
        >
          Mock response
        </button>
      </div>

      {serverData.length > 0 ? (
        <div className="section">
          {serverData.map((data) => (
            <div key={data.id}>
              <h6>{data.id}</h6>
              {/* notice that text and caption doesn't exist in 2 elements of the data */}
              {data.text && <p>{data.text}</p>}
              {data.caption && <h6>{data.caption}</h6>}
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}

      {/* Example with empty array, serverData with empty array */}

      {/* {serverData.map((data) => (
        <div key={data.id}>
          <h6>{data.id}</h6>
          {data.text && <p>{data.text}</p>}
          {data.caption && <h6>{data.caption}</h6>}
        </div>
      ))} */}
    </>
  );
}

export default MapExample;
