import React, { useState } from "react";
import "./result.scss";

const resultLinks = [
  {
    id: 1,
    link: "Owners Information",
  },
  {
    id: 2,
    link: "Vehicle Information",
  },
];

export default function Result() {
  const [show, setShow] = useState(true);

  function handleClick(id) {
    console.log(id);
    setShow((prev) => !prev);
  }

  const resultLink = resultLinks.map((link) => {
    return (
      <span key={link.id} onClick={() => handleClick(link.id)}>
        {link.link}
      </span>
    );
  });

  return (
    <div className="result">
      <div className="result-heading">
        <h1>Result</h1>
        <h2>Plate Number: KSF-622AE</h2>
      </div>

      <div className="result-links">{resultLink}</div>

      {show ? (
        <section className="owners-info">
          <div className="owners-info">
            <p className="title">Name:</p>
            <p className="title-info">Ibrahim Muhammed</p>
          </div>
          <div className="owners-info">
            <p className="title">Mobile Number:</p>
            <p className="title-info">08147758883</p>
          </div>
          <div className="owners-info">
            <p className="title">Email:</p>
            <p className="title-info">hudrogen508@gmail.com</p>
          </div>
          <div className="owners-info">
            <p className="title">Adderess:</p>
            <p className="title-info">No 13, Sheikh Belgore street, Basin</p>
          </div>
        </section>
      ) : (
        <section className="vehicle-info">
          <div className="vehicle-info">
            <p className="title">Registration Date:</p>
            <p className="title-info">20-12-2022</p>
          </div>
          <div className="vehicle-info">
            <p className="title">File Number:</p>
            <p className="title-info">TYT400-12</p>
          </div>
          <div className="vehicle-info">
            <p className="title">Chassis Number:</p>
            <p className="title-info">UHHS767632781728118HSJDHJSD</p>
          </div>
          <div className="vehicle-info">
            <p className="title">Engine Number:</p>
            <p className="title-info">7883HHHD8792832NSNDKNW</p>
          </div>
          <div className="vehicle-info">
            <p className="title">State:</p>
            <p className="title-info">Kwara State</p>
          </div>
          <div className="vehicle-info">
            <p className="title">Vehicle Make:</p>
            <p className="title-info">Toyota</p>
          </div>
          <div className="vehicle-info">
            <p className="title">Vehicle Model:</p>
            <p className="title-info">TYT400-12</p>
          </div>
        </section>
      )}
    </div>
  );
}
