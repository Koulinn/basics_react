import React from "react";

function RenderChildren({ children, ...props }) {
  console.log(props);
  return (
    <div>
      <h5>Render Children component</h5>
      {children}
    </div>
  );
}

export default RenderChildren;
