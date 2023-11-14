import React, { useEffect } from "react";
import "./Marquee.scss";

const Marquee = () => {
  useEffect(() => {
    const marquee = document.querySelector(".marquee-content");
    const textToRepeat = ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.38698 0H7.61328V16H8.38698V0Z" fill="white"/>
  <path d="M16 7.61328H0V8.38698H16V7.61328Z" fill="white"/>
  <path d="M2.61446 2.06864L2.06738 2.61572L13.381 13.9293L13.9281 13.3822L2.61446 2.06864Z" fill="white"/>
  <path d="M13.381 2.06872L2.06738 13.3823L2.61446 13.9294L13.9281 2.6158L13.381 2.06872Z" fill="white"/>
  <path d="M0.740157 4.62577L0.448242 5.34229L15.2658 11.3791L15.5577 10.6626L0.740157 4.62577Z" fill="white"/>
  <path d="M10.6628 0.448513L4.62598 15.2661L5.34249 15.558L11.3793 0.740428L10.6628 0.448513Z" fill="white"/>
  <path d="M15.2836 4.65304L0.44043 10.6274L0.729327 11.3452L15.5725 5.3708L15.2836 4.65304Z" fill="white"/>
  <path d="M5.36717 0.440184L4.64941 0.729004L10.6222 15.5722L11.34 15.2834L5.36717 0.440184Z" fill="white"/>
</svg> <span>Great Ife Community Hangout</span>`;

    marquee.innerHTML = textToRepeat;
    const repeatCount = 10;
    for (let i = 1; i < repeatCount; i++) {
      marquee.innerHTML += textToRepeat;
    }
  }, []);

  return (
    <div className="marquee-wrapper">
      {/* jsx-a11y/no-distracting-elements */}
      {/* eslint-disable-next-line  */}
      <marquee behavior="scroll" direction="left" className="marquee-content" />
    </div>
  );
};

export default Marquee;
