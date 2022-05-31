import React from "react";
import PostCard from "../components/PostCard";
import wave from "../images/wave.svg";
import sitting from "../images/sitting.svg";
import post from "../database/postCardData";

function Posts() {
  return (
    <div>
      <img src={wave} className="wave" />
      <div className="container">
        <div className="wrapper">
          <div className="sitting">
            <img src={sitting} width={350} />
          </div>
          <h4
            style={{ marginTop: "0", padding: "0" }}
            className="text__red text__semibold"
          >
            RECENT POSTS
          </h4>

          <div className="flex post-container">
            {post.map((p) => {
              return <PostCard link={p.link} title={p.title} description={p.description} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
