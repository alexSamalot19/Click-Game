import React from "react";
import Score from "../Score";
import TopScore from "../TopScore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = props => (
  <div className="navbar">
    <div className="btn btn-info">
      <h1>NBA Memory Click</h1>
      <Score score={props.score} />
    </div>

    <div className="btn btn-info">
      <h1>Can You Out-Click?</h1>
      <TopScore topScore={props.topScore} />
    </div>
  </div>
);

export default Navbar;
