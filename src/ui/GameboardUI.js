import Gameboard from "../components/Gameboard";
import Plane from "../components/Plane";
import BlockUI from "./BlockUI";
import uniqid from "uniqid";
import { Component } from "react";
import gameStatus from "../util/gameStatus";
import PubSub from "pubsub-js";
import blockType from "../util/blockType";

class GameboardUI extends Component {
  constructor(props) {
    super(props);
    this.gameBoard = Gameboard();
    this.state = {
      status: props.gameStatus,
      visible: props.visible,
      type: props.type,
      gameBoardGrid: this.gameBoard.getBlocks(),
    };

    const plane1 = Plane({ x: 2, y: 2 });
    this.addPlane(plane1);

    const plane2 = Plane({ x: 5, y: 5 });
    this.addPlane(plane2);

    const plane3 = Plane({ x: 7, y: 1 });
    this.addPlane(plane3);

    this.clicks = 0;
    this.clickdelay = 400;
    this.mounted = false;

    var gameEventsSubscriber = function (msg, data) {
      if (this.state.type == "player")
        switch (data) {
          case "ai trigger hit":
            let unhitBlocks = [];

            this.gameBoard.getBlocks().forEach((block) => {
              if (block.type != blockType.HIT) unhitBlocks.push(block);
            });

            let randomBlockIndex = Math.floor(
              Math.random() * unhitBlocks.length
            );

            this.gameBoard.hit({
              x: this.gameBoard.getBlocks()[randomBlockIndex].x,
              y: this.gameBoard.getBlocks()[randomBlockIndex].y,
            });

            if (this.mounted)
              this.setState({ gameBoardGrid: this.gameBoard.getBlocks() });
        }
    };

    PubSub.subscribe("gameEvent", gameEventsSubscriber.bind(this));
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.gameStatus !== this.props.gameStatus) {
      this.setState({ status: this.props.gameStatus });
    }
  }

  addPlane = (plane) => {
    this.gameBoard.addPlane(plane);
  };

  mouseClick(e) {
    if (this.state.status == gameStatus.locked) return;

    this.gameBoard.hit({
      x: e.target.dataset.x,
      y: e.target.dataset.y,
    });

    this.setState({ gameBoardGrid: this.gameBoard.getBlocks() });
    if (this.state.type == "ai") {
      PubSub.publish("gameEvent", "player did hit");

      let anyPlaneAlive = false;
      this.gameBoard.getPlanes().forEach((plane) => {
        if (plane.getDead() == false) {
          anyPlaneAlive = true;
        }
      });

      if (!anyPlaneAlive) PubSub.publish("gameEvent", "player win");
    }
  }

  mouseDown(e) {
    if (this.state.status == gameStatus.locked) return;
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
    if (this.state.status == gameStatus.locked) return;
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
    if (this.state.status == gameStatus.locked) return;
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
    if (this.state.status == gameStatus.locked) return;
    if (this.state.status !== gameStatus.hitting) {
      this.setState({ status: gameStatus.dropped });
    }
  }

  render() {
    return (
      <div className="container">
        <div
          className="card"
          style={{
            width: "240px",
            height: "240px",
          }}
        >
          <div
            className="card-body"
            style={{
              position: "relative",
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
                >
                  <BlockUI block={block} visible={this.state.visible} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default GameboardUI;
