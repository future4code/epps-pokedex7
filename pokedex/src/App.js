import React from "react";
import Router from "./Router/Router";
import GlobalStateContext from './Components/Global/GlobalState'
// import app './App.css';

const App = () => {
  return (
    <GlobalStateContext>
      <Router />
    </GlobalStateContext>
    )
}

export default App; 