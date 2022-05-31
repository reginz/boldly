import React from "react";
import PostCard from "../components/PostCard";
import wave from "../images/wave.svg";
import sitting from "../images/sitting.svg";
import Navbar from "../components/Navbar";

function Posts() {
  return (
    <div>
      <img src={wave} className="wave" />
      <div className="container">
          <Navbar />
        <div className="sitting">
          <img src={sitting} />
        </div>
        <h4 className="text__red text__semibold">RECENT POSTS</h4>
        <PostCard
          title="Do things that will surpass your life"
          description="“Should I use pixels or rems?”. In this comprehensive blog post, we'll answer this question once and for all. You'll learn about the accessibility implications, and how to determine the best unit to use in any scenario."
        />
      </div>
    </div>
  );
}

export default Posts;
