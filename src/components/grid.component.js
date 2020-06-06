import React from "react";
import GridRow from "./gridRow.component";
import "./grid.component.css";

function generateRows(data, highlight) {
  return data.map((row, i) => {
    return <GridRow data={row} key={i} highlight={highlight} />;
  });
}

const Grid = (props) => {
  const { data, highlight } = props;
  const rows = generateRows(data, highlight);
  return <div className="grid">{rows}</div>;
};

export default Grid;
