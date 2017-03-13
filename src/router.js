import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import {SearchBar} from "./components/GitUserSearch/SearchBar";
import SearchResults from "./components/GitUserSearch/SearchResults"
import GitUserSearch from "./components/GitUserSearch/GitUserSearch"
import AjaxLiveSearch from "./components/AjaxLiveSearch/AjaxLiveSearch"

import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    {/*<Route path="/" component={App} />*/}
    <Route path="/" component={App}>
      <IndexRoute component={SearchBar} />
      <Route path="SearchBar" component={SearchBar}/>
      <Route path="SearchResults" component={SearchResults}/>
      <Route path="GitUserSearch" component={GitUserSearch}/>
      <Route path="AjaxLiveSearch" component={AjaxLiveSearch} />
      <Route path="*" component={NotFound}/>
    </Route>

  </Router>
);

// export
export { router };
