import Gameboard from "../components/Gameboard";
import Plane from "../components/Plane";
import BlockUI from "./BlockUI";
import uniqid from "uniqid";
import { Component, useEffect, useState } from "react";
import drawBlocks from "../util/drawBlocks";
import { render } from "@testing-library/react";

class GameboardUI extends Component {
  constructor(props) {
    super(props);
    console.log("Load UI");
    this.gameBoard = Gameboard();
    this.state = { gameBoardGrid: this.gameBoard.getBlocks() };

    const plane1 = Plane({ x: 2, y: 2 });
    const plane2 = Plane({ x: 5, y: 5 });
    this.gameBoard.addPlane(plane1);
    this.gameBoard.addPlane(plane2);
  }

  onBlockClick(e) {
    e.preventDefault();
    this.gameBoard.hit({ x: e.target.dataset.x, y: e.target.dataset.y });
    this.setState({ gameBoardGrid: this.gameBoard.getBlocks() });
  }

  render() {
    return (
      <div>
        <table className="table table-responsive">
          <tbody>
            {this.state.gameBoardGrid.map((br) => {
              return (
                <tr key={uniqid()}>
                  {br.map((block) => {
                    return (
                      <td key={uniqid()} onClick={this.onBlockClick.bind(this)}>
                        <BlockUI block={block} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GameboardUI;
