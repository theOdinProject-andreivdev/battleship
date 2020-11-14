import "./App.css";
import GameboardUI from "./ui/GameboardUI";

function App() {
  return (
    <div>
      <div class="card" style={{ width: "100%" }}>
        <div class="card-body">
          <GameboardUI></GameboardUI>
        </div>
      </div>
    </div>
  );
}

export default App;
