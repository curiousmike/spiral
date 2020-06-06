import React from "react";
import "./gridItem.component.css";

const GridItem = (props) => {
  const { data } = props;
  return (
    <span className="gridItem" key={data}>
      {data}
    </span>
  );
};

export default GridItem;
