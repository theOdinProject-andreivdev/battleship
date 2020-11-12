const Plane = ({ x: headx, y: heady }) => {
  let head = { x: headx, y: heady };

  let blocks = [
    [
      { x: head.x - 1, y: head.y, type: 2 },
      { x: head.x, y: head.y, type: 0 },
      { x: head.x + 1, y: head.y, type: 2 },
      { x: head.x + 2, y: head.y, type: 2 },
    ],
    [
      { x: head.x - 1, y: head.y - 1, type: 1 },
      { x: head.x, y: head.y - 1, type: 1 },
      { x: head.x + 1, y: head.y - 1, type: 1 },
      { x: head.x + 2, y: head.y - 1, type: 2 },
    ],
    [
      { x: head.x - 1, y: head.y - 2, type: 2 },
      { x: head.x, y: head.y - 2, type: 1 },
      { x: head.x + 1, y: head.y - 2, type: 2 },
      { x: head.x + 2, y: head.y - 2, type: 2 },
    ],
    [
      { x: head.x - 1, y: head.y - 3, type: 1 },
      { x: head.x, y: head.y - 3, type: 1 },
      { x: head.x + 1, y: head.y - 3, type: 1 },
      { x: head.x + 2, y: head.y - 3, type: 2 },
    ],
  ];

  const hit = ({ x: hitx, y: hity }) => {
    let headHit = false;
    if (hitx == head.x && hity == head.y) headHit = true;

    blocks.forEach((blockLine) => {
      blockLine.forEach((block) => {
        if (block.x == hitx && block.y == hity) {
          block.type = 3;
        }
        if (headHit && block.type != 2) block.type = 3;
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
        if (tmpblocks[i][j].type == 0) {
          head = { x: tmpblocks[i][j].x, y: tmpblocks[i][j].y };
        }
      }
    }

    blocks.splice(0, blocks.length, ...tmpblocks);
  };

  return { head, blocks, hit, rotate };
};

export default Plane;
