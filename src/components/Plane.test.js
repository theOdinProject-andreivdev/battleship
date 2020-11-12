import Plane from "./Plane";

it("tests plane head", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  expect(plane.head).toStrictEqual(head);
});

it("tests plane blocks", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  expect(plane.blocks).toStrictEqual([
    [
      { x: 9, y: 10, type: plane.blockStatus.AIR },
      { x: 10, y: 10, type: plane.blockStatus.HEAD },
      { x: 11, y: 10, type: plane.blockStatus.AIR },
      { x: 12, y: 10, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 9, type: plane.blockStatus.BODY },
      { x: 10, y: 9, type: plane.blockStatus.BODY },
      { x: 11, y: 9, type: plane.blockStatus.BODY },
      { x: 12, y: 9, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 8, type: plane.blockStatus.AIR },
      { x: 10, y: 8, type: plane.blockStatus.BODY },
      { x: 11, y: 8, type: plane.blockStatus.AIR },
      { x: 12, y: 8, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 7, type: plane.blockStatus.BODY },
      { x: 10, y: 7, type: plane.blockStatus.BODY },
      { x: 11, y: 7, type: plane.blockStatus.BODY },
      { x: 12, y: 7, type: plane.blockStatus.AIR },
    ],
  ]);

  drawPlane(plane.blocks);
});

it("tests plane hit", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);
  plane.hit({ x: 9, y: 7 });

  expect(plane.getDead()).toStrictEqual(false);

  expect(plane.blocks).toStrictEqual([
    [
      { x: 9, y: 10, type: plane.blockStatus.AIR },
      { x: 10, y: 10, type: plane.blockStatus.HEAD },
      { x: 11, y: 10, type: plane.blockStatus.AIR },
      { x: 12, y: 10, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 9, type: plane.blockStatus.BODY },
      { x: 10, y: 9, type: plane.blockStatus.BODY },
      { x: 11, y: 9, type: plane.blockStatus.BODY },
      { x: 12, y: 9, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 8, type: plane.blockStatus.AIR },
      { x: 10, y: 8, type: plane.blockStatus.BODY },
      { x: 11, y: 8, type: plane.blockStatus.AIR },
      { x: 12, y: 8, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 7, type: plane.blockStatus.HIT },
      { x: 10, y: 7, type: plane.blockStatus.BODY },
      { x: 11, y: 7, type: plane.blockStatus.BODY },
      { x: 12, y: 7, type: plane.blockStatus.AIR },
    ],
  ]);

  drawPlane(plane.blocks);
});

it("tests plane hit head", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);
  plane.hit(head);

  expect(plane.getDead()).toStrictEqual(true);

  expect(plane.blocks).toStrictEqual([
    [
      { x: 9, y: 10, type: plane.blockStatus.AIR },
      { x: 10, y: 10, type: plane.blockStatus.HIT },
      { x: 11, y: 10, type: plane.blockStatus.AIR },
      { x: 12, y: 10, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 9, type: plane.blockStatus.HIT },
      { x: 10, y: 9, type: plane.blockStatus.HIT },
      { x: 11, y: 9, type: plane.blockStatus.HIT },
      { x: 12, y: 9, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 8, type: plane.blockStatus.AIR },
      { x: 10, y: 8, type: plane.blockStatus.HIT },
      { x: 11, y: 8, type: plane.blockStatus.AIR },
      { x: 12, y: 8, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 7, type: plane.blockStatus.HIT },
      { x: 10, y: 7, type: plane.blockStatus.HIT },
      { x: 11, y: 7, type: plane.blockStatus.HIT },
      { x: 12, y: 7, type: plane.blockStatus.AIR },
    ],
  ]);

  drawPlane(plane.blocks);
});

it("tests plane getDead", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);
  plane.hit({ x: 10, y: 10 });

  plane.hit({ x: 9, y: 9 });
  plane.hit({ x: 10, y: 9 });
  plane.hit({ x: 11, y: 9 });

  plane.hit({ x: 10, y: 8 });

  plane.hit({ x: 9, y: 7 });
  plane.hit({ x: 10, y: 7 });
  plane.hit({ x: 11, y: 7 });

  expect(plane.getDead()).toStrictEqual(true);

  expect(plane.blocks).toStrictEqual([
    [
      { x: 9, y: 10, type: plane.blockStatus.AIR },
      { x: 10, y: 10, type: plane.blockStatus.HIT },
      { x: 11, y: 10, type: plane.blockStatus.AIR },
      { x: 12, y: 10, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 9, type: plane.blockStatus.HIT },
      { x: 10, y: 9, type: plane.blockStatus.HIT },
      { x: 11, y: 9, type: plane.blockStatus.HIT },
      { x: 12, y: 9, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 8, type: plane.blockStatus.AIR },
      { x: 10, y: 8, type: plane.blockStatus.HIT },
      { x: 11, y: 8, type: plane.blockStatus.AIR },
      { x: 12, y: 8, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 7, type: plane.blockStatus.HIT },
      { x: 10, y: 7, type: plane.blockStatus.HIT },
      { x: 11, y: 7, type: plane.blockStatus.HIT },
      { x: 12, y: 7, type: plane.blockStatus.AIR },
    ],
  ]);

  drawPlane(plane.blocks);
});

it("tests plane hit outside plane", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  plane.hit({ x: 9, y: 10 });

  expect(plane.getDead()).toStrictEqual(false);

  expect(plane.blocks).toStrictEqual([
    [
      { x: 9, y: 10, type: plane.blockStatus.HIT },
      { x: 10, y: 10, type: plane.blockStatus.HEAD },
      { x: 11, y: 10, type: plane.blockStatus.AIR },
      { x: 12, y: 10, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 9, type: plane.blockStatus.BODY },
      { x: 10, y: 9, type: plane.blockStatus.BODY },
      { x: 11, y: 9, type: plane.blockStatus.BODY },
      { x: 12, y: 9, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 8, type: plane.blockStatus.AIR },
      { x: 10, y: 8, type: plane.blockStatus.BODY },
      { x: 11, y: 8, type: plane.blockStatus.AIR },
      { x: 12, y: 8, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 7, type: plane.blockStatus.BODY },
      { x: 10, y: 7, type: plane.blockStatus.BODY },
      { x: 11, y: 7, type: plane.blockStatus.BODY },
      { x: 12, y: 7, type: plane.blockStatus.AIR },
    ],
  ]);

  drawPlane(plane.blocks);
});

it("tests plane rotate", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  plane.rotate();

  expect(plane.blocks).toStrictEqual([
    [
      { x: 9, y: 10, type: plane.blockStatus.BODY },
      { x: 10, y: 10, type: plane.blockStatus.AIR },
      { x: 11, y: 10, type: plane.blockStatus.BODY },
      { x: 12, y: 10, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 9, type: plane.blockStatus.BODY },
      { x: 10, y: 9, type: plane.blockStatus.BODY },
      { x: 11, y: 9, type: plane.blockStatus.BODY },
      { x: 12, y: 9, type: plane.blockStatus.HEAD },
    ],
    [
      { x: 9, y: 8, type: plane.blockStatus.BODY },
      { x: 10, y: 8, type: plane.blockStatus.AIR },
      { x: 11, y: 8, type: plane.blockStatus.BODY },
      { x: 12, y: 8, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 7, type: plane.blockStatus.AIR },
      { x: 10, y: 7, type: plane.blockStatus.AIR },
      { x: 11, y: 7, type: plane.blockStatus.AIR },
      { x: 12, y: 7, type: plane.blockStatus.AIR },
    ],
  ]);

  drawPlane(plane.blocks);
});

it("tests plane rotate and head hit", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  plane.rotate();
  plane.hit({ x: 12, y: 9 });

  expect(plane.getDead()).toStrictEqual(true);

  expect(plane.blocks).toStrictEqual([
    [
      { x: 9, y: 10, type: plane.blockStatus.HIT },
      { x: 10, y: 10, type: plane.blockStatus.AIR },
      { x: 11, y: 10, type: plane.blockStatus.HIT },
      { x: 12, y: 10, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 9, type: plane.blockStatus.HIT },
      { x: 10, y: 9, type: plane.blockStatus.HIT },
      { x: 11, y: 9, type: plane.blockStatus.HIT },
      { x: 12, y: 9, type: plane.blockStatus.HIT },
    ],
    [
      { x: 9, y: 8, type: plane.blockStatus.HIT },
      { x: 10, y: 8, type: plane.blockStatus.AIR },
      { x: 11, y: 8, type: plane.blockStatus.HIT },
      { x: 12, y: 8, type: plane.blockStatus.AIR },
    ],
    [
      { x: 9, y: 7, type: plane.blockStatus.AIR },
      { x: 10, y: 7, type: plane.blockStatus.AIR },
      { x: 11, y: 7, type: plane.blockStatus.AIR },
      { x: 12, y: 7, type: plane.blockStatus.AIR },
    ],
  ]);
  drawPlane(plane.blocks);
});

function drawPlane(blocks) {
  let str = "";

  for (let i = 0; i < blocks.length; i++) {
    str = str.concat("\n");
    for (let j = 0; j < blocks.length; j++) {
      str = str.concat("x=" + blocks[i][j].x + " " + "y=" + blocks[i][j].y);
      if (blocks[i][j].type == 0) str = str.concat("    h");
      if (blocks[i][j].type == 1) str = str.concat("    @");
      if (blocks[i][j].type == 2) str = str.concat("    _");
      if (blocks[i][j].type == 3) str = str.concat("    x");
      str = str.concat("    ");
    }
  }
  console.log(str);
  return str;
}
