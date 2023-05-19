import React from "react";
import "./HomeStyles.css"
import Mission from "./img/missionImg2.0.png"
import Vision from "./img/visionImg2.0.png"
import Goal from "./img/goalImg2.0.png"

export default function MVGBanner() {
  return (
      <div className="mvg-container">
        <div className="mvg-img1">
          <img src={Mission} alt="Company Mission" className="mvg-logos"/>
        </div>

          <h3 className="mvg-title1">Mission</h3>
          <p className="mvg-paragraph1">Redback Operations aims to harness the power of IoT, AI and 3D game worlds to push your exercise routine into the future.</p>
      
        <div className="mvg-img2">
          <img src={Vision} alt="Company Vision" className="mvg-logos"/>
        </div>

          <h3 className="mvg-title2">Vision</h3>
          <p className="mvg-paragraph2">By developing cutting-edge technologies and</p>
          <p className="mvg-paragraph2"> advances in the space of IoT sensors, AI and</p> 
          <p className="mvg-paragraph2">Game development, Redback Operations seeks to</p>
          <p className="mvg-paragraph2">provide users with a fully immersive</p>
          <p className="mvg-paragraph2">experience where they can engage with other</p> 
          <p className="mvg-paragraph2">users both casually and competitively.</p>
  
        <div className="mvg-img3">
          <img src={Goal} alt="Company Goal" className="mvg-logos"/>
          </div>

          <h3 className="mvg-title3">Goal</h3>
          <ul>
            <li>Develop an engaged and self-sustaining online community </li>
            <li>Provide real-time performance feedback to users through cutting edge IoT sensors and AI </li>
            <li>Provide fully immersive 3D worlds that users can experience from the comfort of their own homes</li>
          </ul>
          
      </div>
  )
}
