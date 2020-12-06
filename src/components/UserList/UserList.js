import React, { useState, useEffect } from "react";

import User from "../User";
import Spinner from "../Spinner";

const UserList = props => {
  const [users, setUsers] = useState();
  const [error, setError] = useState();
  const url = "https://randomuser.me/api/?results=10";

  useEffect(() => {
    fetch(`${url}`)
      .then((response) => response.json())
      .then((response) => setUsers(response.results))
      .catch((error) => {
        setError(error);
      });
  }, []);

  useEffect(() => {

    if (typeof props.setUsers === "function") {
      props.setUsers(users);
    }

  }, [users])

  if (error) {
    return <p>There was an error with fetching: {error}</p>;
  }

  return (
    <>
      {users ? (
        users.map((user) => {
          return <User key={user.login.uuid} user={user} />;
        })
      ) : (
        <div className="spinner-container">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default UserList;
