import React from "react";
import GridRow from "./gridRow.component";
import GridItem from "./gridItem.component";
import "./grid.component.css";

function generateRows(data, highlightIndex, visitedData) {
  return data.map((row, rowIndex) => {
    return (
      <GridRow
        key={rowIndex}
        data={row.map((element, colIndex) => {
          const index = rowIndex * row.length + colIndex;
          return (
            <GridItem
              data={element}
              key={index}
              uniqueIndex={rowIndex * (data.length - 1) + (rowIndex + colIndex)}
              highlight={index === highlightIndex}
              visited={visitedData[rowIndex][colIndex]}
            />
          );
        })}
      />
    );
  });
}

const Grid = (props) => {
  const { data, highlightIndex, visited } = props;

  const rows = generateRows(data, highlightIndex, visited);
  return <div className="grid">{rows}</div>;
};

export default Grid;
