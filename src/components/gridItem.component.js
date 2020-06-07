import React from "react";
import "./gridItem.component.css";

const GridItem = (props) => {
  const { data, highlight } = props;
  return (
    <span className={!highlight ? "gridItem" : "gridHighlight"} key={data}>
      {data}
    </span>
  );
};

export default GridItem;
