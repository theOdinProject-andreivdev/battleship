import Gameboard from "../components/Gameboard";
import Plane from "../components/Plane";
import BlockUI from "./BlockUI";
import uniqid from "uniqid";
import { Component } from "react";
import gameStatus from "../util/gameStatus";

class GameboardUI extends Component {
  constructor(props) {
    super(props);
    this.gameBoard = Gameboard();
    this.state = {
      status: gameStatus.selecting,
      gameBoardGrid: this.gameBoard.getBlocks(),
    };

    const plane1 = Plane({ x: 2, y: 2 });
    this.addPlane(plane1);

    const plane2 = Plane({ x: 5, y: 5 });
    this.addPlane(plane2);

    this.clicks = 0;
    this.clickdelay = 400;
  }

  addPlane = (plane) => {
    this.gameBoard.addPlane(plane);
  };

  mouseClick(e) {
    console.log("click");
    this.gameBoard.hit({
      x: e.target.dataset.x,
      y: e.target.dataset.y,
    });
    this.setState({ gameBoardGrid: this.gameBoard.getBlocks() });
  }

  mouseDown(e) {
    if (
      this.state.status === gameStatus.selecting ||
      this.state.status === gameStatus.dropped
    ) {
      this.clicks++;
      setTimeout(
        function () {
          this.clicks = 0;
        }.bind(this),
        this.clickdelay
      );

      if (this.clicks === 2) {
        this.gameBoard.selectPlane({
          x: e.target.dataset.x,
          y: e.target.dataset.y,
        });

        this.gameBoard.rotate(this.gameBoard.getSelectedPlane());
        this.setState({ gameBoardGrid: this.gameBoard.getBlocks() });
        this.clicks = 0;
        return;
      } else {
        this.setState({ status: gameStatus.moving });
        this.gameBoard.selectPlane({
          x: e.target.dataset.x,
          y: e.target.dataset.y,
        });
        this.gameBoard.moveOrigin = {
          x: e.target.dataset.x,
          y: e.target.dataset.y,
        };
      }
    }
    if (this.state.status === gameStatus.hitting) this.mouseClick(e);
  }

  mouseLeave(e) {
    if (
      this.state.status === gameStatus.moving ||
      this.state.status === gameStatus.movingin
    ) {
      if (e.target.dataset.x !== null && e.target.dataset.y !== null) {
        this.setState({ status: gameStatus.movingout });

        this.gameBoard.moveOrigin = {
          x: e.target.dataset.x,
          y: e.target.dataset.y,
        };
      }
      this.forceUpdate();
    }
  }

  mouseEnter(e) {
    if (this.state.status === gameStatus.movingout) {
      if (e.target.dataset.x != null && e.target.dataset.y != null) {
        let destx = e.target.dataset.x;
        let desty = e.target.dataset.y;

        this.gameBoard.moveSelectedPlane(this.gameBoard.moveOrigin, {
          x: destx,
          y: desty,
        });
      }

      this.setState({ gameBoardGrid: this.gameBoard.getBlocks() });
      this.setState({ status: gameStatus.movingin });
      this.forceUpdate();
    }
  }

  mouseUp(e) {
    this.setState({ status: gameStatus.dropped });
  }

  mouseDouble(e) {
    console.log("doubleclick");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="card">
            <div
              className="card-body"
              style={{
                display: "grid",
                gridTemplateRows: "repeat(10, 20px)",
                gridTemplateColumns: "repeat(10, 20px)",
              }}
            >
              {this.state.gameBoardGrid.map((block) => {
                return (
                  <div
                    className="box"
                    key={uniqid()}
                    onMouseDown={this.mouseDown.bind(this)}
                    onMouseLeave={this.mouseLeave.bind(this)}
                    onMouseOver={this.mouseEnter.bind(this)}
                    onMouseUp={this.mouseUp.bind(this)}
                    onDoubleClick={this.mouseDouble.bind(this)}
                  >
                    <BlockUI block={block} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameboardUI;
