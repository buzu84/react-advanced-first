import React from "react";
import history from "../../history";

const NotFound = () => {
  const pageReload = () => {
    history.push('/');
    window.location.reload();
  }
  return (
    <>
      <h1>404- path not found</h1>
      <button onClick={pageReload}>Users</button>
    </>
  )
}

export default NotFound;
