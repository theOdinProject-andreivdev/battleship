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
    plane.getBlocks().forEach((pb) => {
      if (
        pb.x < 0 ||
        pb.x > boardSize - 1 ||
        pb.y < 0 ||
        pb.y > boardSize - 1
      ) {
        if (pb.type === blockType.HEAD || pb.type === blockType.BODY) {
          success = false;
        }
      }
    });

    getBlocks().forEach((b) => {
      plane.getBlocks().forEach((pb) => {
        if (b.x === pb.x && b.y === pb.y) {
          if (
            (b.type === blockType.HEAD || b.type === blockType.BODY) &&
            (pb.type === blockType.HEAD || pb.type === blockType.BODY)
          ) {
            success = false;
          }
        }
      });
    });

    if (success) {
      planes.push(plane);
      updateBoard();
    }
    return success;
  };

  const updateBoard = () => {
    getBlocks().forEach((b) => {
      if (b.type !== blockType.HIT && b.type !== blockType.HITMISS)
        b.type = blockType.NOT_DEFINED;
    });
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

    if (newSelectedPlane !== selectedPlane && newSelectedPlane !== undefined) {
      selectedPlane = newSelectedPlane;
    }
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
    plane.rotate();

    planes.forEach((eachPlane) => {
      eachPlane.getBlocks().forEach((eachpb) => {
        planes.forEach((otherPlane) => {
          if (eachPlane !== otherPlane)
            otherPlane.getBlocks().forEach((otherpb) => {
              if (
                eachpb.x === otherpb.x &&
                eachpb.y === otherpb.y &&
                ((eachpb.type === blockType.BODY &&
                  otherpb.type === blockType.BODY) ||
                  (eachpb.type === blockType.HEAD &&
                    otherpb.type === blockType.HEAD) ||
                  (eachpb.type === blockType.HEAD &&
                    otherpb.type === blockType.BODY) ||
                  (eachpb.type === blockType.BODY &&
                    otherpb.type === blockType.HEAD))
              ) {
                plane.rotate();
                plane.rotate();
                plane.rotate();
              }
            });
        });
      });
    });

    plane.getBlocks().forEach((pb) => {
      if (
        (pb.x < 0 ||
          pb.x > blocks.length - 1 ||
          pb.y < 0 ||
          pb.y > blocks.length - 1) &&
        (pb.type === blockType.BODY || pb.type === blockType.HEAD)
      ) {
        plane.rotate();
        plane.rotate();
        plane.rotate();
      }
    });

    updateBoard();
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
    getBlocks().forEach((b) => {
      if (b.x === parseInt(hitx) && b.y === parseInt(hity)) {
        b.type = blockType.HITMISS;
      }
    });

    planes.forEach((plane) => {
      plane.hit({ x: hitx, y: hity });
    });

    updateBoard();
  };

  return {
    boardSize,
    getBlocks,
    addPlane,
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
