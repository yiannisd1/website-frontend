import React from "react";
import "./HomeStyles.css"
import Carousell from "./carousel";
import Article from "./Article";
import Banner from "./Banner";

export default function HomepageComponent() {
  return <div className="center"><Carousell/> <Article/> <Banner/></div>;
}
