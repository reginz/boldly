import React, { useEffect, useState } from "react";
import "../../styles/explainers.css";
import { data } from "../../database/explainers/Ex1.json";
import Progress_bar from "./ProgressBar";
function PagnitionCard() {
  const [page, setPage] = useState(0);
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const maxPageSize = 50;

  useEffect(() => {
    if (page < maxPageSize) {
      setContent(data[page].content[0]);
      setImage(data[page].content[1]);
    }
  });

  const changeNext = () => {
    var currentPage = page;
    if (page + 1 < data.length) {
      var nextPage = currentPage + 1;
      setPage(nextPage);
    } else {
      setPage(currentPage);
    }
  };

  const changePrev = () => {
    var currentPage = page;
    if (page + 1 <= data.length && page > 0) {
      var prevPage = currentPage - 1;
      setPage(prevPage);
    } else {
      setPage(currentPage);
    }
  };

  var progress = (page / data.length) * 100

  return (
    <div>
      <div className="flex flex-end">
        <button onClick={changePrev} className="circle bacward"></button>
        <button onClick={changeNext} className="circle forward"></button>
      </div>
      <div className="pagnition__wrapper">
        {content}
        {data[page].content[1] ? <img src={image}></img> : <div></div>}
      </div>
      <Progress_bar bgcolor="red" progress={progress} height={30} />
    </div>
  );
}

export default PagnitionCard;
