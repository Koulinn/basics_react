import { useState } from "react";
import "./App.css";
import Navigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
import GenericView from "./views/GenericView";
import DetailedPage from "./views/DetailedPage";
import { useDispatch, useSelector } from "react-redux";
import { getUser, addUserName } from "./redux/slices/userSlice.js";
import RandomComponent from "./RandomComponent";

function App() {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.user.userDetails);

  const login = () => {
    dispatch(getUser());
  };

  const addName = () => {
    dispatch(addUserName("Ted"));
  };

  return (
    <div className="App">
      <h1>Redux under 3 minutes</h1>
      <button onClick={login}>After login</button>
      <button onClick={addName}>Add name</button>

      <h3>{name}</h3>
      <RandomComponent />
    </div>
  );
}

export default App;
