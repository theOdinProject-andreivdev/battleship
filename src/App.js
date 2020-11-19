import { Component } from "react";
import "./App.css";
import GameboardUI from "./ui/GameboardUI";
import gameStatus from "./util/gameStatus";
import PubSub from "PubSub";

class App extends Component {
  constructor() {
    super();

    console.log("startup");
    this.board1Status = gameStatus.selecting;
    this.board2Status = gameStatus.locked;
    this.winner = "";

    this.pubsub = new PubSub();

    this.pubsub.subscribe("gameEvent", (data) => {
      if (data === "playerwin") {
        this.winner = "player";
        this.board1Status = gameStatus.locked;
        this.board2Status = gameStatus.locked;
        this.forceUpdate();
      }
      if (data === "aiwin") {
        this.winner = "ai";
        this.board1Status = gameStatus.locked;
        this.board2Status = gameStatus.locked;
        this.forceUpdate();
      }
    });

    this.pubsub.subscribe("player", (data) => {
      if (data === "playerdidhit") {
        if (this.board2Status === gameStatus.hitting) {
          this.board1Status = gameStatus.locked;
          this.pubsub.publish("ai", "aitriggerhit");
        }
      }
    });

    this.pubsub.publish("gameEvent", "start");
  }

  onPlayClick = () => {
    console.log("hitting status");
    this.board2Status = gameStatus.hitting;
    this.board1Status = gameStatus.locked;
    this.forceUpdate();
  };

  onPlayAgain = () => {
    window.location.reload(false);
  };

  render() {
    return (
      <div>
        <div className="card" style={{ width: "100%" }}>
          <div className="card-body">
            {this.board1Status === gameStatus.selecting && (
              <div>
                <div
                  className="alert alert-primary"
                  role="alert"
                  style={{
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  Place the planes!
                </div>
                <div
                  className="alert alert-info"
                  role="alert"
                  style={{
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  Drag them around, double click to rotate
                </div>
              </div>
            )}

            {this.board1Status === gameStatus.selecting && (
              <div>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={this.onPlayClick.bind(this)}
                  style={{
                    width: "50%",
                    marginLeft: "25%",
                    marginRight: "25%",
                  }}
                >
                  Play!
                </button>
              </div>
            )}

            {this.winner === "player" && (
              <div
                className="alert alert-success"
                role="alert"
                style={{
                  width: "50%",
                  marginLeft: "25%",
                  marginRight: "25%",
                  textAlign: "center",
                }}
              >
                YOU WON!
              </div>
            )}

            {this.winner === "ai" && (
              <div
                className="alert alert-danger"
                role="alert"
                style={{
                  width: "50%",
                  marginLeft: "25%",
                  marginRight: "25%",
                  textAlign: "center",
                }}
              >
                YOU LOST!
              </div>
            )}

            {(this.winner === "ai" || this.winner === "player") && (
              <button
                type="button"
                className="btn btn-dark"
                onClick={this.onPlayAgain.bind(this)}
                style={{
                  width: "50%",
                  marginLeft: "25%",
                  marginRight: "25%",
                }}
              >
                Play again!
              </button>
            )}

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-auto mx-auto" style={{ marginTop: "10px" }}>
                  <GameboardUI
                    gameStatus={this.board1Status}
                    visible={true}
                    boardType="player"
                    pubsub={this.pubsub}
                  ></GameboardUI>
                </div>

                <div className="col-auto mx-auto" style={{ marginTop: "10px" }}>
                  {this.board1Status !== gameStatus.selecting && (
                    <GameboardUI
                      gameStatus={this.board2Status}
                      visible={true}
                      boardType="ai"
                      pubsub={this.pubsub}
                    ></GameboardUI>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
