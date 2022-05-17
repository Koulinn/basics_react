import React from "react";
import { useParams } from "react-router-dom";

// https://6260532a53a42eaa0703665d.mockapi.io/:endpoint

function DetailedPage() {
  const { productID } = useParams();
  console.log(productID);
  return (
    <div>
      <h1>DetailedPage</h1>
      <div></div>
    </div>
  );
}

export default DetailedPage;
