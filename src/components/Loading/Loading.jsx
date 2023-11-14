import React from "react";
import "./Loading.css";
import Video from "../../assets/videos/GILH.mp4";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__video-container">
        <video className="loading__video" autoPlay loop muted playsInline>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Loading;
