import React, { useState } from "react";

const mockObject1 = {
  people: {
    name: "Phoebe",
    surname: "Buffay",
    city: "New York",
    add1: "Flat 10",
  },
};
const mockObject2 = {
  people: {
    name: "Phoebe",
    surname: "Buffay",
    city: "New York",
    add1: "Flat 10",
    add2: "Address_2",
  },
};

function ChainingOperator() {
  const [mockData, setMockData] = useState(null);
  return (
    <div>
      <h2>ChainingOperator</h2>
      <button onClick={() => setMockData(mockObject1)}>MockData 1</button>
      <button onClick={() => setMockData(mockObject2)}>MockData 2</button>

      <br></br>
      <h3>Data</h3>
      <div>
        {/* Chaining operator prevents crashing, it checks the object if it exists and then after
        if object.property exists is a truthy value then returns the true part from the ternary operator
        if the property doesn't exists it returns the false part.
       */}
        {mockData?.people ? (
          <>
            <h5>{`${mockData.people.surname} ${mockData.people.name}`}</h5>
            <p>{mockData.people.city}</p>
            {mockData.people.add1 && <p>{mockData.people.add1}</p>}
            {mockData.people.add2 && <p>{mockData.people.add2}</p>}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default ChainingOperator;
