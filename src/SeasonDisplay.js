import React from "react";
import "./SeasonDisplay.css";

const SeasonsConfig = {
  Summer: {
    text: "Let's hit the Beach xD!",
    iconName: "sun",
  },

  Winter: {
    text: "Daayuuumm,It's Chilly!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month)=>{
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat < 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const seasons = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = SeasonsConfig[seasons];
  //console.log(props.lat);
  //console.log(seasons)
  return (
    <div className={`season-display ${seasons}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
