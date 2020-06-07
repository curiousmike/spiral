import React from "react";
import GridRow from "./gridRow.component";
import GridItem from "./gridItem.component";
import "./grid.component.css";

function generateRows(data, highlightIndex) {
  return data.map((row, i) => {
    return (
      <GridRow
        key={i}
        data={row.map((element, j) => {
          const index = i * row.length + j;
          return (
            <GridItem
              data={element}
              key={index}
              highlight={index === highlightIndex}
            />
          );
        })}
      />
    );
  });
}

const Grid = (props) => {
  const { data, highlightIndex } = props;

  const rows = generateRows(data, highlightIndex);
  return <div className="grid">{rows}</div>;
};

export default Grid;
