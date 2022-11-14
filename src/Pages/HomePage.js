import React from "react";
import BtnLink from "../Components/BtnLink";

export default function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to Nike Security Alert</h1>
      <BtnLink target="/capture" btnname="toCapture" btntitle="Report Event" />
    </div>
  );
}
