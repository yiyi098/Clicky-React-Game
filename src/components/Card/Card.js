import React from "react";
import "./Card.css";

const Card = props => (
  <div onClick={function() {
    if (props.clicked) {
      props.handleReset();
    } else { 
      props.handleIncrement();
      props.handleTopScore();
      props.beenClicked(props.id);
    }
    }} className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          {props.name}
        </li>
      </ul>
    </div>
  </div>
);

export default Card;
