import blockType from "../util/blockType";

const Plane = ({ x: headx, y: heady }) => {
  let head = { x: headx, y: heady };
  let dead = false;

  let blocks = [
    [
      { x: head.x - 1, y: head.y, type: blockType.NOT_DEFINED },
      { x: head.x, y: head.y, type: blockType.HEAD },
      { x: head.x + 1, y: head.y, type: blockType.NOT_DEFINED },
      { x: head.x + 2, y: head.y, type: blockType.NOT_DEFINED },
    ],
    [
      { x: head.x - 1, y: head.y + 1, type: blockType.BODY },
      { x: head.x, y: head.y + 1, type: blockType.BODY },
      { x: head.x + 1, y: head.y + 1, type: blockType.BODY },
      { x: head.x + 2, y: head.y + 1, type: blockType.NOT_DEFINED },
    ],
    [
      { x: head.x - 1, y: head.y + 2, type: blockType.NOT_DEFINED },
      { x: head.x, y: head.y + 2, type: blockType.BODY },
      { x: head.x + 1, y: head.y + 2, type: blockType.NOT_DEFINED },
      { x: head.x + 2, y: head.y + 2, type: blockType.NOT_DEFINED },
    ],
    [
      { x: head.x - 1, y: head.y + 3, type: blockType.BODY },
      { x: head.x, y: head.y + 3, type: blockType.BODY },
      { x: head.x + 1, y: head.y + 3, type: blockType.BODY },
      { x: head.x + 2, y: head.y + 3, type: blockType.NOT_DEFINED },
    ],
  ];

  const hit = ({ x: hitx, y: hity }) => {
    dead = true;

    let headHit = false;
    if (parseInt(hitx) == head.x && parseInt(hity) == head.y) headHit = true;

    blocks.forEach((blockLine) => {
      blockLine.forEach((block) => {
        if (
          block.x === parseInt(hitx) &&
          block.y === parseInt(hity) &&
          (block.type === blockType.BODY || block.type === blockType.HEAD)
        ) {
          block.type = blockType.HIT;
        }
        if (headHit && block.type === blockType.BODY)
          block.type = blockType.HIT;

        if (block.type === blockType.HEAD || block.type === blockType.BODY)
          dead = false;
      });
    });
  };

  const rotate = () => {
    let tmpblocks = [
      [
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
      ],
      [
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
      ],
      [
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
      ],
      [
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
      ],
    ];

    for (let i = 0; i < blocks.length; i++) {
      for (let j = 0; j < blocks.length; j++) {
        tmpblocks[i][j].x = blocks[i][j].x;
        tmpblocks[i][j].y = blocks[i][j].y;
        tmpblocks[i][j].type = blocks[blocks.length - j - 1][i].type;
        if (tmpblocks[i][j].type === blockType.HEAD) {
          head = { x: tmpblocks[i][j].x, y: tmpblocks[i][j].y };
        }
      }
    }

    blocks.splice(0, blocks.length, ...tmpblocks);
  };

  const move = (xdelta, ydelta) => {
    let tmpblocks = [
      [
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
      ],
      [
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
      ],
      [
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
      ],
      [
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
        { x: 0, y: 0, type: 0 },
      ],
    ];

    for (let i = 0; i < blocks.length; i++) {
      for (let j = 0; j < blocks.length; j++) {
        tmpblocks[i][j].x = blocks[i][j].x + parseInt(xdelta);
        tmpblocks[i][j].y = blocks[i][j].y + parseInt(ydelta);
        tmpblocks[i][j].type = blocks[i][j].type;
      }
    }

    blocks.splice(0, blocks.length, ...tmpblocks);
  };

  const getDead = () => {
    return dead;
  };

  const getHead = () => {
    return head;
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
  return { getHead, getBlocks, hit, rotate, getDead, blockType, move };
};

export default Plane;
