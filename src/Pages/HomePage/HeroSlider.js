import React, { useEffect, useState } from "react";

const images = [
  {
    id: 1,
    url: require("../../assets/ambulance.png"),
  },
  {
    id: 2,
    url: require("../../assets/fire-service.png"),
  },
  {
    id: 3,
    url: require("../../assets/police.png"),
  },
];

export default function HeroSlider({ heroImg }) {
  //initiate a state to track the index every 5second
  const [currentIndex, setCurrentIndex] = useState(0);

  //use effect to set & clear the 5second intervals
  useEffect(() => {
    //initiate the
    let sliderIndex = 0;
    const sliderLen = images.length;

    function increaseIndex() {
      sliderIndex++;
      if (sliderIndex > sliderLen) {
        sliderIndex = 1;
      }
      setCurrentIndex(sliderIndex - 1);
    }
    const intervalId = setInterval(() => {
      increaseIndex();
    }, 2000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  //create slides from looping through heroInfo array of objects
  const slides = images.map(
    (image, index) =>
      index === currentIndex && (
        <img
          key={image.id}
          src={image.url}
          className={heroImg}
          alt="hero-images"
        />
      )
  );
  return <div className="hero-text"> {slides}</div>;
}
