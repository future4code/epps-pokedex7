import React from "react"
import Router from './Router/Router'
import GlobalState from './Components/Global/GlobalState';
import Appcss from './App.css';

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  )
}

export default App