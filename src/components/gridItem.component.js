import React from "react";
import "./gridItem.component.css";

const gridStyleBase = {
  display: "flex",
  justifyContent: "center",
  padding: "16px",
  backgroundColor: "#f2d7d5",
  width: "5%",
};

const gridStyleHighlight = { ...gridStyleBase, backgroundColor: "#c0392b" };

const GridItem = (props) => {
  const { data, highlight, visited, uniqueIndex } = props;
  let className = gridStyleBase;
  if (highlight) {
    className = gridStyleHighlight;
  }
  if (visited) {
    const r = 200 + uniqueIndex * 2;
    const g = 50 + uniqueIndex * 2;
    const b = 48 + uniqueIndex * 2;
    const rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    className = { ...gridStyleBase, backgroundColor: rgb };
  }
  return (
    <span style={className} key={data} data={"data" + uniqueIndex}>
      {data}
    </span>
  );
};

export default GridItem;
