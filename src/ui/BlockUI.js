import Gameboard from "../components/Gameboard";
import Plane from "../components/Plane";

function BlockUI(props) {
  let blocktype = "";
  let blocktext = "";
  let block = props.block;
  switch (props.block.type) {
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
      {/*       <button
        type="button"
        className={`btn ${blocktype} m-0 p-1 ${block.x} ${block.y}`}
        style={{ margin: "0xp", width: "1.5rem", height: "1.5rem" }}
        data-x={block.x}
        data-y={block.y}
      >
      </button> */}

      <div
        className={`${blocktype} ${block.x} ${block.y}`}
        style={{
          width: "30px",
          height: "30px",
          border: "1px solid black",
          margin: "0px",
        }}
        data-x={block.x}
        data-y={block.y}
      ></div>
    </div>
  );
}

export default BlockUI;
