import React from "react";
import "./PressBox.scss";
const PressBox = ({ title, date, desc, imgSrc }) => {
  return (
    <div className="press_box">
      <div className="press_img">
        <img src={imgSrc} alt="press image" />
      </div>
      <div className="press_info">
        <h4>{title}</h4>
        <span className="date">{date}</span>
        <p>{desc}</p>
        <a href="#no-where">Read more</a>
      </div>
    </div>
  );
};

export default PressBox;
