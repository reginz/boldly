import React from "react";
import ExplainerCard from "../components/ExplainerCard";
import explainer from "../database/explainerCardData";
function Explainers() {
  return (
    <div className="container pt-5 flex explainer-container">
{explainer.map((data)=>{
  return(
    <ExplainerCard
    link={data.link}
    count={data.count}
    heading={data.title}
  />
  )
})}
     
    </div>
  );
}

export default Explainers;
