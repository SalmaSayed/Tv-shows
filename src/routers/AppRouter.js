import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import ShowsSearch from "../components/ShowsSearch";
import ShowDetails from "../components/ShowDetails";
import NotFoundPage from "../components/NotFoundPage";
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ShowsSearch} exact={true} />
        <Route path="/details" component={ShowDetails} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
