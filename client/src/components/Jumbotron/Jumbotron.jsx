import React from "react";
import Thumbnail from "../Thumbnail";
import "bootstrap/dist/css/bootstrap.min.css";

const Jumbotron = props => (
  <div className="jumbotron">
    <h1>Click Conference for Tiles</h1>
    <div
      className="btn btn-primary btn-sm"
      onClick={() => props.handleEasternClick()}
    >
      <h1>Eastern</h1>
    </div>
    <div
      className="btn btn-warning btn-sm"
      onClick={() => props.handleWesternClick()}
    >
      <h1>Western</h1>
    </div>
    {//Check if message failed
    props.conference === "Eastern" ? (
      <div>
        {" "}
        {props.EasternTiles.map((tile, idx) => (
          <Thumbnail
            src={tile}
            key={idx}
            onClick={evt => props.handleTileClick(evt)}
          />
        ))}
      </div>
    ) : (
      <div>
        {" "}
        {props.WesternTiles.map((tile, idx) => (
          <Thumbnail
            src={tile}
            key={idx}
            onClick={evt => props.handleTileClick(evt)}
          />
        ))}{" "}
      </div>
    )}
    ;
  </div>
);
export default Jumbotron;
