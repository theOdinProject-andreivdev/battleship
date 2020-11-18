import Plane from "./Plane";
import blockType from "../util/blockType";

xit("tests plane head", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  expect(plane.getHead()).toStrictEqual(head);
});

xit("tests plane blocks", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  expect(plane.getBlocks()).toStrictEqual([
    { x: 9, y: 10, type: blockType.NOT_DEFINED },
    { x: 10, y: 10, type: blockType.HEAD },
    { x: 11, y: 10, type: blockType.NOT_DEFINED },
    { x: 12, y: 10, type: blockType.NOT_DEFINED },

    { x: 9, y: 11, type: blockType.BODY },
    { x: 10, y: 11, type: blockType.BODY },
    { x: 11, y: 11, type: blockType.BODY },
    { x: 12, y: 11, type: blockType.NOT_DEFINED },

    { x: 9, y: 12, type: blockType.NOT_DEFINED },
    { x: 10, y: 12, type: blockType.BODY },
    { x: 11, y: 12, type: blockType.NOT_DEFINED },
    { x: 12, y: 12, type: blockType.NOT_DEFINED },

    { x: 9, y: 13, type: blockType.BODY },
    { x: 10, y: 13, type: blockType.BODY },
    { x: 11, y: 13, type: blockType.BODY },
    { x: 12, y: 13, type: blockType.NOT_DEFINED },
  ]);
});

xit("tests plane hxit", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);
  plane.hxit({ x: 9, y: 11 });

  expect(plane.getDead()).toStrictEqual(false);

  expect(plane.getBlocks()).toStrictEqual([
    { x: 9, y: 10, type: blockType.NOT_DEFINED },
    { x: 10, y: 10, type: blockType.HEAD },
    { x: 11, y: 10, type: blockType.NOT_DEFINED },
    { x: 12, y: 10, type: blockType.NOT_DEFINED },

    { x: 9, y: 11, type: blockType.Hxit },
    { x: 10, y: 11, type: blockType.BODY },
    { x: 11, y: 11, type: blockType.BODY },
    { x: 12, y: 11, type: blockType.NOT_DEFINED },

    { x: 9, y: 12, type: blockType.NOT_DEFINED },
    { x: 10, y: 12, type: blockType.BODY },
    { x: 11, y: 12, type: blockType.NOT_DEFINED },
    { x: 12, y: 12, type: blockType.NOT_DEFINED },

    { x: 9, y: 13, type: blockType.BODY },
    { x: 10, y: 13, type: blockType.BODY },
    { x: 11, y: 13, type: blockType.BODY },
    { x: 12, y: 13, type: blockType.NOT_DEFINED },
  ]);
});

xit("tests plane hxit head", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);
  plane.hxit(head);

  expect(plane.getDead()).toStrictEqual(true);

  expect(plane.getBlocks()).toStrictEqual([
    { x: 9, y: 10, type: blockType.NOT_DEFINED },
    { x: 10, y: 10, type: blockType.Hxit },
    { x: 11, y: 10, type: blockType.NOT_DEFINED },
    { x: 12, y: 10, type: blockType.NOT_DEFINED },

    { x: 9, y: 11, type: blockType.Hxit },
    { x: 10, y: 11, type: blockType.Hxit },
    { x: 11, y: 11, type: blockType.Hxit },
    { x: 12, y: 11, type: blockType.NOT_DEFINED },

    { x: 9, y: 12, type: blockType.NOT_DEFINED },
    { x: 10, y: 12, type: blockType.Hxit },
    { x: 11, y: 12, type: blockType.NOT_DEFINED },
    { x: 12, y: 12, type: blockType.NOT_DEFINED },

    { x: 9, y: 13, type: blockType.Hxit },
    { x: 10, y: 13, type: blockType.Hxit },
    { x: 11, y: 13, type: blockType.Hxit },
    { x: 12, y: 13, type: blockType.NOT_DEFINED },
  ]);
});

xit("tests plane getDead", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);
  plane.hxit({ x: 10, y: 10 });

  plane.hxit({ x: 9, y: 11 });
  plane.hxit({ x: 10, y: 11 });
  plane.hxit({ x: 11, y: 11 });

  plane.hxit({ x: 10, y: 12 });

  plane.hxit({ x: 9, y: 13 });
  plane.hxit({ x: 10, y: 13 });
  plane.hxit({ x: 11, y: 713 });

  expect(plane.getDead()).toStrictEqual(true);

  expect(plane.getBlocks()).toStrictEqual([
    { x: 9, y: 10, type: blockType.NOT_DEFINED },
    { x: 10, y: 10, type: blockType.Hxit },
    { x: 11, y: 10, type: blockType.NOT_DEFINED },
    { x: 12, y: 10, type: blockType.NOT_DEFINED },

    { x: 9, y: 11, type: blockType.Hxit },
    { x: 10, y: 11, type: blockType.Hxit },
    { x: 11, y: 11, type: blockType.Hxit },
    { x: 12, y: 11, type: blockType.NOT_DEFINED },

    { x: 9, y: 12, type: blockType.NOT_DEFINED },
    { x: 10, y: 12, type: blockType.Hxit },
    { x: 11, y: 12, type: blockType.NOT_DEFINED },
    { x: 12, y: 12, type: blockType.NOT_DEFINED },

    { x: 9, y: 13, type: blockType.Hxit },
    { x: 10, y: 13, type: blockType.Hxit },
    { x: 11, y: 13, type: blockType.Hxit },
    { x: 12, y: 13, type: blockType.NOT_DEFINED },
  ]);
});

xit("tests plane rotate", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  plane.rotate();

  expect(plane.getBlocks()).toStrictEqual([
    { x: 9, y: 10, type: blockType.BODY },
    { x: 10, y: 10, type: blockType.NOT_DEFINED },
    { x: 11, y: 10, type: blockType.BODY },
    { x: 12, y: 10, type: blockType.NOT_DEFINED },

    { x: 9, y: 11, type: blockType.BODY },
    { x: 10, y: 11, type: blockType.BODY },
    { x: 11, y: 11, type: blockType.BODY },
    { x: 12, y: 11, type: blockType.HEAD },

    { x: 9, y: 12, type: blockType.BODY },
    { x: 10, y: 12, type: blockType.NOT_DEFINED },
    { x: 11, y: 12, type: blockType.BODY },
    { x: 12, y: 12, type: blockType.NOT_DEFINED },

    { x: 9, y: 13, type: blockType.NOT_DEFINED },
    { x: 10, y: 13, type: blockType.NOT_DEFINED },
    { x: 11, y: 13, type: blockType.NOT_DEFINED },
    { x: 12, y: 13, type: blockType.NOT_DEFINED },
  ]);
});

xit("tests plane rotate and head hxit", () => {
  const head = { x: 10, y: 10 };

  const plane = Plane(head);

  plane.rotate();
  plane.hxit({ x: 12, y: 11 });

  expect(plane.getDead()).toStrictEqual(true);

  expect(plane.getBlocks()).toStrictEqual([
    { x: 9, y: 10, type: blockType.Hxit },
    { x: 10, y: 10, type: blockType.NOT_DEFINED },
    { x: 11, y: 10, type: blockType.Hxit },
    { x: 12, y: 10, type: blockType.NOT_DEFINED },

    { x: 9, y: 11, type: blockType.Hxit },
    { x: 10, y: 11, type: blockType.Hxit },
    { x: 11, y: 11, type: blockType.Hxit },
    { x: 12, y: 11, type: blockType.Hxit },

    { x: 9, y: 12, type: blockType.Hxit },
    { x: 10, y: 12, type: blockType.NOT_DEFINED },
    { x: 11, y: 12, type: blockType.Hxit },
    { x: 12, y: 12, type: blockType.NOT_DEFINED },

    { x: 9, y: 13, type: blockType.NOT_DEFINED },
    { x: 10, y: 13, type: blockType.NOT_DEFINED },
    { x: 11, y: 13, type: blockType.NOT_DEFINED },
    { x: 12, y: 13, type: blockType.NOT_DEFINED },
  ]);
});
