import React from "react";

function ExplainerCard(props) {
  return (
    <a href={props.link}>
      <div className="tag tag__red tag__small-padding mb-10">
        <span className="text__small-heading text__white">{props.count} Cards</span>
      </div>

      <div className="card card__explainer">
        <div className="h-100 ">
          <div className="flex flex-end h-100 ">
            <p className="p-5 border-mix bg__white p-m-0">{props.heading}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ExplainerCard;
