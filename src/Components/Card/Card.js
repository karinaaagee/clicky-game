import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card" onClick ={()=> props.handleClick(props.id)}>
    <div className="img-container">
      <img alt ="" src={props.image} />
    </div>
    </div>
    
);

export default Card;
