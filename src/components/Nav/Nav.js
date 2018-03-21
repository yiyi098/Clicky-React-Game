import React from "react";
import "./Nav.css";

const Nav = (props) => (
  
  // <nav className="navbar navbar-inverse navbar-top">
  //   <div className="container-fluid">
  //     <div className="navbar-header row">
  //       <div className="col">
  //         <span className="brand"><a href="/">Clicky Game</a></span>
  //       </div>
  //       <div className="col">
  //         <span className="">{props.message}</span>
  //       </div>
  //       <div className="col">
  //         <span>Score: {props.currentScore} | Top Score: {props.topScore}</span>
  //       </div>
  //     </div>
  //   </div>
  // </nav>



  <nav className="navbar container">
    <ul className="row">
      <li className="col-8">
        <a href="/">Clicky Game</a>
      </li>
      <li className="col-4">Score: {props.currentScore} | Top Score: {props.topScore}</li>
    </ul>
    <br/>
    <div>
      {props.message}
    </div>
  </nav>
);

export default Nav;