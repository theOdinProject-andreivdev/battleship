const Plane = ({ x: headx, y: heady }, { x: bodyx, y: bodyy }) => {
  const head = { x: headx, y: heady };
  const body = { x: bodyx, y: bodyy };

  const blocks = [
    [
      { x: head.x - 1, y: head.y, type: 2 },
      { x: head.x, y: head.y, type: 0 },
      { x: head.x + 1, y: head.y, type: 2 },
    ],
    [
      { x: body.x - 1, y: body.y, type: 1 },
      { x: body.x, y: body.y, type: 1 },
      { x: body.x + 1, y: body.y, type: 1 },
    ],
    [
      { x: body.x - 1, y: body.y - 1, type: 2 },
      { x: body.x, y: body.y - 1, type: 1 },
      { x: body.x + 1, y: body.y - 1, type: 2 },
    ],
    [
      { x: body.x - 1, y: body.y - 2, type: 1 },
      { x: body.x, y: body.y - 2, type: 1 },
      { x: body.x + 1, y: body.y - 2, type: 1 },
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

  return { head, body, blocks, hit };
};

export default Plane;
