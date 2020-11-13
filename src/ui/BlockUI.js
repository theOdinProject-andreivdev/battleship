import Gameboard from "../components/Gameboard";
import Plane from "../components/Plane";

function BlockUI(props) {
  let blocktype = "";
  let blocktext = "";
  switch (props.type) {
    case "H":
      blocktype = "btn-primary";
      blocktext = "H";
      break;
    case "B":
      blocktype = "btn-secondary";
      blocktext = "B";
      break;
    case "_":
      blocktype = "btn-light";
      blocktext = "_";
      break;
    case "X":
      blocktype = "btn-danger";
      blocktext = "X";
      break;
  }
  return (
    <div>
      <button
        type="button"
        className={`btn ${blocktype} m-0 p-0`}
        style={{ margin: "0xp", width: "4vh", height: "4vh" }}
      >
        {blocktext}
      </button>
    </div>
  );
}

export default BlockUI;
