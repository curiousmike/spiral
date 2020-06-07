import React from "react";
import GridRow from "./gridRow.component";
import GridItem from "./gridItem.component";
import "./grid.component.css";

function generateRows(data, highlightIndex, visitedData) {
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
              uniqueIndex={i * j + (i + j)}
              highlight={index === highlightIndex}
              visited={visitedData[i][j]}
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
