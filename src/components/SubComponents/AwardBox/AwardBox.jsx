import React from "react";
import "./AwardBox.scss";
const AwardBox = ({ title, desc, img }) => {
  return (
    <div className="award__box">
      <div className="award__box--info">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
      <div className="award__box--img">
        <img src={img} alt="award image" />
      </div>
    </div>
  );
};

export default AwardBox;
