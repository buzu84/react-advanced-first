import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import NotFound from "./components/NotFound";

export default function App() {
  const [users, setUsers] = useState();
  console.log(users);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <UserList setUsers={setUsers} />
        </Route>
        <Route path="/id">
          <UserDetails users={users} />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
