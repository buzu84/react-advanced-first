import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

import User from "../User";
import Spinner from "../Spinner";
import UserDetails from "../UserDetails";
import NotFound from "../NotFound";

const UserList = () => {
  const [users, setUsers] = useState();
  const [error, setError] = useState();
  const [chosenUser, setChosenUser] = useState();
  const [ready, setReady] = useState(false);
  const url = "https://randomuser.me/api/?results=10";

  useEffect(() => {
    fetch(`${url}`)
      .then((response) => response.json())
      .then((response) => setUsers(response.results))
      .then(() => {
          setTimeout(() => {
            setReady(true);
          }, 1500);
        })
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
                  <ReactPlaceholder
                    showLoadingAnimation
                    ready={ready}
                    type="media"
                    style={{ flexBasis: 300, margin: 30 }}
                    key={user.login.uuid}
                    >
                    <User key={user.login.uuid} user={user} handleChosenUser={setChosenUser}/>
                  </ReactPlaceholder>
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
