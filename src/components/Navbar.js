import React, { useEffect, useState } from "react";
import sun from "../images/sun.svg";

function Navbar() {
  const [active, setActive] = useState();

  useEffect(() => {
    if ((window.location.href = "/")) {
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
          <a href="/">Posts</a>
        </h4>
        <h4 className="text__semibold">
          <a href="/inspo">Inspo</a>
        </h4>
      </div>
      <div>
        <img src={sun} />
      </div>
    </div>
  );
}

export default Navbar;
