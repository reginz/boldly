import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import wave from "../images/wave.svg";
import sitting from "../images/post.svg";

const Post = () => {
  const [postContent, setPostcontent] = useState("");

  const url = window.location.href;
  const currentBlog = url.split("/post/")[1].split("%20").join(" ");

  useEffect(() => {
    import(`../database/posts/${currentBlog}.md`).then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err))
    );
  }, []);

  return (
    <div>
      <img src={wave} className="wave" />
      <div className="container ">
        <div className="wrapper">
          <div className="sitting">
            <img src={sitting} width={350} />
          </div>
        </div>
        <article>
          <main className="post-wrapper">
            <Markdown>{postContent}</Markdown>
          </main>
        </article>
      </div>
    </div>
  );
};

export default Post;
