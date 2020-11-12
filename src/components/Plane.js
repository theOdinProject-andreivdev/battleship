const Plane = ({ x: headx, y: heady }) => {
  let head = { x: headx, y: heady };
  let dead = false;

  const blockStatus = {
    HEAD: 0,
    BODY: 1,
    AIR: 2,
    HIT: 3,
  };
  let blocks = [
    [
      { x: head.x - 1, y: head.y, type: blockStatus.AIR },
      { x: head.x, y: head.y, type: blockStatus.HEAD },
      { x: head.x + 1, y: head.y, type: blockStatus.AIR },
      { x: head.x + 2, y: head.y, type: blockStatus.AIR },
    ],
    [
      { x: head.x - 1, y: head.y - 1, type: blockStatus.BODY },
      { x: head.x, y: head.y - 1, type: blockStatus.BODY },
      { x: head.x + 1, y: head.y - 1, type: blockStatus.BODY },
      { x: head.x + 2, y: head.y - 1, type: blockStatus.AIR },
    ],
    [
      { x: head.x - 1, y: head.y - 2, type: blockStatus.AIR },
      { x: head.x, y: head.y - 2, type: blockStatus.BODY },
      { x: head.x + 1, y: head.y - 2, type: blockStatus.AIR },
      { x: head.x + 2, y: head.y - 2, type: blockStatus.AIR },
    ],
    [
      { x: head.x - 1, y: head.y - 3, type: blockStatus.BODY },
      { x: head.x, y: head.y - 3, type: blockStatus.BODY },
      { x: head.x + 1, y: head.y - 3, type: blockStatus.BODY },
      { x: head.x + 2, y: head.y - 3, type: blockStatus.AIR },
    ],
  ];

  const hit = ({ x: hitx, y: hity }) => {
    dead = true;

    let headHit = false;
    if (hitx == head.x && hity == head.y) headHit = true;

    blocks.forEach((blockLine) => {
      blockLine.forEach((block) => {
        if (block.x == hitx && block.y == hity) {
          block.type = blockStatus.HIT;
        }
        if (headHit && block.type != blockStatus.AIR)
          block.type = blockStatus.HIT;

        if (block.type == blockStatus.HEAD || block.type == blockStatus.BODY)
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
        if (tmpblocks[i][j].type == blockStatus.HEAD) {
          head = { x: tmpblocks[i][j].x, y: tmpblocks[i][j].y };
        }
      }
    }

    blocks.splice(0, blocks.length, ...tmpblocks);
  };

  const getDead = () => {
    return dead;
  };
  return { head, blocks, hit, rotate, getDead, blockStatus };
};

export default Plane;
