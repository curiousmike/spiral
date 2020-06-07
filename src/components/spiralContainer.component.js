import React from "react";
import "./spiralContainer.component.css";
import Grid from "./grid.component";

// const dataFromQuiz = [
//   [1, 2, 3],
//   [8, 9, 4],
//   [7, 6, 5],
// ];

const data = [];

const visited = [];
const dataSize = 5;

let row = 0,
  col = 0,
  rowDir = 1,
  colDir = 1;
let intervalTimer = null;
let goCol = true;
let goRow = false;
class SpiralContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      animating: false,
    };

    let counter = 1;
    for (let rows = 0; rows < dataSize; rows++) {
      data[rows] = [];
      visited[rows] = [];
      for (let cols = 0; cols < dataSize; cols++) {
        data[rows][cols] = counter;
        counter++;
        visited[rows][cols] = false;
      }
    }
  }

  reset() {
    console.log("reset");
    clearInterval(intervalTimer);
    this.setState({ count: 0, animating: false });
    row = 0;
    col = 0;
    rowDir = 1;
    colDir = 1;
    goCol = true;
    goRow = false;
    for (var r = 0; r < data.length; r++) {
      for (var c = 0; c < data.length; c++) {
        visited[r][c] = false;
      }
    }
  }

  updateRowCol() {
    visited[row][col] = true;
    if (goCol) {
      if (col + colDir < data.length && col + colDir >= 0) {
        col += colDir;
        if (visited[row][col]) {
          goCol = false;
          colDir *= -1;
          col += colDir;
          goRow = true;
        }
      } else {
        goCol = false;
        colDir *= -1;
        goRow = true;
      }
    }
    if (goRow) {
      if (row + rowDir < data[0].length && row + rowDir >= 0) {
        row += rowDir;
        if (visited[row][col]) {
          goRow = false;
          rowDir *= -1;
          row += rowDir;
          goCol = true;
        }
      } else {
        goRow = false;
        rowDir *= -1;

        goCol = true;
      }
    }
    let index = row * data.length + col;
    this.setState({ count: index });
  }
  componentDidMount() {}

  start() {
    this.setState({ animating: true });
    intervalTimer = setInterval(() => {
      this.updateRowCol();
    }, 250);
  }

  render() {
    return (
      <div className="outerContainer">
        <div className="spiralContainer">
          <Grid data={data} highlightIndex={this.state.count}></Grid>
        </div>
        <div className="spiralButtonContainer">
          <button onClick={() => this.start()} className="spiralButton">
            Start
          </button>
          <button onClick={() => this.reset()} className="spiralButton">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default SpiralContainer;
