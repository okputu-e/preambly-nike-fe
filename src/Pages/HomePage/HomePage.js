import React from "react";
import BtnLink from "../../Components/BtnLink";
import BtnClik from "../../assets/Vector.svg";
import Circle from "../../assets/Ellipse 2.png";
import "./homepage.scss";
import HeroSlider from "./HeroSlider";

export default function HomePage() {
  return (
    <div className="homepage-hero">
      <div className="hero-content">
        <h1>Your Instant Incident Reporter</h1>
        <p>
          Report an accident or theft case to the owner and the relevant
          authorities in couple of minutes
        </p>
        <div className="hero-btn">
          <BtnLink
            target="/capture"
            btnname="toCapture"
            btntitle="Report Incident"
          />
          <span className="btn-img circle-p pulse">
            <img src={BtnClik} alt="btnclick" />
          </span>
        </div>
      </div>
      <div className="hero-image">
        <HeroSlider heroImg="hero-img" />
      </div>
      <div className="circle">
        <img src={Circle} alt="circle" />
      </div>
    </div>
  );
}
