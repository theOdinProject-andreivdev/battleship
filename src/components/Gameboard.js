import blockType from "../util/blockType";

const Gameboard = () => {
  const boardSize = 10;
  let blocks = [];

  for (let i = 0; i < boardSize; i++) {
    let row = [];
    for (let j = 0; j < boardSize; j++) {
      row.push({ x: j, y: i, type: blockType.NOT_DEFINED });
    }
    blocks.push(row);
  }

  const getBlocks = () => {
    return blocks;
  };

  return { boardSize, getBlocks };
};

export default Gameboard;
