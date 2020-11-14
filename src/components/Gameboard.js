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
    plane.getBlocks().forEach((pb) => {
      if (
        pb.x < 0 ||
        pb.x > boardSize - 1 ||
        pb.y < 0 ||
        pb.y > boardSize - 1
      ) {
        if (pb.type === blockType.HEAD || pb.type === blockType.BODY) {
          outOfPlane = true;
          success = false;
        }
      }
    });

    let collision = false;
    getBlocks().forEach((b) => {
      plane.getBlocks().forEach((pb) => {
        if (b.x === pb.x && b.y === pb.y) {
          if (
            (b.type === blockType.HEAD || b.type === blockType.BODY) &&
            (pb.type === blockType.HEAD || pb.type === blockType.BODY)
          ) {
            collision = true;
            success = false;
          }
        }
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
      getBlocks().forEach((b) => {
        plane.getBlocks().forEach((pb) => {
          if (b.x === pb.x && b.y === pb.y) {
            if (
              pb.type === blockType.HEAD ||
              pb.type === blockType.BODY ||
              pb.type === blockType.HIT
            )
              b.type = pb.type;
          }
        });
      });
    });
  };

  const removePlane = (plane) => {
    planes.forEach((pl) => {
      if (pl === plane) {
        getBlocks().forEach((b) => {
          pl.getBlocks().forEach((pb) => {
            if (b.x === pb.x && b.y === pb.y) {
              if (
                (b.type === blockType.BODY || b.type === blockType.HEAD) &&
                (pb.type === blockType.BODY || pb.type === blockType.HEAD)
              ) {
                pb = null;
                b.type = blockType.NOT_DEFINED;
              }
            }
          });
        });
      }
    });

    for (let i = 0; i < planes.length; i++) {
      if (planes[i].head === plane.head) planes.splice(i, 1);
    }
  };

  let moveOrigin = { x: 0, y: 0 };

  let selectedPlane;

  const selectPlane = ({ x: xorg, y: yorg }) => {
    let newSelectedPlane;
    planes.forEach((plane) => {
      plane.getBlocks().forEach((pb) => {
        if (pb.x === parseInt(xorg) && pb.y === parseInt(yorg))
          newSelectedPlane = plane;
      });
    });

    if (newSelectedPlane !== selectedPlane && newSelectedPlane !== undefined)
      selectedPlane = newSelectedPlane;
  };

  const moveSelectedPlane = ({ x: xorg, y: yorg }, { x: xdest, y: ydest }) => {
    let xdelta = xdest - xorg;
    let ydelta = ydest - yorg;

    let movable = true;

    if (selectedPlane !== undefined) {
      selectedPlane.getBlocks().forEach((pb) => {
        if (
          (pb.x + xdelta < 0 ||
            pb.x + xdelta > blocks.length - 1 ||
            pb.y + ydelta < 0 ||
            pb.y + ydelta > blocks.length - 1) &&
          (pb.type === blockType.BODY || pb.type === blockType.HEAD)
        ) {
          movable = false;
        }
      });

      planes.forEach((everyPlane) => {
        if (everyPlane !== selectedPlane) {
          everyPlane.getBlocks().forEach((epb) => {
            selectedPlane.getBlocks().forEach((pb) => {
              if (
                (epb.type === blockType.HEAD || epb.type === blockType.BODY) &&
                (pb.type === blockType.HEAD || pb.type === blockType.BODY)
              ) {
                if (epb.x === pb.x + xdelta && epb.y === pb.y + ydelta)
                  movable = false;
              }
            });
          });
        }
      });

      if (movable) {
        getBlocks().forEach((b) => {
          selectedPlane.getBlocks().forEach((pb) => {
            if (b.x === pb.x && b.y === pb.y) b.type = blockType.NOT_DEFINED;
          });
        });

        selectedPlane.move(xdelta, ydelta);
        updateBoard();
      }
    }
  };

  const rotate = (plane) => {
    removePlane(plane);
    plane.rotate();
    let success = addPlane(plane);
    return success;
  };

  const getBlocks = () => {
    let tmpblocks = [];

    blocks.forEach((br) => {
      br.forEach((block) => {
        tmpblocks.push(block);
      });
    });

    return [...tmpblocks];
  };

  const getPlanes = () => {
    return planes;
  };

  const getSelectedPlane = () => {
    return selectedPlane;
  };
  const hit = ({ x: hitx, y: hity }) => {
    planes.forEach((plane) => {
      plane.hit({ x: hitx, y: hity });
    });

    blocks.forEach((br) => {
      br.forEach((b) => {
        if (b.x === parseInt(hitx) && b.y === parseInt(hity)) {
          b.type = blockType.HIT;
        }
      });
    });

    updateBoard();
  };

  return {
    boardSize,
    getBlocks,
    addPlane,
    removePlane,
    getPlanes,
    rotate,
    hit,
    moveSelectedPlane,
    moveOrigin,
    selectPlane,
    getSelectedPlane,
  };
};

export default Gameboard;
