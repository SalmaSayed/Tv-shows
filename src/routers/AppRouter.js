import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ShowsSearch from "../components/ShowsSearch";
import ShowDetails from "../components/ShowDetails";
import NotFoundPage from "../components/NotFoundPage";
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={ShowsSearch} exact={true} />
        <Route path="/show/:id" component={ShowDetails} />
        <Route path="/notfound" component={NotFoundPage} />
        <Redirect to="/notfound" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
