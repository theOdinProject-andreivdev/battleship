import blockType from "../util/blockType";

function BlockUI(props) {
  let blocktype = "";
  let block = props.block;
  switch (props.block.type) {
    case "H":
      blocktype = "btn-primary";
      break;
    case "B":
      blocktype = "btn-secondary";
      break;
    case "_":
      blocktype = "btn-light";
      break;
    case "X":
      blocktype = "btn-danger";
      break;
    case "Y":
      blocktype = "btn-warning";
      break;
    default:
      break;
  }

  if (
    props.visible === false &&
    props.block.type !== blockType.HIT &&
    props.block.type !== blockType.HITMISS
  )
    blocktype = "btn-light";

  return (
    <div
      className={`${blocktype} ${block.x} ${block.y}`}
      style={{
        border: "1px solid darkgrey",
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
