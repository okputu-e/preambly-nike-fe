import React from "react";
import BtnLink from "../../Components/BtnLink";
import "./homepage.scss";

export default function HomePage() {
  return (
    <div className="homepage-hero">
      <h1>Incident Reporter</h1>
      <p>
        Report an accident or theft case to the owner and the relevant
        authorities in couple of minutes
      </p>
      <BtnLink target="/capture" btnname="toCapture" btntitle="Report" />
    </div>
  );
}
