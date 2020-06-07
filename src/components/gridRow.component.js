import React from "react";
import "./gridRow.component.css";

const GridRow = (props) => {
  const { data } = props;
  return <div className="gridRow">{data}</div>;
};

export default GridRow;
