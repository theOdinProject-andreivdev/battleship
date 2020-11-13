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
      selectedPlane: {},
    };

    const plane1 = Plane({ x: 2, y: 2 });
    this.gameBoard.addPlane(plane1);
  }

  onBlockClick(e) {
    /*  e.preventDefault();
    console.log("click");
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
      this.state.status == gameStatus.selecting ||
      this.state.status == gameStatus.dropped
    ) {
      console.log(
        "selected x:" + e.target.dataset.x + " y:" + e.target.dataset.y
      );
      console.log(e.target.dataset.x + " " + e.target.dataset.y);

      this.gameBoard.getPlanes().forEach((plane) => {
        plane.getBlocks().forEach((pbr) => {
          pbr.forEach((pb) => {
            if (
              pb.x == e.target.dataset.x &&
              pb.y == e.target.dataset.y &&
              (pb.type == blockType.HEAD || pb.type == blockType.BODY)
            ) {
              this.setState({ selectedPlane: plane });
              this.setState({ status: gameStatus.moving });
            }
          });
        });
      });
      //console.log(drawBlocks(this.gameBoard.getBlocks()));
    }
  }

  mouseLeave(e) {
    if (
      this.state.status == gameStatus.moving ||
      this.state.status == gameStatus.movingin
    ) {
      console.log("leave x:" + e.target.dataset.x + " y:" + e.target.dataset.y);
      this.gameBoard.removePlane(this.state.selectedPlane);
      this.setState({ gameBoardGrid: this.gameBoard.getBlocks() });
      this.setState({ status: gameStatus.movingout });
      //console.log(drawBlocks(this.gameBoard.getBlocks()));
    }
  }

  mouseEnter(e) {
    if (this.state.status == gameStatus.movingout) {
      console.log("enter x:" + e.target.dataset.x + " y:" + e.target.dataset.y);
      const plane = Plane({
        x: parseInt(e.target.dataset.x),
        y: parseInt(e.target.dataset.y),
      });
      this.setState({ selectedPlane: plane });
      this.gameBoard.addPlane(plane);
      this.setState({ gameBoardGrid: this.gameBoard.getBlocks() });
      this.setState({ status: gameStatus.movingin });
      //console.log(drawBlocks(this.gameBoard.getBlocks()));
    }
  }

  mouseUp(e) {
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
