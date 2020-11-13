function drawBlocks(blocks) {
  let str = "";

  for (let i = 0; i < blocks.length; i++) {
    str = str.concat("\n");
    for (let j = 0; j < blocks.length; j++) {
      str = str.concat("x=" + blocks[i][j].x + " " + "y=" + blocks[i][j].y);
      str = str.concat("  " + blocks[i][j].type);
      str = str.concat("   |   ");
    }
  }
  console.log(str);
  return str;
}

export default drawBlocks;
