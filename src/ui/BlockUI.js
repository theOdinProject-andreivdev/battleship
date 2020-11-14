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
    <div
      className={`${blocktype} ${block.x} ${block.y}`}
      style={{
        border: "1px solid black",
        margin: "0px",
        width: "100%",
        height: "100%",
      }}
      data-x={block.x}
      data-y={block.y}
    ></div>
  );
}

export default BlockUI;
