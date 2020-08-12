import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      
      <span className="remove" onClick={() => props.removeCard(props.id)}>
        ð
      </span>
    </div>
  );
}

export default Card;
