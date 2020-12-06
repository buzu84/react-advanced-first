import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./styles.css";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import NotFound from "./components/NotFound";

export default function App() {
  // const [choosenUser, setChoosenUser] = useState();
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route path="/:id" component={UserDetails} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}
