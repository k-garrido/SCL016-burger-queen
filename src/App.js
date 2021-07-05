import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/mainPage/MainPage";
import GarzonPage  from "./components/garzonView/GarzonPage"
import ComandaPage  from "./components/comandaView/ComandaPage"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Comanda">
          <ComandaPage />
        </Route>
        <Route path="/cocina">
          <h1>Pagina de cocina</h1>
        </Route>
        <Route path="/garzon">
          <GarzonPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
