import React from "react";
import "./spiralContainer.component.css";
import Grid from "./grid.component";
const data3 = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];
const dataSize = data3.length * data3[0].length;
let row = 0,
  col = 0,
  rowDir = 1,
  colDir = 1;
let intervalTimer = null;
class SpiralContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      animating: false,
    };
  }

  reset() {
    clearInterval(intervalTimer);
    this.setState({ count: 0, animating: false });
  }

  updateRowCol() {
    if (this.state.count + 1 < 9) {
      this.setState({ count: this.state.count + 1 });
    } else {
      this.setState({ count: 0 });
    }
    if (row + 1 < data3.length) {
      row++;
    } else if (col + 1 < data3.length) {
      col++;
    } else {
      console.log("end");
    }
    console.log("new row/col = ", row, col);
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
      <div className="spiralContainer">
        <Grid data={data3} highlightIndex={this.state.count}></Grid>
        <button onClick={() => this.start()}>Start</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}

export default SpiralContainer;
