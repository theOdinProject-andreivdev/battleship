import { useState } from "react";
import "./App.css";
import GameboardUI from "./ui/GameboardUI";
import gameStatus from "./util/gameStatus";

function App() {
  let [board1Status, setBoard1Status] = useState(gameStatus.selecting);
  let [board2Status, setBoard2Status] = useState(gameStatus.hidden);

  let onPlayClick = () => {
    console.log("hitting status");
    setBoard2Status(gameStatus.hitting);
    setBoard1Status(gameStatus.locked);
  };

  return (
    <div>
      <div className="card" style={{ width: "100%" }}>
        <div className="card-body">
          {board1Status == gameStatus.selecting && (
            <div
              className="alert alert-info"
              role="alert"
              style={{ width: "50%", marginLeft: "25%", marginRight: "25%" }}
            >
              Place the planes!
            </div>
          )}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-auto mx-auto">
                <GameboardUI
                  gameStatus={board1Status}
                  visible={true}
                ></GameboardUI>
              </div>
              <div className="col-auto mx-auto">
                <GameboardUI
                  gameStatus={board2Status}
                  visible={false}
                ></GameboardUI>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-dark m-3"
                  onClick={onPlayClick}
                >
                  Play!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
