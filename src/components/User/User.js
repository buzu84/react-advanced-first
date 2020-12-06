import React from "react";

const User = ({ user }) => {
  const { registered, name, id, location, email, picture } = user;
  const formattedDate = new Date(registered.date).toLocaleDateString();
  return (
    <div className="container text-white">
      <ul className="list-group mb-3 shadow rounded">
        <li className="list-group-item bg-secondary">
          <img
            className="rounded img-fluid mx-auto d-block"
            src={picture.large}
            alt="image"

          />
        </li>
        <li className="list-group-item bg-secondary">
          <strong className="font-weight-bold">Name: </strong>
          {name.first ? name.first : "no name"}
        </li>
        <li className="list-group-item bg-secondary">
          <strong className="font-weight-bold">Surname: </strong>
          {name.last ? name.last : "no surname"}
        </li>
        <li className="list-group-item bg-secondary">
          <strong className="font-weight-bold">Address: </strong>
          {location
            ? `${location.street.name}, ${location.city}`
            : "no address"}
        </li>
        <li className="list-group-item bg-secondary">
          <strong className="font-weight-bold">E-mail: </strong>
          {email}
        </li>
        <li className="list-group-item bg-secondary">
          <strong className="font-weight-bold">registered: </strong>
          {formattedDate}
        </li>
      </ul>
    </div>
  );
};

export default User;
