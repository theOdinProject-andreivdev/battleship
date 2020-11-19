import Plane from "./Plane";
import blockType from "../util/blockType";

it("tests plane head", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  expect(plane.getHead()).toStrictEqual(head);
});

it("tests plane blocks", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  expect(plane.getBlocks()).toStrictEqual([
    { x: 9, y: 10, type: blockType.NOT_DEFINED },
    { x: 10, y: 10, type: blockType.HEAD },
    { x: 11, y: 10, type: blockType.NOT_DEFINED },
    { x: 12, y: 10, type: blockType.NOT_DEFINED },

    { x: 9, y: 9, type: blockType.BODY },
    { x: 10, y: 9, type: blockType.BODY },
    { x: 11, y: 9, type: blockType.BODY },
    { x: 12, y: 9, type: blockType.NOT_DEFINED },

    { x: 9, y: 8, type: blockType.NOT_DEFINED },
    { x: 10, y: 8, type: blockType.BODY },
    { x: 11, y: 8, type: blockType.NOT_DEFINED },
    { x: 12, y: 8, type: blockType.NOT_DEFINED },

    { x: 9, y: 7, type: blockType.BODY },
    { x: 10, y: 7, type: blockType.BODY },
    { x: 11, y: 7, type: blockType.BODY },
    { x: 12, y: 7, type: blockType.NOT_DEFINED },
  ]);
});

it("tests plane hit", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);
  plane.hit({ x: 9, y: 9 });

  expect(plane.getDead()).toStrictEqual(false);

  expect(plane.getBlocks()).toStrictEqual([
    { x: 9, y: 10, type: blockType.NOT_DEFINED },
    { x: 10, y: 10, type: blockType.HEAD },
    { x: 11, y: 10, type: blockType.NOT_DEFINED },
    { x: 12, y: 10, type: blockType.NOT_DEFINED },

    { x: 9, y: 9, type: blockType.HIT },
    { x: 10, y: 9, type: blockType.BODY },
    { x: 11, y: 9, type: blockType.BODY },
    { x: 12, y: 9, type: blockType.NOT_DEFINED },

    { x: 9, y: 8, type: blockType.NOT_DEFINED },
    { x: 10, y: 8, type: blockType.BODY },
    { x: 11, y: 8, type: blockType.NOT_DEFINED },
    { x: 12, y: 8, type: blockType.NOT_DEFINED },

    { x: 9, y: 7, type: blockType.BODY },
    { x: 10, y: 7, type: blockType.BODY },
    { x: 11, y: 7, type: blockType.BODY },
    { x: 12, y: 7, type: blockType.NOT_DEFINED },
  ]);
});

it("tests plane hit head", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);
  plane.hit(head);

  expect(plane.getDead()).toStrictEqual(true);

  expect(plane.getBlocks()).toStrictEqual([
    { x: 9, y: 10, type: blockType.NOT_DEFINED },
    { x: 10, y: 10, type: blockType.HIT },
    { x: 11, y: 10, type: blockType.NOT_DEFINED },
    { x: 12, y: 10, type: blockType.NOT_DEFINED },

    { x: 9, y: 9, type: blockType.HIT },
    { x: 10, y: 9, type: blockType.HIT },
    { x: 11, y: 9, type: blockType.HIT },
    { x: 12, y: 9, type: blockType.NOT_DEFINED },

    { x: 9, y: 8, type: blockType.NOT_DEFINED },
    { x: 10, y: 8, type: blockType.HIT },
    { x: 11, y: 8, type: blockType.NOT_DEFINED },
    { x: 12, y: 8, type: blockType.NOT_DEFINED },

    { x: 9, y: 7, type: blockType.HIT },
    { x: 10, y: 7, type: blockType.HIT },
    { x: 11, y: 7, type: blockType.HIT },
    { x: 12, y: 7, type: blockType.NOT_DEFINED },
  ]);
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

  expect(plane.getBlocks()).toStrictEqual([
    { x: 9, y: 10, type: blockType.NOT_DEFINED },
    { x: 10, y: 10, type: blockType.HIT },
    { x: 11, y: 10, type: blockType.NOT_DEFINED },
    { x: 12, y: 10, type: blockType.NOT_DEFINED },

    { x: 9, y: 9, type: blockType.HIT },
    { x: 10, y: 9, type: blockType.HIT },
    { x: 11, y: 9, type: blockType.HIT },
    { x: 12, y: 9, type: blockType.NOT_DEFINED },

    { x: 9, y: 8, type: blockType.NOT_DEFINED },
    { x: 10, y: 8, type: blockType.HIT },
    { x: 11, y: 8, type: blockType.NOT_DEFINED },
    { x: 12, y: 8, type: blockType.NOT_DEFINED },

    { x: 9, y: 7, type: blockType.HIT },
    { x: 10, y: 7, type: blockType.HIT },
    { x: 11, y: 7, type: blockType.HIT },
    { x: 12, y: 7, type: blockType.NOT_DEFINED },
  ]);
});

it("tests plane rotate", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  plane.rotate();

  expect(plane.getBlocks()).toStrictEqual([
    { x: 9, y: 10, type: blockType.BODY },
    { x: 10, y: 10, type: blockType.NOT_DEFINED },
    { x: 11, y: 10, type: blockType.BODY },
    { x: 12, y: 10, type: blockType.NOT_DEFINED },

    { x: 9, y: 9, type: blockType.BODY },
    { x: 10, y: 9, type: blockType.BODY },
    { x: 11, y: 9, type: blockType.BODY },
    { x: 12, y: 9, type: blockType.HEAD },

    { x: 9, y: 8, type: blockType.BODY },
    { x: 10, y: 8, type: blockType.NOT_DEFINED },
    { x: 11, y: 8, type: blockType.BODY },
    { x: 12, y: 8, type: blockType.NOT_DEFINED },

    { x: 9, y: 7, type: blockType.NOT_DEFINED },
    { x: 10, y: 7, type: blockType.NOT_DEFINED },
    { x: 11, y: 7, type: blockType.NOT_DEFINED },
    { x: 12, y: 7, type: blockType.NOT_DEFINED },
  ]);
});

it("tests plane rotate and head hit", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  plane.rotate();
  plane.hit({ x: 12, y: 9 });

  //expect(plane.getDead()).toStrictEqual(true);

  expect(plane.getBlocks()).toStrictEqual([
    { x: 9, y: 10, type: blockType.HIT },
    { x: 10, y: 10, type: blockType.NOT_DEFINED },
    { x: 11, y: 10, type: blockType.HIT },
    { x: 12, y: 10, type: blockType.NOT_DEFINED },

    { x: 9, y: 9, type: blockType.HIT },
    { x: 10, y: 9, type: blockType.HIT },
    { x: 11, y: 9, type: blockType.HIT },
    { x: 12, y: 9, type: blockType.HIT },

    { x: 9, y: 8, type: blockType.HIT },
    { x: 10, y: 8, type: blockType.NOT_DEFINED },
    { x: 11, y: 8, type: blockType.HIT },
    { x: 12, y: 8, type: blockType.NOT_DEFINED },

    { x: 9, y: 7, type: blockType.NOT_DEFINED },
    { x: 10, y: 7, type: blockType.NOT_DEFINED },
    { x: 11, y: 7, type: blockType.NOT_DEFINED },
    { x: 12, y: 7, type: blockType.NOT_DEFINED },
  ]);
});
