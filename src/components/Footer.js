import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="warpper">
          <div className="flex footer">
            <a href="/">
              <h1 style={{ display: "inline" }} className="logo">
                boldly.{" "}
              </h1>
              <small className="text__regular">
                <i>by Zeynep Evecen</i>
              </small>
            </a>
            <div className="flex-column text__center">
              <p className="text__small-heading">website links</p>
              <a href="/">Posts</a>
              <a href="/inspo">Inspo</a>
            </div>
            <div className="flex-column text__center">
              <p className="text__small-heading">Find me on social media</p>
              <a href="https://twitter.com/reginz_" target="_blank">
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/zeynep-evecen-24a587151/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
