import { useState } from "react";
import "./App.css";
import GameboardUI from "./ui/GameboardUI";
import gameStatus from "./util/gameStatus";

function App() {
  let [board1Status, setBoard1Status] = useState(gameStatus.selecting);
  let [board2Status, setBoard2Status] = useState(gameStatus.hidden);

  let onPlayClick = () => {
    console.log("hitting status");
    setBoard1Status(gameStatus.hitting);
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
          <GameboardUI gameStatus={board1Status}></GameboardUI>
          <GameboardUI gameStatus={board2Status}></GameboardUI>
          <button type="button" className="btn btn-dark" onClick={onPlayClick}>
            Play!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
