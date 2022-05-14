import React from "react";
import "./HomeStyles.css"
import Carousell from "./carousel";
import Article from "./Article";
import Board from "./BoardDirectors";

export default function HomepageComponent() {
  return <div className="Home"><Carousell /> <Article/> <Board/></div>;
}
