import React from "react";
import read from "../images/read.svg";
function PostCard(props) {
  return (
    <div className="card">
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <small>
        Read More <img src={read} />
      </small>
    </div>
  );
}

export default PostCard;
