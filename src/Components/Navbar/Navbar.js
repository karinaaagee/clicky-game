import React from "react";
import "./Navbar.css"

const Navbar = (props) => (

  <nav className="navbar navbar-default navbar-fixed-top">
    <ul>
      <li className="left">Clicky game</li>
      <li className="middle">{props.message}</li>
      <li className="right">Score: {props.score}<br/> Top score: {props.topscore}
      </li>
    </ul>
  </nav>


);
export default Navbar;
