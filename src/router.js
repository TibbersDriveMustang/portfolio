import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import {userSearch as Home} from "./components/Home";
import Api from "./components/Api"
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    {/*<Route path="/" component={App} />*/}
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="Home" component={Home}/>
      <Route path="Api" component={Api}/>
      <Route path="*" component={NotFound}/>
    </Route>

  </Router>
);

// export
export { router };
