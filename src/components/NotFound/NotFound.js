import React from "react";
import history from "../../history";
import mySvg from "../../assets/Decoration.svg";

const NotFound = () => {
  const pageReload = () => {
    history.push('/');
    window.location.reload();
  }
  return (
    <div className="no-path-container">
      <h1>404- path not found</h1>
      <img src={mySvg} alt="decoration" />
      <button className="go-back-button" onClick={pageReload}>Users</button>
    </div>
  )
}

export default NotFound;
