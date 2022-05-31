import React, { useState, useEffect } from "react";

function Modal() {
  const [active, setActive] = useState();
  useEffect(() => {
    if (window.location.href === "http://localhost:3000/") {
      setActive("posts");
    } else if (window.location.href === "http://localhost:3000/inspo") {
      setActive("inspo");
    }
  }, []);
  return (
    <div className="wrapper">
      <div className="mobile-nav flex-column gap middle">
        <h4
          className={
            active === "posts" ? "text__semibold active" : "text__semibold"
          }
        >
          <a className="flex-column" href="/">
            Posts{" "}
            {active === "posts" ? (
              <svg
                width="50"
                height="7"
                viewBox="0 0 58 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="path"
                  d="M1 5.5L12 1.5L17 4L25.5 5.5L34 3H41.5L46.5 4H57"
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
                width="52"
                height="16"
                viewBox="0 0 52 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="path"
                  d="M1 13.5L7.45161 3L10.9078 13.5L15.2857 8.5H20.8157L24.9631 13.5L41.7834 8.5H51"
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
    </div>
  );
}

export default Modal;
