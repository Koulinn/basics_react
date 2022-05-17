import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, addUserName } from "./redux/slices/userSlice.js";

function RandomComponent() {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.user.userDetails);

  const login = () => {
    dispatch(getUser());
  };

  const addName = () => {
    dispatch(addUserName("Luke Random"));
  };
  return (
    <main style={{ border: "1px solid green" }}>
      <h1>RandomComponent</h1>
      <button onClick={addName}>Change name</button>
      <div>{name + " from randomComponent"}</div>
    </main>
  );
}

export default RandomComponent;
