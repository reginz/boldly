import React from "react";
import data from "../database/Inspo";

function InspoTable() {
  let audio = new Audio("/Blop.mp3");

  const start = () => {
    setTimeout(() => {
      audio.play();
    }, 160);
  };
  return (
    <div style={{overflowX:"auto"}}>
      <table cellspacing="0" className="table">
          <tr>
            <th className="text__small-heading">name</th>
            <th className="text__small-heading">description</th>
            <th className="text__small-heading">category</th>
          </tr>
          {data.map((d) => {
            return (
              <tr className="table__column">
                <a className="table__cell" href={d.link} target="_blank">
                  <td className="text__purple text__bold">{d.name}</td>
                </a>
                <a className="table__cell" href={d.link} target="_blank">
                  <td>{d.description}</td>
                </a>
                <td onClick={start}>
                  <button className="tag no-btn">{d.category}</button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default InspoTable;
