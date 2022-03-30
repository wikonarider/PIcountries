import React from "react";
import { Route, Switch } from "react-router";
import Landing from "../views/Landing";
import Nav from "../Nav/Nav";
import Home from "../views/Home";
import CreateActivity from "../components/Form/CreateActivity";
import CountryDetail from "../components/CountryDetail";

import styles from "./index.module.css";

// ATENCIÓN A PARTIR DE LA VERSIÓN 6.0 SWITCH ES REEMPLAZADO POR ROUTES Y COMPONENT CON ELEMENT

const index = () => {
  return (
    <div className={styles.container}>
      <Route path="/main" component={Nav} />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/main" component={Home} />
        <Route exact path="/main/create_activity" component={CreateActivity} />
        <Route
          exact
          path="/main/detail/:id"
          render={({ match }) => <CountryDetail id={match.params.cod} />}
        ></Route>
      </Switch>
    </div>
  );
};

export default index;
