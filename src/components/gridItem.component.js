import React from "react";
import "./gridItem.component.css";

const GridItem = (props) => {
  const { data, highlight, visited } = props;
  console.log("visited = ", visited);
  let className = "gridItem";
  if (highlight) {
    className = "gridItemHighlight";
  }
  if (visited) {
    className = "gridItemVisited";
  }
  console.log("classname = ", className);
  return (
    <span className={className} key={data}>
      {data}
    </span>
  );
};

export default GridItem;
