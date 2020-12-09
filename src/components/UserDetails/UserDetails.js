import React from "react";
import history from "../../history";
import mySvg from "../../assets/Decoration.svg";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";

const UserDetails = props => {
  const pageReload = () => {
    history.push('/');
    window.location.reload();
  }

  if (props.chosenUser === undefined) {
    return (
      <div className="no-path-container">
        <h1>No chosen user</h1>
        <img src={mySvg} alt="decoration" />
        <button className="go-back-button" onClick={pageReload}>Users</button>
      </div>
    );
  }

  if (props.chosenUser) {
    const { name, location } = props.chosenUser;
    const position = [parseFloat(location.coordinates.latitude), parseFloat(location.coordinates.longitude)];
    return (
      <>
        <div className="container text-white">
          <ul className="list-group mb-3 shadow rounded">
            <li className="list-group-item bg-secondary font-weight-bold">
              User Details:
            </li>
            <li className="list-group-item bg-secondary">
              Hi, My name is{` `}
              {name.first ? name.first : "no name"}
            </li>

            <li className="list-group-item bg-secondary">
              I am from{` `}
              {location ? `${location.city}`: "no address"}
            </li>
          </ul>
        </div>
        <div id="mapid">
          <Map center={position} zoom={4}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Latitude: {position[0]}, Longitude: {position[1]}<br></br>
                This geo is NOT in {location.city}, {location.country} - random API users<br></br>
                Lat & Long shown properly
                <a href="https://www.maps.ie/coordinates.html" target="_blank" rel="noreferrer"><br></br>
                Check it out HERE
                </a>
              </Popup>
            </Marker>
          </Map>
          <img className="pt-4" src={mySvg} alt="decoration" />
          <button className="go-back-button" onClick={pageReload}>Go back</button>
        </div>
      </>
    );
  }
};


export default UserDetails;
