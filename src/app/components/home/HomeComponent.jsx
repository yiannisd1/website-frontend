import React from "react";
import "./HomeStyles.css"
import Carousell from "./carousel";
import Article from "./Article";

export default function HomepageComponent() {
  return <div className="center"><Carousell /> <Article/></div>;
}
