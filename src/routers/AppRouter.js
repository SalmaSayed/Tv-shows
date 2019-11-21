import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import ShowsSearch from "../components/ShowsSearch";
import ShowDetails from "../components/ShowDetails";
import NotFoundPage from "../components/NotFoundPage";
const AppRouter = () => (
  <HashRouter>
    <div>
      <Switch>
        <Route path="/" component={ShowsSearch} exact={true} />
        <Route path="/show/:id" component={ShowDetails} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </HashRouter>
);

export default AppRouter;
