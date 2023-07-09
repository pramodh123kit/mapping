import React from "react";

function Card(props) {
  return (
    <div className="dictionary">
      <div className="term">
      <h3>{props.id}</h3>
        <dt>
          <span className="emoji">{props.emoji}</span>
          <span>{props.name}</span>
        </dt>
        <dd>{props.meaning}</dd>
      </div>
    </div>
  );
}

export default Card;
