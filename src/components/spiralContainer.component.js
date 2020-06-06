import React from "react";
import "./spiralContainer.component.css";
import Grid from "./grid.component";
const data3 = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

const SpiralContainer = (props) => {
  return (
    <div className="spiralContainer">
      <Grid data={data3} highlighted={5}></Grid>
    </div>
  );
};

export default SpiralContainer;
