import Plane from "./Plane";

it("tests plane head", () => {
  const head = { x: 10, y: 10 };
  const body = { x: 10, y: 9 };

  const plane = Plane(head, body);

  expect(plane.head).toStrictEqual(head);
});

it("tests plane body", () => {
  const head = { x: 10, y: 10 };
  const body = { x: 10, y: 9 };

  const plane = Plane(head, body);

  expect(plane.body).toStrictEqual(body);
});

it("tests plane blocks", () => {
  const head = { x: 10, y: 10 };
  const body = { x: 10, y: 9 };

  const plane = Plane(head, body);

  expect(plane.blocks).toStrictEqual([
    [
      { x: 9, y: 10, type: 2 },
      { x: 10, y: 10, type: 0 },
      { x: 11, y: 10, type: 2 },
    ],
    [
      { x: 9, y: 9, type: 1 },
      { x: 10, y: 9, type: 1 },
      { x: 11, y: 9, type: 1 },
    ],
    [
      { x: 9, y: 8, type: 2 },
      { x: 10, y: 8, type: 1 },
      { x: 11, y: 8, type: 2 },
    ],
    [
      { x: 9, y: 7, type: 1 },
      { x: 10, y: 7, type: 1 },
      { x: 11, y: 7, type: 1 },
    ],
  ]);
});

it("tests plane hit", () => {
  const head = { x: 10, y: 10 };
  const body = { x: 10, y: 9 };

  const plane = Plane(head, body);
  plane.hit({ x: 9, y: 7 });

  expect(plane.blocks).toStrictEqual([
    [
      { x: 9, y: 10, type: 2 },
      { x: 10, y: 10, type: 0 },
      { x: 11, y: 10, type: 2 },
    ],
    [
      { x: 9, y: 9, type: 1 },
      { x: 10, y: 9, type: 1 },
      { x: 11, y: 9, type: 1 },
    ],
    [
      { x: 9, y: 8, type: 2 },
      { x: 10, y: 8, type: 1 },
      { x: 11, y: 8, type: 2 },
    ],
    [
      { x: 9, y: 7, type: 3 },
      { x: 10, y: 7, type: 1 },
      { x: 11, y: 7, type: 1 },
    ],
  ]);
});

it("tests plane hit head", () => {
  const head = { x: 10, y: 10 };
  const body = { x: 10, y: 9 };

  const plane = Plane(head, body);
  plane.hit(head);

  expect(plane.blocks).toStrictEqual([
    [
      { x: 9, y: 10, type: 2 },
      { x: 10, y: 10, type: 3 },
      { x: 11, y: 10, type: 2 },
    ],
    [
      { x: 9, y: 9, type: 3 },
      { x: 10, y: 9, type: 3 },
      { x: 11, y: 9, type: 3 },
    ],
    [
      { x: 9, y: 8, type: 2 },
      { x: 10, y: 8, type: 3 },
      { x: 11, y: 8, type: 2 },
    ],
    [
      { x: 9, y: 7, type: 3 },
      { x: 10, y: 7, type: 3 },
      { x: 11, y: 7, type: 3 },
    ],
  ]);
});

it("tests plane dead", () => {
  const head = { x: 10, y: 10 };
  const body = { x: 10, y: 9 };

  const plane = Plane(head, body);
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
    ],
    [
      { x: 9, y: 9, type: 3 },
      { x: 10, y: 9, type: 3 },
      { x: 11, y: 9, type: 3 },
    ],
    [
      { x: 9, y: 8, type: 2 },
      { x: 10, y: 8, type: 3 },
      { x: 11, y: 8, type: 2 },
    ],
    [
      { x: 9, y: 7, type: 3 },
      { x: 10, y: 7, type: 3 },
      { x: 11, y: 7, type: 3 },
    ],
  ]);
});

it("tests plane hit outside plane", () => {
  const head = { x: 10, y: 10 };
  const body = { x: 10, y: 9 };

  const plane = Plane(head, body);

  plane.hit({ x: 9, y: 10 });
  expect(plane.blocks).toStrictEqual([
    [
      { x: 9, y: 10, type: 3 },
      { x: 10, y: 10, type: 0 },
      { x: 11, y: 10, type: 2 },
    ],
    [
      { x: 9, y: 9, type: 1 },
      { x: 10, y: 9, type: 1 },
      { x: 11, y: 9, type: 1 },
    ],
    [
      { x: 9, y: 8, type: 2 },
      { x: 10, y: 8, type: 1 },
      { x: 11, y: 8, type: 2 },
    ],
    [
      { x: 9, y: 7, type: 1 },
      { x: 10, y: 7, type: 1 },
      { x: 11, y: 7, type: 1 },
    ],
  ]);
});
