import React from "react";
import InspoTable from "../components/InspoTable";

function Inspo() {
  return (
    <div className="container pt-5">
      <div className="wrapper">
        <h1>Inspo.</h1>
        <h3 className="text__regular">
          Some of those works have had extraordinary effects on my life or way
          of thinking.
        </h3>
        <div className="pt-5">
          <InspoTable />
        </div>
      </div>
    </div>
  );
}

export default Inspo;
