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
      { x: 9, y: 10, type: 2 },
      { x: 10, y: 10, type: 0 },
      { x: 11, y: 10, type: 2 },
      { x: 12, y: 10, type: 2 },
    ],
    [
      { x: 9, y: 9, type: 1 },
      { x: 10, y: 9, type: 1 },
      { x: 11, y: 9, type: 1 },
      { x: 12, y: 9, type: 2 },
    ],
    [
      { x: 9, y: 8, type: 2 },
      { x: 10, y: 8, type: 1 },
      { x: 11, y: 8, type: 2 },
      { x: 12, y: 8, type: 2 },
    ],
    [
      { x: 9, y: 7, type: 1 },
      { x: 10, y: 7, type: 1 },
      { x: 11, y: 7, type: 1 },
      { x: 12, y: 7, type: 2 },
    ],
  ]);

  drawPlane(plane.blocks);
});

it("tests plane hit", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);
  plane.hit({ x: 9, y: 7 });

  expect(plane.blocks).toStrictEqual([
    [
      { x: 9, y: 10, type: 2 },
      { x: 10, y: 10, type: 0 },
      { x: 11, y: 10, type: 2 },
      { x: 12, y: 10, type: 2 },
    ],
    [
      { x: 9, y: 9, type: 1 },
      { x: 10, y: 9, type: 1 },
      { x: 11, y: 9, type: 1 },
      { x: 12, y: 9, type: 2 },
    ],
    [
      { x: 9, y: 8, type: 2 },
      { x: 10, y: 8, type: 1 },
      { x: 11, y: 8, type: 2 },
      { x: 12, y: 8, type: 2 },
    ],
    [
      { x: 9, y: 7, type: 3 },
      { x: 10, y: 7, type: 1 },
      { x: 11, y: 7, type: 1 },
      { x: 12, y: 7, type: 2 },
    ],
  ]);

  drawPlane(plane.blocks);
});

it("tests plane hit head", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);
  plane.hit(head);

  expect(plane.blocks).toStrictEqual([
    [
      { x: 9, y: 10, type: 2 },
      { x: 10, y: 10, type: 3 },
      { x: 11, y: 10, type: 2 },
      { x: 12, y: 10, type: 2 },
    ],
    [
      { x: 9, y: 9, type: 3 },
      { x: 10, y: 9, type: 3 },
      { x: 11, y: 9, type: 3 },
      { x: 12, y: 9, type: 2 },
    ],
    [
      { x: 9, y: 8, type: 2 },
      { x: 10, y: 8, type: 3 },
      { x: 11, y: 8, type: 2 },
      { x: 12, y: 8, type: 2 },
    ],
    [
      { x: 9, y: 7, type: 3 },
      { x: 10, y: 7, type: 3 },
      { x: 11, y: 7, type: 3 },
      { x: 12, y: 7, type: 2 },
    ],
  ]);

  drawPlane(plane.blocks);
});

it("tests plane dead", () => {
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
  expect(plane.blocks).toStrictEqual([
    [
      { x: 9, y: 10, type: 2 },
      { x: 10, y: 10, type: 3 },
      { x: 11, y: 10, type: 2 },
      { x: 12, y: 10, type: 2 },
    ],
    [
      { x: 9, y: 9, type: 3 },
      { x: 10, y: 9, type: 3 },
      { x: 11, y: 9, type: 3 },
      { x: 12, y: 9, type: 2 },
    ],
    [
      { x: 9, y: 8, type: 2 },
      { x: 10, y: 8, type: 3 },
      { x: 11, y: 8, type: 2 },
      { x: 12, y: 8, type: 2 },
    ],
    [
      { x: 9, y: 7, type: 3 },
      { x: 10, y: 7, type: 3 },
      { x: 11, y: 7, type: 3 },
      { x: 12, y: 7, type: 2 },
    ],
  ]);

  drawPlane(plane.blocks);
});

it("tests plane hit outside plane", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  plane.hit({ x: 9, y: 10 });
  expect(plane.blocks).toStrictEqual([
    [
      { x: 9, y: 10, type: 3 },
      { x: 10, y: 10, type: 0 },
      { x: 11, y: 10, type: 2 },
      { x: 12, y: 10, type: 2 },
    ],
    [
      { x: 9, y: 9, type: 1 },
      { x: 10, y: 9, type: 1 },
      { x: 11, y: 9, type: 1 },
      { x: 12, y: 9, type: 2 },
    ],
    [
      { x: 9, y: 8, type: 2 },
      { x: 10, y: 8, type: 1 },
      { x: 11, y: 8, type: 2 },
      { x: 12, y: 8, type: 2 },
    ],
    [
      { x: 9, y: 7, type: 1 },
      { x: 10, y: 7, type: 1 },
      { x: 11, y: 7, type: 1 },
      { x: 12, y: 7, type: 2 },
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
      { x: 9, y: 10, type: 1 },
      { x: 10, y: 10, type: 2 },
      { x: 11, y: 10, type: 1 },
      { x: 12, y: 10, type: 2 },
    ],
    [
      { x: 9, y: 9, type: 1 },
      { x: 10, y: 9, type: 1 },
      { x: 11, y: 9, type: 1 },
      { x: 12, y: 9, type: 0 },
    ],
    [
      { x: 9, y: 8, type: 1 },
      { x: 10, y: 8, type: 2 },
      { x: 11, y: 8, type: 1 },
      { x: 12, y: 8, type: 2 },
    ],
    [
      { x: 9, y: 7, type: 2 },
      { x: 10, y: 7, type: 2 },
      { x: 11, y: 7, type: 2 },
      { x: 12, y: 7, type: 2 },
    ],
  ]);

  drawPlane(plane.blocks);
});

it("tests plane rotate and head hit", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  plane.rotate();
  plane.hit({ x: 12, y: 9 });

  expect(plane.blocks).toStrictEqual([
    [
      { x: 9, y: 10, type: 3 },
      { x: 10, y: 10, type: 2 },
      { x: 11, y: 10, type: 3 },
      { x: 12, y: 10, type: 2 },
    ],
    [
      { x: 9, y: 9, type: 3 },
      { x: 10, y: 9, type: 3 },
      { x: 11, y: 9, type: 3 },
      { x: 12, y: 9, type: 3 },
    ],
    [
      { x: 9, y: 8, type: 3 },
      { x: 10, y: 8, type: 2 },
      { x: 11, y: 8, type: 3 },
      { x: 12, y: 8, type: 2 },
    ],
    [
      { x: 9, y: 7, type: 2 },
      { x: 10, y: 7, type: 2 },
      { x: 11, y: 7, type: 2 },
      { x: 12, y: 7, type: 2 },
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
