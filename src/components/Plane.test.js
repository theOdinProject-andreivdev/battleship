import Plane from "./Plane";
import blockType from "../util/blockType";

it("tests plane head", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  expect(plane.head).toStrictEqual(head);
});

it("tests plane blocks", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  expect(plane.getBlocks()).toStrictEqual([
    [
      { x: 9, y: 10, type: blockType.NOT_DEFINED },
      { x: 10, y: 10, type: blockType.HEAD },
      { x: 11, y: 10, type: blockType.NOT_DEFINED },
      { x: 12, y: 10, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 11, type: blockType.BODY },
      { x: 10, y: 11, type: blockType.BODY },
      { x: 11, y: 11, type: blockType.BODY },
      { x: 12, y: 11, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 12, type: blockType.NOT_DEFINED },
      { x: 10, y: 12, type: blockType.BODY },
      { x: 11, y: 12, type: blockType.NOT_DEFINED },
      { x: 12, y: 12, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 13, type: blockType.BODY },
      { x: 10, y: 13, type: blockType.BODY },
      { x: 11, y: 13, type: blockType.BODY },
      { x: 12, y: 13, type: blockType.NOT_DEFINED },
    ],
  ]);

  //drawPlane(plane.getBlocks());
});

it("tests plane hit", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);
  plane.hit({ x: 9, y: 11 });

  expect(plane.getDead()).toStrictEqual(false);

  expect(plane.getBlocks()).toStrictEqual([
    [
      { x: 9, y: 10, type: blockType.NOT_DEFINED },
      { x: 10, y: 10, type: blockType.HEAD },
      { x: 11, y: 10, type: blockType.NOT_DEFINED },
      { x: 12, y: 10, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 11, type: blockType.HIT },
      { x: 10, y: 11, type: blockType.BODY },
      { x: 11, y: 11, type: blockType.BODY },
      { x: 12, y: 11, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 12, type: blockType.NOT_DEFINED },
      { x: 10, y: 12, type: blockType.BODY },
      { x: 11, y: 12, type: blockType.NOT_DEFINED },
      { x: 12, y: 12, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 13, type: blockType.BODY },
      { x: 10, y: 13, type: blockType.BODY },
      { x: 11, y: 13, type: blockType.BODY },
      { x: 12, y: 13, type: blockType.NOT_DEFINED },
    ],
  ]);
});

it("tests plane hit head", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);
  plane.hit(head);

  expect(plane.getDead()).toStrictEqual(true);

  expect(plane.getBlocks()).toStrictEqual([
    [
      { x: 9, y: 10, type: blockType.NOT_DEFINED },
      { x: 10, y: 10, type: blockType.HIT },
      { x: 11, y: 10, type: blockType.NOT_DEFINED },
      { x: 12, y: 10, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 11, type: blockType.HIT },
      { x: 10, y: 11, type: blockType.HIT },
      { x: 11, y: 11, type: blockType.HIT },
      { x: 12, y: 11, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 12, type: blockType.NOT_DEFINED },
      { x: 10, y: 12, type: blockType.HIT },
      { x: 11, y: 12, type: blockType.NOT_DEFINED },
      { x: 12, y: 12, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 13, type: blockType.HIT },
      { x: 10, y: 13, type: blockType.HIT },
      { x: 11, y: 13, type: blockType.HIT },
      { x: 12, y: 13, type: blockType.NOT_DEFINED },
    ],
  ]);

  //drawPlane(plane.getBlocks());
});

it("tests plane getDead", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);
  plane.hit({ x: 10, y: 10 });

  plane.hit({ x: 9, y: 11 });
  plane.hit({ x: 10, y: 11 });
  plane.hit({ x: 11, y: 11 });

  plane.hit({ x: 10, y: 12 });

  plane.hit({ x: 9, y: 13 });
  plane.hit({ x: 10, y: 13 });
  plane.hit({ x: 11, y: 713 });

  expect(plane.getDead()).toStrictEqual(true);

  expect(plane.getBlocks()).toStrictEqual([
    [
      { x: 9, y: 10, type: blockType.NOT_DEFINED },
      { x: 10, y: 10, type: blockType.HIT },
      { x: 11, y: 10, type: blockType.NOT_DEFINED },
      { x: 12, y: 10, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 11, type: blockType.HIT },
      { x: 10, y: 11, type: blockType.HIT },
      { x: 11, y: 11, type: blockType.HIT },
      { x: 12, y: 11, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 12, type: blockType.NOT_DEFINED },
      { x: 10, y: 12, type: blockType.HIT },
      { x: 11, y: 12, type: blockType.NOT_DEFINED },
      { x: 12, y: 12, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 13, type: blockType.HIT },
      { x: 10, y: 13, type: blockType.HIT },
      { x: 11, y: 13, type: blockType.HIT },
      { x: 12, y: 13, type: blockType.NOT_DEFINED },
    ],
  ]);

  //drawPlane(plane.getBlocks());
});

it("tests plane hit outside plane", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  plane.hit({ x: 9, y: 10 });

  expect(plane.getDead()).toStrictEqual(false);

  expect(plane.getBlocks()).toStrictEqual([
    [
      { x: 9, y: 10, type: blockType.HIT },
      { x: 10, y: 10, type: blockType.HEAD },
      { x: 11, y: 10, type: blockType.NOT_DEFINED },
      { x: 12, y: 10, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 11, type: blockType.BODY },
      { x: 10, y: 11, type: blockType.BODY },
      { x: 11, y: 11, type: blockType.BODY },
      { x: 12, y: 11, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 12, type: blockType.NOT_DEFINED },
      { x: 10, y: 12, type: blockType.BODY },
      { x: 11, y: 12, type: blockType.NOT_DEFINED },
      { x: 12, y: 12, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 13, type: blockType.BODY },
      { x: 10, y: 13, type: blockType.BODY },
      { x: 11, y: 13, type: blockType.BODY },
      { x: 12, y: 13, type: blockType.NOT_DEFINED },
    ],
  ]);

  //drawPlane(plane.getBlocks());
});

it("tests plane rotate", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  plane.rotate();

  expect(plane.getBlocks()).toStrictEqual([
    [
      { x: 9, y: 10, type: blockType.BODY },
      { x: 10, y: 10, type: blockType.NOT_DEFINED },
      { x: 11, y: 10, type: blockType.BODY },
      { x: 12, y: 10, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 11, type: blockType.BODY },
      { x: 10, y: 11, type: blockType.BODY },
      { x: 11, y: 11, type: blockType.BODY },
      { x: 12, y: 11, type: blockType.HEAD },
    ],
    [
      { x: 9, y: 12, type: blockType.BODY },
      { x: 10, y: 12, type: blockType.NOT_DEFINED },
      { x: 11, y: 12, type: blockType.BODY },
      { x: 12, y: 12, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 13, type: blockType.NOT_DEFINED },
      { x: 10, y: 13, type: blockType.NOT_DEFINED },
      { x: 11, y: 13, type: blockType.NOT_DEFINED },
      { x: 12, y: 13, type: blockType.NOT_DEFINED },
    ],
  ]);

  //drawPlane(plane.getBlocks());
});

it("tests plane rotate and head hit", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  plane.rotate();
  plane.hit({ x: 12, y: 11 });

  expect(plane.getDead()).toStrictEqual(true);

  expect(plane.getBlocks()).toStrictEqual([
    [
      { x: 9, y: 10, type: blockType.HIT },
      { x: 10, y: 10, type: blockType.NOT_DEFINED },
      { x: 11, y: 10, type: blockType.HIT },
      { x: 12, y: 10, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 11, type: blockType.HIT },
      { x: 10, y: 11, type: blockType.HIT },
      { x: 11, y: 11, type: blockType.HIT },
      { x: 12, y: 11, type: blockType.HIT },
    ],
    [
      { x: 9, y: 12, type: blockType.HIT },
      { x: 10, y: 12, type: blockType.NOT_DEFINED },
      { x: 11, y: 12, type: blockType.HIT },
      { x: 12, y: 12, type: blockType.NOT_DEFINED },
    ],
    [
      { x: 9, y: 13, type: blockType.NOT_DEFINED },
      { x: 10, y: 13, type: blockType.NOT_DEFINED },
      { x: 11, y: 13, type: blockType.NOT_DEFINED },
      { x: 12, y: 13, type: blockType.NOT_DEFINED },
    ],
  ]);
  //drawPlane(plane.getBlocks());
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
