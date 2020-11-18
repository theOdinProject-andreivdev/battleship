import { Component, useEffect, useState } from "react";
import "./App.css";
import GameboardUI from "./ui/GameboardUI";
import gameStatus from "./util/gameStatus";
import PubSub from "pubsub-js";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();

    console.log("startup");
    this.board1Status = gameStatus.selecting;
    this.board2Status = gameStatus.locked;
    this.winner = "";

    let gameEventsSubscriber = function (msg, data) {
      if (msg == "gameEvent" && data == "player did hit") {
        if (this.board2Status == gameStatus.hitting) {
          this.board1Status = gameStatus.locked;
          PubSub.publish("gameEvent", "ai trigger hit");
        }
      }
      if (msg == "gameEvent" && data == "player win") {
        this.winner = "player";
        this.board1Status = gameStatus.locked;
        this.board2Status = gameStatus.locked;
        this.forceUpdate();
      }
      if (msg == "gameEvent" && data == "ai win") {
        this.winner = "ai";
        this.board1Status = gameStatus.locked;
        this.board2Status = gameStatus.locked;
        this.forceUpdate();
      }
    };
    PubSub.clearAllSubscriptions();

    PubSub.subscribe("gameEvent", gameEventsSubscriber.bind(this));

    PubSub.publish("gameEvent", "start");
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
            {this.board1Status == gameStatus.selecting && (
              <div>
                <div
                  className="alert alert-primary"
                  role="alert"
                  style={{
                    width: "50%",
                    marginLeft: "25%",
                    marginRight: "25%",
                  }}
                >
                  Place the planes!
                </div>
                <div
                  className="alert alert-info"
                  role="alert"
                  style={{
                    width: "50%",
                    marginLeft: "25%",
                    marginRight: "25%",
                  }}
                >
                  Drag them around, double click to rotate
                </div>
              </div>
            )}

            {this.winner == "player" && (
              <div>
                <div
                  className="alert alert-primary"
                  role="alert"
                  style={{
                    width: "50%",
                    marginLeft: "25%",
                    marginRight: "25%",
                  }}
                >
                  YOU WON!
                </div>
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <button
                      type="button"
                      className="btn btn-dark m-3"
                      onClick={this.onPlayAgain.bind(this)}
                    >
                      Play again!
                    </button>
                  </div>
                </div>
              </div>
            )}

            {this.winner == "ai" && (
              <div>
                <div
                  className="alert alert-primary"
                  role="alert"
                  style={{
                    width: "50%",
                    marginLeft: "25%",
                    marginRight: "25%",
                  }}
                >
                  YOU LOST!
                </div>
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <button
                      type="button"
                      className="btn btn-dark m-3"
                      onClick={this.onPlayAgain.bind(this)}
                    >
                      Play again!
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-auto mx-auto">
                  <GameboardUI
                    gameStatus={this.board1Status}
                    visible={true}
                    type="player"
                  ></GameboardUI>
                </div>
                <div className="col-auto mx-auto">
                  <GameboardUI
                    gameStatus={this.board2Status}
                    visible={true}
                    type="ai"
                  ></GameboardUI>
                </div>
              </div>
              {this.board1Status == gameStatus.selecting && (
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <button
                      type="button"
                      className="btn btn-dark m-3"
                      onClick={this.onPlayClick.bind(this)}
                    >
                      Play!
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
