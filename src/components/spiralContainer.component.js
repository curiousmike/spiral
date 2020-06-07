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
          goRow = true;
          goCol = false;
          colDir *= -1;
          col += colDir;
        }
      } else {
        goRow = true;
        goCol = false;
        colDir *= -1;
      }
    }
    if (goRow) {
      if (row + rowDir < data[0].length && row + rowDir >= 0) {
        row += rowDir;
        if (visited[row][col]) {
          goCol = true;
          goRow = false;
          rowDir *= -1;
          row += rowDir;
        }
      } else {
        goCol = true;
        col += colDir;
        goRow = false;
        rowDir *= -1;
      }
    }
    let index = row * data.length + col;
    this.setState({ count: index });

    this.checkDone();
  }

  checkDone() {
    let done = true;
    for (let i = 0; i < visited.length; i++) {
      for (let j = 0; j < visited[0].length; j++) {
        if (!visited[i][j]) {
          done = false;
          break;
        }
      }
    }
    if (done) {
      clearInterval(intervalTimer);
      this.setState({ count: 0, animating: false });
    }
  }

  start() {
    this.reset();
    this.setState({ animating: true });
    intervalTimer = setInterval(() => {
      this.updateRowCol();
    }, 100);
  }

  render() {
    return (
      <div className="outerContainer">
        <div className="spiralContainer">
          <Grid
            data={data}
            visited={visited}
            highlightIndex={this.state.count}
          ></Grid>
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
