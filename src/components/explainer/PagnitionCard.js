import React from "react";
import "../../styles/explainers.css";

function PagnitionCard(props) {
  return (
    <div>
      <div className="flex flex-end">
        <div className="circle forward"></div>
        <div className="circle backward"></div>
      </div>
      <div className="pagnition__wrapper">content</div>
    </div>
  );
}

export default PagnitionCard;
