import React from "react";
import ExplainerCard from "../components/ExplainerCard";

function Explainers() {
  return (
    <div className="container pt-5 flex explainer-container">
      <ExplainerCard
        link=""
        count="10"
        heading="Everything you need to know about black holes"
      />
    </div>
  );
}

export default Explainers;
