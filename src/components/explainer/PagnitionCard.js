import React, { useEffect, useState } from "react";
import "../../styles/explainers.css";
import { data } from "../../database/explainers/Ex1.json";
import Progress_bar from "./ProgressBar";
import forwardArrow from '../../images/forwardArrow.svg'
import backwardArrow from '../../images/backwardArrow.svg'

function PagnitionCard() {
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState();
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const maxPageSize = 50;

  useEffect(() => {
    if (page < maxPageSize) {
      setContent(data[page].content[0]);
      setImage(data[page].content[1]);
    }
    console.log(progress);
    setProgress((page / (data.length - 1)) * 100);
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

  return (
    <div>
      <div className="flex justify-content-between align-items-center">
        <div>
          <p className="text__small-heading">{page + 1} / {data.length}</p>
        </div>

        <div className="flex flex-end gap">
          <button onClick={changePrev} className="circle bacward"><img src={backwardArrow}></img></button>
          <button onClick={changeNext} className="circle forward"><img src={forwardArrow}></img></button>
        </div>
      </div>
      <div className="pagnition__wrapper">
        <div className="content__wrapper">
          {content}
          {data[page].content[1] ? <img src={image}></img> : <div></div>}
        </div>
      </div>
      <Progress_bar
        bgcolor="var(--red)"
        progress={Math.round(progress)}
        height={19}
      />
    </div>
  );
}

export default PagnitionCard;
