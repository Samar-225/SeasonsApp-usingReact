import React from "react";
import "./SeasonDisplay.css";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? "summer" : "winter";
  else return lat > 0 ? "winter" : "summer";
};

const SeasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it's chilly!",
    iconName: "snowflake",
  },
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());

  const { text, iconName } = SeasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon massive icon-left`}></i>
      <h1 className={`text1`}>{text}</h1>
      <i className={`${iconName} icon massive icon-right`}></i>
    </div>
  );
};

export default SeasonDisplay;
