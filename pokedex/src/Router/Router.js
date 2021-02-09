import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../Components/Home/Home";
import Pokedex from "../Components/Pokedex/Pokedex";
import DetailsPage from "../Components/DetailsPage/DetailsPage";
import Header from '../Components/Header/Header'

const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pokedex">
          <Pokedex />
        </Route>
        <Route exact path="/details-page">
          <DetailsPage />
        </Route>
        <Route path="/">
          <p>Erro</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
