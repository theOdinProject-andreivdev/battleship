import blockType from "../util/blockType";

const Gameboard = () => {
  const boardSize = 10;
  let blocks = [];
  let planes = [];

  for (let i = boardSize - 1; i >= 0; i--) {
    let row = [];
    for (let j = 0; j < boardSize; j++) {
      row.push({ x: j, y: i, type: blockType.NOT_DEFINED });
    }
    blocks.push(row);
  }

  const addPlane = (plane) => {
    let success = true;
    let outOfPlane = false;
    plane.getBlocks().forEach((pbr) => {
      pbr.forEach((pb) => {
        if (
          pb.x < 0 ||
          pb.x > boardSize - 1 ||
          pb.y < 0 ||
          pb.y > boardSize - 1
        ) {
          if (pb.type == blockType.HEAD || pb.type == blockType.BODY) {
            outOfPlane = true;
            success = false;
          }
        }
      });
    });

    let collision = false;
    blocks.forEach((br) => {
      br.forEach((b) => {
        plane.getBlocks().forEach((pbr) => {
          pbr.forEach((pb) => {
            if (b.x == pb.x && b.y == pb.y) {
              if (
                (b.type == blockType.HEAD || b.type == blockType.BODY) &&
                (pb.type == blockType.HEAD || pb.type == blockType.BODY)
              ) {
                collision = true;
                success = false;
              }
            }
          });
        });
      });
    });

    if (outOfPlane === false && collision === false) {
      planes.push(plane);
      updateBoard();
    }

    return success;
  };

  const updateBoard = () => {
    planes.forEach((plane) => {
      blocks.forEach((br) => {
        br.forEach((b) => {
          plane.getBlocks().forEach((pbr) => {
            pbr.forEach((pb) => {
              if (b.x == pb.x && b.y == pb.y) {
                if (pb.type == blockType.HEAD || pb.type == blockType.BODY)
                  b.type = pb.type;
              }
            });
          });
        });
      });
    });
  };

  const removePlane = (plane) => {
    planes.forEach((pl) => {
      if (pl === plane) {
        blocks.forEach((br) => {
          br.forEach((b) => {
            pl.getBlocks().forEach((pbr) => {
              pbr.forEach((pb) => {
                if (b.x == pb.x && b.y == pb.y) {
                  if (
                    (b.type == blockType.BODY || b.type == blockType.HEAD) &&
                    (pb.type == blockType.BODY || pb.type == blockType.HEAD)
                  )
                    b.type = blockType.NOT_DEFINED;
                }
              });
            });
          });
        });
      }
    });

    for (let i = 0; i < planes.length; i++) {
      if (planes[i].head == plane.head) planes.splice(i, 1);
    }
  };

  const rotate = (plane) => {
    removePlane(plane);
    plane.rotate();
    let success = addPlane(plane);
    return success;
  };

  const getBlocks = () => {
    return blocks;
  };

  const getPlanes = () => {
    return planes;
  };
  return { boardSize, getBlocks, addPlane, removePlane, getPlanes, rotate };
};

export default Gameboard;
