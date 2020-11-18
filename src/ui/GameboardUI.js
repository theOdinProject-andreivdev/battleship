import Gameboard from "../components/Gameboard";
import Plane from "../components/Plane";
import BlockUI from "./BlockUI";
import uniqid from "uniqid";
import { Component } from "react";
import gameStatus from "../util/gameStatus";
import blockType from "../util/blockType";

class GameboardUI extends Component {
  constructor(props) {
    super(props);
    this.gameBoard = Gameboard();
    this.state = {
      status: props.gameStatus,
      visible: props.visible,
      boardType: props.boardType,
      gameBoardGrid: this.gameBoard.getBlocks(),
    };

    this.clicks = 0;
    this.clickdelay = 400;
    this.mounted = false;

    this.createRandomPlanes();

    this.pubsub = props.pubsub;
    if (this.state.boardType === "player") {
      this.pubsub.unsubscribe("ai");
      this.pubsub.subscribe("ai", (data) => {
        if (data === "aitriggerhit") {
          let unhitBlocks = [];

          this.gameBoard.getBlocks().forEach((block) => {
            if (
              block.type !== blockType.HIT &&
              block.type !== blockType.HITMISS
            )
              unhitBlocks.push(block);
          });

          let randomBlockIndex = Math.floor(Math.random() * unhitBlocks.length);
          this.alreadyHit = false;
          this.gameBoard.getBlocks().forEach((block) => {
            if (
              block.x === unhitBlocks[randomBlockIndex].x &&
              block.y === unhitBlocks[randomBlockIndex].y
            ) {
              this.gameBoard.hit({
                x: block.x,
                y: block.y,
              });
            }
          });

          this.computeAndDeclareWinner("ai");

          if (this.mounted)
            this.setState({ gameBoardGrid: this.gameBoard.getBlocks() });
        }
      });
    }
  }

  computeAndDeclareWinner = (winner) => {
    let anyPlaneAlive = false;
    this.gameBoard.getPlanes().forEach((plane) => {
      if (plane.getDead() === false) {
        anyPlaneAlive = true;
      }
    });
    if (!anyPlaneAlive) this.pubsub.publish("gameEvent", `${winner}win`);
  };

  createRandomPlanes = () => {
    let planes = [];
    let index = 0;

    while (index < 3) {
      planes[index] = Plane({
        x: Math.floor(
          Math.random() * Math.sqrt(this.gameBoard.getBlocks().length)
        ),
        y: Math.floor(
          Math.random() * Math.sqrt(this.gameBoard.getBlocks().length)
        ),
      });
      let planeSet = false;
      while (planeSet === false) {
        planes[index] = null;
        planes[index] = Plane({
          x: Math.floor(
            Math.random() * Math.sqrt(this.gameBoard.getBlocks().length)
          ),
          y: Math.floor(
            Math.random() * Math.sqrt(this.gameBoard.getBlocks().length)
          ),
        });
        planeSet = this.addPlane(planes[index]);

        for (let i = 0; i < Math.random() * 2; i++)
          this.gameBoard.rotate(planes[index]);
      }
      index++;
    }
  };

  componentDidMount() {
    this.mounted = true;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.gameStatus !== this.props.gameStatus) {
      this.setState({ status: this.props.gameStatus });
    }
  }

  addPlane = (plane) => {
    return this.gameBoard.addPlane(plane);
  };

  mouseClick(e) {
    if (this.state.status === gameStatus.locked) return;

    this.gameBoard.hit({
      x: e.target.dataset.x,
      y: e.target.dataset.y,
    });

    this.setState({ gameBoardGrid: this.gameBoard.getBlocks() });
    if (this.state.boardType === "ai") {
      this.pubsub.publish("player", "playerdidhit");
      this.computeAndDeclareWinner("player");
    }
  }

  mouseDown(e) {
    if (this.state.status === gameStatus.locked) return;
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
    if (this.state.status === gameStatus.locked) return;
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
    if (this.state.status === gameStatus.locked) return;
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
    if (this.state.status === gameStatus.locked) return;
    if (this.state.status !== gameStatus.hitting) {
      this.setState({ status: gameStatus.dropped });
    }
  }

  touchStart(e) {
    e.preventDefault();
    const block = document.elementFromPoint(
      e.changedTouches[0].screenX,
      e.changedTouches[0].screenY
    );
    this.gameBoard.selectPlane({
      x: e.target.dataset.x,
      y: e.target.dataset.y,
    });
    this.gameBoard.moveOrigin = {
      x: block.dataset.x,
      y: block.dataset.y,
    };

    console.log(e);
  }

  touchEnd(e) {
    e.preventDefault();
    const block = document.elementFromPoint(
      e.changedTouches[0].screenX,
      e.changedTouches[0].screenY
    );
    this.gameBoard.moveSelectedPlane(this.gameBoard.moveOrigin, {
      x: block.dataset.x,
      y: block.dataset.y,
    });

    this.setState({ gameBoardGrid: this.gameBoard.getBlocks() });

    this.forceUpdate();
    console.log(e);
  }

  touchMove(e) {}

  render() {
    return (
      <div onTouchMove={this.touchMove.bind(this)} className="container">
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
                  onTouchStart={this.touchStart.bind(this)}
                  onTouchEnd={this.touchEnd.bind(this)}
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
