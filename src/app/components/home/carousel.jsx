import React from "react";
import { Link } from 'react-router-dom';
import "./HomeStyles.css"
import cycling from "./img/Cycling2.0.png"
import running from "./img/Running2.0.png"
import yoga from "./img/Yoga2.0.png"
import esports from "./img/E-Sports2.0.png"
import exercise_everyday from "./img/exercise_everyday2.0.png"

import "bootstrap/dist/css/bootstrap.css";

export default function Carousel() {
  return (
    <>
    <div className="exercise-everyday-container">
      <p className="heading1">Exercise</p>
      <p className = "heading2">Everyday</p>
      <p className="important-message">Challenging yourself every day</p> 
      <p className="important-message"> is one of the most exciting ways to live</p>
      <Link to="/signup">
        <button className="signup-button">GET STARTED</button>
      </Link>
      <div><img src = {exercise_everyday} class="enlarge-img"/></div>
    </div>
    <div className="icon-grid">
      <div className="grid-object"><img src = {running} class="sports-img"/><p>Running</p></div>
      <div className="grid-object"><img src = {yoga} class="sports-img"/><p>Yoga</p></div>
      <div className="grid-object"><img src = {cycling} class="sports-img"/><p>Cycling</p></div>
      <div className="grid-object"><img src = {esports} class="sports-img"/><p>E-Sports</p></div>
    </div>
    </>
  );
}