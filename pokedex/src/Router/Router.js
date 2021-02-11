import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Pokedex from "../Components/Pages/Pokedex/Pokedex";
import DetailsPage from "../Components/Pages/DetailsPage/DetailsPage";
import Header from '../Components/Header/Header';
import Home from '../Components/Pages/Home/Home'
import CardPokes from "../Components/Pages/CardPokes/CardPokes";

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
        <Route exact path="/details-page/:id">
          <DetailsPage />
        </Route>
        <Route exact path="/cardpoke">
            <CardPokes/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
