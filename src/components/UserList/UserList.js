import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import User from "../User";
import Spinner from "../Spinner";
import UserDetails from "../UserDetails";
import NotFound from "../NotFound";

const UserList = () => {
  const [users, setUsers] = useState();
  const [error, setError] = useState();
  const [chosenUser, setChosenUser] = useState();
  const url = "https://randomuser.me/api/?results=10";

  useEffect(() => {
    fetch(`${url}`)
      .then((response) => response.json())
      .then((response) => setUsers(response.results))
      .catch((error) => {
        setError(error);
      });
  }, []);


  if (error) {
    return <p>There was an error with fetching: {error}</p>;
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {users ? (
            users.map(user => {
              return (
                <Link to={`/users/${user.login.uuid}`} key={user.login.uuid}>
                  <User key={user.login.uuid} user={user} handleChosenUser={setChosenUser}/>
                </Link>
              )
            })
          ) : (
            <div className="spinner-container">
              <Spinner />
            </div>
          )}
        </Route>
        <Route path="/users/:id">
          <UserDetails chosenUser={chosenUser} />
        </Route>
      <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default UserList;
