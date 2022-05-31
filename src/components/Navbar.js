import React, { useEffect, useState } from "react";
import sun from "../images/sun.svg";

function Navbar() {
  const [active, setActive] = useState();

  useEffect(() => {
    if (window.location.href === "http://localhost:3000/") {
      setActive("posts");
    } else {
      setActive("inspo");
    }
  }, []);
  return (
    <div className="navbar">
      <h1 className="logo">Zeynep Evecen</h1>
      <div className="flex gap middle">
        <h4
          className={
            active === "posts" ? "text__semibold active" : "text__semibold"
          }
        >
          <a className="flex-column" href="/">
            Posts{" "}
            {active === "posts" ? (
              <svg
                width="80"
                height="14"
                viewBox="0 0 111 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="path"
                  d="M1 12.5L15 2L22.5 12.5L32 7.5H44L53 12.5L89.5 7.5H109.5"
                  stroke="#E60066"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            ) : (
              <div></div>
            )}
          </a>
        </h4>
        <h4 className="text__semibold">
        <a className="flex-column" href="/inspo">
            Inspo{" "}
            {active === "inspo" ? (
              <svg
                width="80"
                height="14"
                viewBox="0 0 111 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="path"
                  d="M1 12.5L15 2L22.5 12.5L32 7.5H44L53 12.5L89.5 7.5H109.5"
                  stroke="#E60066"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            ) : (
              <div></div>
            )}
          </a>
        </h4>
      </div>
      <div>
        <img src={sun} />
      </div>
    </div>
  );
}

export default Navbar;
