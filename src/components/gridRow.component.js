import React from "react";
import "./gridRow.component.css";
import GridItem from "./gridItem.component";

function generateItems(data) {
  return data.map((item, i) => {
    return <GridItem data={item} key={i} />;
  });
}

const GridRow = (props) => {
  const { data } = props;
  const items = generateItems(data);
  return <div className="gridRow">{items}</div>;
};

export default GridRow;
