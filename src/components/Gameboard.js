import blockType from "../util/blockType";

const Gameboard = () => {
  const boardSize = 10;
  let blocks = [];
  let planes = [];

  for (let i = 0; i < boardSize; i++) {
    let row = [];
    for (let j = 0; j < boardSize; j++) {
      row.push({ x: j, y: i, type: blockType.NOT_DEFINED });
    }
    blocks.push(row);
  }

  const addPlane = (plane) => {
    let outOfPlane = false;
    plane.getBlocks().forEach((pbr) => {
      pbr.forEach((pb) => {
        if (
          pb.x < 0 ||
          pb.x > boardSize - 1 ||
          pb.y < 0 ||
          pb.y > boardSize - 1
        )
          outOfPlane = true;
      });
    });

    let collision = false;
    blocks.forEach((br) => {
      br.forEach((b) => {
        plane.getBlocks().forEach((pbr) => {
          pbr.forEach((pb) => {
            if (b.x == pb.x && b.y == pb.y) {
              if (b.type == blockType.HEAD || b.type == blockType.BODY) {
                collision = true;
              }
            }
          });
        });
      });
    });

    if (outOfPlane === false && collision === false) {
      planes.push(plane);
      blocks.forEach((br) => {
        br.forEach((b) => {
          plane.getBlocks().forEach((pbr) => {
            pbr.forEach((pb) => {
              if (b.x == pb.x && b.y == pb.y) {
                b.type = pb.type;
              }
            });
          });
        });
      });
    }
  };

  const getBlocks = () => {
    return blocks;
  };

  const getPlanes = () => {
    return planes;
  };
  return { boardSize, getBlocks, addPlane, getPlanes };
};

export default Gameboard;
