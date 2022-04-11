import React from "react";
import "./HomeStyles.css"
import { Carousel } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";

export default function Carousell() {
  return (
    <div className="section">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src = "https://res.cloudinary.com/iconfitness/image/upload/dpr_3.0,f_auto,q_auto,w_500/v1/site--6/PFEX16718_1-01068.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="Carousel-section">
            <h2>Article Heading</h2>
            <p>Quickly determine problems with crop growth through accurate sensor
            readings, and provide communities with fresh and naturaly grown
            resources that can be used to create ingredients and much more!</p>
            <button className="cButton">Start Now!</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.mensjournal.com/wp-content/uploads/2018/02/home-workout.jpg?quality=86&strip=all"
            alt="Third slide"
          />

          <Carousel.Caption className="Carousel-section">
            <h2>Article Heading</h2>
            <p>Quickly determine problems with crop growth through accurate sensor
            readings, and provide communities with fresh and naturaly grown
            resources that can be used to create ingredients and much more!</p>
            <button className="cButton">Start Now!</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.sparkpeople.com/resize/100//blog_photos/main/BigImages/home_workout_header.png"
            alt="Third slide"
          />

          <Carousel.Caption className="Carousel-section">
            <h2>Article Heading</h2>
            <p>Quickly determine problems with crop growth through accurate sensor
            readings, and provide communities with fresh and naturaly grown
            resources that can be used to create ingredients and much more!
            </p>
            <button className="cButton">Start Now!</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}