import Gameboard from "../components/Gameboard";
import Plane from "../components/Plane";
import BlockUI from "./BlockUI";
import uniqid from "uniqid";
import { Component } from "react";
import gameStatus from "../util/gameStatus";
import blockType from "../util/blockType";
import drawBlocks from "../util/drawBlocks";

class GameboardUI extends Component {
  constructor(props) {
    super(props);
    console.log("Load UI");
    this.gameBoard = Gameboard();
    this.state = {
      status: gameStatus.selecting,
      gameBoardGrid: this.gameBoard.getBlocks(),
      moveOrigin: { x: 0, y: 0 },
    };

    const plane1 = Plane({ x: 2, y: 2 });
    this.gameBoard.addPlane(plane1);

    const plane2 = Plane({ x: 5, y: 5 });
    this.gameBoard.addPlane(plane2);
  }

  onBlockClick(e) {
    e.preventDefault();

    console.log(e.button);
    /* 
    switch (this.state.status) {
      case gameStatus.placing:
        break;
      case gameStatus.playing:
        this.gameBoard.hit({
          x: e.target.dataset.x,
          y: e.target.dataset.y,
        });
        this.setState({ gameBoardGrid: this.gameBoard.getBlocks() });
        break;
      default:
        break;
    } */
  }

  mouseDown(e) {
    if (
      this.state.status === gameStatus.selecting ||
      this.state.status === gameStatus.dropped
    ) {
      console.log("down");
      this.setState({ status: gameStatus.moving });
      this.forceUpdate();
    }
  }

  mouseLeave(e) {
    if (
      this.state.status === gameStatus.moving ||
      this.state.status === gameStatus.movingin
    ) {
      if (e.target.dataset.x !== null && e.target.dataset.y !== null) {
        console.log("leave");
        this.setState({ status: gameStatus.movingout });
        this.setState({
          moveOrigin: { x: e.target.dataset.x, y: e.target.dataset.y },
        });
        this.forceUpdate();
      }
    }
  }

  mouseEnter(e) {
    if (this.state.status === gameStatus.movingout) {
      console.log("enter");
      if (e.target.dataset.x != null && e.target.dataset.y != null) {
        let destx = e.target.dataset.x;
        let desty = e.target.dataset.y;
        console.log(this.state.moveOrigin);
        console.log("destx:" + destx + " desty:" + desty);

        this.gameBoard.movePlane(this.state.moveOrigin, {
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
    console.log("up");
    this.setState({ status: gameStatus.dropped });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              {this.state.gameBoardGrid.map((br) => {
                return (
                  <div className="row p-0 m-0" key={uniqid()}>
                    {br.map((block) => {
                      return (
                        <div
                          className="col-auto p-0 m-0"
                          key={uniqid()}
                          onClick={this.onBlockClick.bind(this)}
                          onMouseDown={this.mouseDown.bind(this)}
                          onMouseLeave={this.mouseLeave.bind(this)}
                          onMouseOver={this.mouseEnter.bind(this)}
                          onMouseUp={this.mouseUp.bind(this)}
                        >
                          <BlockUI block={block} />
                        </div>
                      );
                    })}
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
