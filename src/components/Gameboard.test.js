import Gameboard from "./Gameboard";
import Plane from "./Plane";

it("tests gameboard creation", () => {
  const gameBoard = Gameboard();

  expect(gameBoard.getBlocks()).toStrictEqual(
    //empty board

    [
      [
        { x: 0, y: 9, type: 2 },
        { x: 1, y: 9, type: 2 },
        { x: 2, y: 9, type: 2 },
        { x: 3, y: 9, type: 2 },
        { x: 4, y: 9, type: 2 },
        { x: 5, y: 9, type: 2 },
        { x: 6, y: 9, type: 2 },
        { x: 7, y: 9, type: 2 },
        { x: 8, y: 9, type: 2 },
        { x: 9, y: 9, type: 2 },
      ],
      [
        { x: 0, y: 8, type: 2 },
        { x: 1, y: 8, type: 2 },
        { x: 2, y: 8, type: 2 },
        { x: 3, y: 8, type: 2 },
        { x: 4, y: 8, type: 2 },
        { x: 5, y: 8, type: 2 },
        { x: 6, y: 8, type: 2 },
        { x: 7, y: 8, type: 2 },
        { x: 8, y: 8, type: 2 },
        { x: 9, y: 8, type: 2 },
      ],
      [
        { x: 0, y: 7, type: 2 },
        { x: 1, y: 7, type: 2 },
        { x: 2, y: 7, type: 2 },
        { x: 3, y: 7, type: 2 },
        { x: 4, y: 7, type: 2 },
        { x: 5, y: 7, type: 2 },
        { x: 6, y: 7, type: 2 },
        { x: 7, y: 7, type: 2 },
        { x: 8, y: 7, type: 2 },
        { x: 9, y: 7, type: 2 },
      ],
      [
        { x: 0, y: 6, type: 2 },
        { x: 1, y: 6, type: 2 },
        { x: 2, y: 6, type: 2 },
        { x: 3, y: 6, type: 2 },
        { x: 4, y: 6, type: 2 },
        { x: 5, y: 6, type: 2 },
        { x: 6, y: 6, type: 2 },
        { x: 7, y: 6, type: 2 },
        { x: 8, y: 6, type: 2 },
        { x: 9, y: 6, type: 2 },
      ],
      [
        { x: 0, y: 5, type: 2 },
        { x: 1, y: 5, type: 2 },
        { x: 2, y: 5, type: 2 },
        { x: 3, y: 5, type: 2 },
        { x: 4, y: 5, type: 2 },
        { x: 5, y: 5, type: 2 },
        { x: 6, y: 5, type: 2 },
        { x: 7, y: 5, type: 2 },
        { x: 8, y: 5, type: 2 },
        { x: 9, y: 5, type: 2 },
      ],
      [
        { x: 0, y: 4, type: 2 },
        { x: 1, y: 4, type: 2 },
        { x: 2, y: 4, type: 2 },
        { x: 3, y: 4, type: 2 },
        { x: 4, y: 4, type: 2 },
        { x: 5, y: 4, type: 2 },
        { x: 6, y: 4, type: 2 },
        { x: 7, y: 4, type: 2 },
        { x: 8, y: 4, type: 2 },
        { x: 9, y: 4, type: 2 },
      ],
      [
        { x: 0, y: 3, type: 2 },
        { x: 1, y: 3, type: 2 },
        { x: 2, y: 3, type: 2 },
        { x: 3, y: 3, type: 2 },
        { x: 4, y: 3, type: 2 },
        { x: 5, y: 3, type: 2 },
        { x: 6, y: 3, type: 2 },
        { x: 7, y: 3, type: 2 },
        { x: 8, y: 3, type: 2 },
        { x: 9, y: 3, type: 2 },
      ],
      [
        { x: 0, y: 2, type: 2 },
        { x: 1, y: 2, type: 2 },
        { x: 2, y: 2, type: 2 },
        { x: 3, y: 2, type: 2 },
        { x: 4, y: 2, type: 2 },
        { x: 5, y: 2, type: 2 },
        { x: 6, y: 2, type: 2 },
        { x: 7, y: 2, type: 2 },
        { x: 8, y: 2, type: 2 },
        { x: 9, y: 2, type: 2 },
      ],
      [
        { x: 0, y: 1, type: 2 },
        { x: 1, y: 1, type: 2 },
        { x: 2, y: 1, type: 2 },
        { x: 3, y: 1, type: 2 },
        { x: 4, y: 1, type: 2 },
        { x: 5, y: 1, type: 2 },
        { x: 6, y: 1, type: 2 },
        { x: 7, y: 1, type: 2 },
        { x: 8, y: 1, type: 2 },
        { x: 9, y: 1, type: 2 },
      ],
      [
        { x: 0, y: 0, type: 2 },
        { x: 1, y: 0, type: 2 },
        { x: 2, y: 0, type: 2 },
        { x: 3, y: 0, type: 2 },
        { x: 4, y: 0, type: 2 },
        { x: 5, y: 0, type: 2 },
        { x: 6, y: 0, type: 2 },
        { x: 7, y: 0, type: 2 },
        { x: 8, y: 0, type: 2 },
        { x: 9, y: 0, type: 2 },
      ],
    ]
  );
});

it("gameboard adds a plane", () => {
  const gameBoard = Gameboard();
  const plane = Plane({ x: 5, y: 5 });

  expect(gameBoard.addPlane(plane)).toStrictEqual(true);

  expect(gameBoard.getBlocks()).toStrictEqual([
    [
      { x: 0, y: 9, type: 2 },
      { x: 1, y: 9, type: 2 },
      { x: 2, y: 9, type: 2 },
      { x: 3, y: 9, type: 2 },
      { x: 4, y: 9, type: 2 },
      { x: 5, y: 9, type: 2 },
      { x: 6, y: 9, type: 2 },
      { x: 7, y: 9, type: 2 },
      { x: 8, y: 9, type: 2 },
      { x: 9, y: 9, type: 2 },
    ],
    [
      { x: 0, y: 8, type: 2 },
      { x: 1, y: 8, type: 2 },
      { x: 2, y: 8, type: 2 },
      { x: 3, y: 8, type: 2 },
      { x: 4, y: 8, type: 1 },
      { x: 5, y: 8, type: 1 },
      { x: 6, y: 8, type: 1 },
      { x: 7, y: 8, type: 2 },
      { x: 8, y: 8, type: 2 },
      { x: 9, y: 8, type: 2 },
    ],
    [
      { x: 0, y: 7, type: 2 },
      { x: 1, y: 7, type: 2 },
      { x: 2, y: 7, type: 2 },
      { x: 3, y: 7, type: 2 },
      { x: 4, y: 7, type: 2 },
      { x: 5, y: 7, type: 1 },
      { x: 6, y: 7, type: 2 },
      { x: 7, y: 7, type: 2 },
      { x: 8, y: 7, type: 2 },
      { x: 9, y: 7, type: 2 },
    ],
    [
      { x: 0, y: 6, type: 2 },
      { x: 1, y: 6, type: 2 },
      { x: 2, y: 6, type: 2 },
      { x: 3, y: 6, type: 2 },
      { x: 4, y: 6, type: 1 },
      { x: 5, y: 6, type: 1 },
      { x: 6, y: 6, type: 1 },
      { x: 7, y: 6, type: 2 },
      { x: 8, y: 6, type: 2 },
      { x: 9, y: 6, type: 2 },
    ],
    [
      { x: 0, y: 5, type: 2 },
      { x: 1, y: 5, type: 2 },
      { x: 2, y: 5, type: 2 },
      { x: 3, y: 5, type: 2 },
      { x: 4, y: 5, type: 2 },
      { x: 5, y: 5, type: 0 },
      { x: 6, y: 5, type: 2 },
      { x: 7, y: 5, type: 2 },
      { x: 8, y: 5, type: 2 },
      { x: 9, y: 5, type: 2 },
    ],
    [
      { x: 0, y: 4, type: 2 },
      { x: 1, y: 4, type: 2 },
      { x: 2, y: 4, type: 2 },
      { x: 3, y: 4, type: 2 },
      { x: 4, y: 4, type: 2 },
      { x: 5, y: 4, type: 2 },
      { x: 6, y: 4, type: 2 },
      { x: 7, y: 4, type: 2 },
      { x: 8, y: 4, type: 2 },
      { x: 9, y: 4, type: 2 },
    ],
    [
      { x: 0, y: 3, type: 2 },
      { x: 1, y: 3, type: 2 },
      { x: 2, y: 3, type: 2 },
      { x: 3, y: 3, type: 2 },
      { x: 4, y: 3, type: 2 },
      { x: 5, y: 3, type: 2 },
      { x: 6, y: 3, type: 2 },
      { x: 7, y: 3, type: 2 },
      { x: 8, y: 3, type: 2 },
      { x: 9, y: 3, type: 2 },
    ],
    [
      { x: 0, y: 2, type: 2 },
      { x: 1, y: 2, type: 2 },
      { x: 2, y: 2, type: 2 },
      { x: 3, y: 2, type: 2 },
      { x: 4, y: 2, type: 2 },
      { x: 5, y: 2, type: 2 },
      { x: 6, y: 2, type: 2 },
      { x: 7, y: 2, type: 2 },
      { x: 8, y: 2, type: 2 },
      { x: 9, y: 2, type: 2 },
    ],
    [
      { x: 0, y: 1, type: 2 },
      { x: 1, y: 1, type: 2 },
      { x: 2, y: 1, type: 2 },
      { x: 3, y: 1, type: 2 },
      { x: 4, y: 1, type: 2 },
      { x: 5, y: 1, type: 2 },
      { x: 6, y: 1, type: 2 },
      { x: 7, y: 1, type: 2 },
      { x: 8, y: 1, type: 2 },
      { x: 9, y: 1, type: 2 },
    ],
    [
      { x: 0, y: 0, type: 2 },
      { x: 1, y: 0, type: 2 },
      { x: 2, y: 0, type: 2 },
      { x: 3, y: 0, type: 2 },
      { x: 4, y: 0, type: 2 },
      { x: 5, y: 0, type: 2 },
      { x: 6, y: 0, type: 2 },
      { x: 7, y: 0, type: 2 },
      { x: 8, y: 0, type: 2 },
      { x: 9, y: 0, type: 2 },
    ],
  ]);
});

it("does not add planes outside of gameboard", () => {
  const gameBoard = Gameboard();

  expect(gameBoard.addPlane(Plane({ x: 0, y: 0 }))).toStrictEqual(false);
  expect(gameBoard.addPlane(Plane({ x: 1, y: 7 }))).toStrictEqual(false);
  expect(gameBoard.addPlane(Plane({ x: 9, y: 0 }))).toStrictEqual(false);
  expect(gameBoard.addPlane(Plane({ x: 9, y: 7 }))).toStrictEqual(false);
  expect(gameBoard.addPlane(Plane({ x: 5, y: 7 }))).toStrictEqual(false);

  expect(gameBoard.getBlocks()).toStrictEqual([
    [
      { x: 0, y: 9, type: 2 },
      { x: 1, y: 9, type: 2 },
      { x: 2, y: 9, type: 2 },
      { x: 3, y: 9, type: 2 },
      { x: 4, y: 9, type: 2 },
      { x: 5, y: 9, type: 2 },
      { x: 6, y: 9, type: 2 },
      { x: 7, y: 9, type: 2 },
      { x: 8, y: 9, type: 2 },
      { x: 9, y: 9, type: 2 },
    ],
    [
      { x: 0, y: 8, type: 2 },
      { x: 1, y: 8, type: 2 },
      { x: 2, y: 8, type: 2 },
      { x: 3, y: 8, type: 2 },
      { x: 4, y: 8, type: 2 },
      { x: 5, y: 8, type: 2 },
      { x: 6, y: 8, type: 2 },
      { x: 7, y: 8, type: 2 },
      { x: 8, y: 8, type: 2 },
      { x: 9, y: 8, type: 2 },
    ],
    [
      { x: 0, y: 7, type: 2 },
      { x: 1, y: 7, type: 2 },
      { x: 2, y: 7, type: 2 },
      { x: 3, y: 7, type: 2 },
      { x: 4, y: 7, type: 2 },
      { x: 5, y: 7, type: 2 },
      { x: 6, y: 7, type: 2 },
      { x: 7, y: 7, type: 2 },
      { x: 8, y: 7, type: 2 },
      { x: 9, y: 7, type: 2 },
    ],
    [
      { x: 0, y: 6, type: 2 },
      { x: 1, y: 6, type: 2 },
      { x: 2, y: 6, type: 2 },
      { x: 3, y: 6, type: 2 },
      { x: 4, y: 6, type: 2 },
      { x: 5, y: 6, type: 2 },
      { x: 6, y: 6, type: 2 },
      { x: 7, y: 6, type: 2 },
      { x: 8, y: 6, type: 2 },
      { x: 9, y: 6, type: 2 },
    ],
    [
      { x: 0, y: 5, type: 2 },
      { x: 1, y: 5, type: 2 },
      { x: 2, y: 5, type: 2 },
      { x: 3, y: 5, type: 2 },
      { x: 4, y: 5, type: 2 },
      { x: 5, y: 5, type: 2 },
      { x: 6, y: 5, type: 2 },
      { x: 7, y: 5, type: 2 },
      { x: 8, y: 5, type: 2 },
      { x: 9, y: 5, type: 2 },
    ],
    [
      { x: 0, y: 4, type: 2 },
      { x: 1, y: 4, type: 2 },
      { x: 2, y: 4, type: 2 },
      { x: 3, y: 4, type: 2 },
      { x: 4, y: 4, type: 2 },
      { x: 5, y: 4, type: 2 },
      { x: 6, y: 4, type: 2 },
      { x: 7, y: 4, type: 2 },
      { x: 8, y: 4, type: 2 },
      { x: 9, y: 4, type: 2 },
    ],
    [
      { x: 0, y: 3, type: 2 },
      { x: 1, y: 3, type: 2 },
      { x: 2, y: 3, type: 2 },
      { x: 3, y: 3, type: 2 },
      { x: 4, y: 3, type: 2 },
      { x: 5, y: 3, type: 2 },
      { x: 6, y: 3, type: 2 },
      { x: 7, y: 3, type: 2 },
      { x: 8, y: 3, type: 2 },
      { x: 9, y: 3, type: 2 },
    ],
    [
      { x: 0, y: 2, type: 2 },
      { x: 1, y: 2, type: 2 },
      { x: 2, y: 2, type: 2 },
      { x: 3, y: 2, type: 2 },
      { x: 4, y: 2, type: 2 },
      { x: 5, y: 2, type: 2 },
      { x: 6, y: 2, type: 2 },
      { x: 7, y: 2, type: 2 },
      { x: 8, y: 2, type: 2 },
      { x: 9, y: 2, type: 2 },
    ],
    [
      { x: 0, y: 1, type: 2 },
      { x: 1, y: 1, type: 2 },
      { x: 2, y: 1, type: 2 },
      { x: 3, y: 1, type: 2 },
      { x: 4, y: 1, type: 2 },
      { x: 5, y: 1, type: 2 },
      { x: 6, y: 1, type: 2 },
      { x: 7, y: 1, type: 2 },
      { x: 8, y: 1, type: 2 },
      { x: 9, y: 1, type: 2 },
    ],
    [
      { x: 0, y: 0, type: 2 },
      { x: 1, y: 0, type: 2 },
      { x: 2, y: 0, type: 2 },
      { x: 3, y: 0, type: 2 },
      { x: 4, y: 0, type: 2 },
      { x: 5, y: 0, type: 2 },
      { x: 6, y: 0, type: 2 },
      { x: 7, y: 0, type: 2 },
      { x: 8, y: 0, type: 2 },
      { x: 9, y: 0, type: 2 },
    ],
  ]);
});

it("gameboard does not add collision plane", () => {
  const gameBoard = Gameboard();

  expect(gameBoard.addPlane(Plane({ x: 5, y: 5 }))).toStrictEqual(true);
  expect(gameBoard.addPlane(Plane({ x: 5, y: 4 }))).toStrictEqual(false);
  expect(gameBoard.addPlane(Plane({ x: 5, y: 8 }))).toStrictEqual(false);
  expect(gameBoard.addPlane(Plane({ x: 5, y: 2 }))).toStrictEqual(false);
  expect(gameBoard.addPlane(Plane({ x: 4, y: 5 }))).toStrictEqual(false);
  expect(gameBoard.addPlane(Plane({ x: 7, y: 5 }))).toStrictEqual(false);

  expect(gameBoard.getBlocks()).toStrictEqual([
    [
      { x: 0, y: 9, type: 2 },
      { x: 1, y: 9, type: 2 },
      { x: 2, y: 9, type: 2 },
      { x: 3, y: 9, type: 2 },
      { x: 4, y: 9, type: 2 },
      { x: 5, y: 9, type: 2 },
      { x: 6, y: 9, type: 2 },
      { x: 7, y: 9, type: 2 },
      { x: 8, y: 9, type: 2 },
      { x: 9, y: 9, type: 2 },
    ],
    [
      { x: 0, y: 8, type: 2 },
      { x: 1, y: 8, type: 2 },
      { x: 2, y: 8, type: 2 },
      { x: 3, y: 8, type: 2 },
      { x: 4, y: 8, type: 1 },
      { x: 5, y: 8, type: 1 },
      { x: 6, y: 8, type: 1 },
      { x: 7, y: 8, type: 2 },
      { x: 8, y: 8, type: 2 },
      { x: 9, y: 8, type: 2 },
    ],
    [
      { x: 0, y: 7, type: 2 },
      { x: 1, y: 7, type: 2 },
      { x: 2, y: 7, type: 2 },
      { x: 3, y: 7, type: 2 },
      { x: 4, y: 7, type: 2 },
      { x: 5, y: 7, type: 1 },
      { x: 6, y: 7, type: 2 },
      { x: 7, y: 7, type: 2 },
      { x: 8, y: 7, type: 2 },
      { x: 9, y: 7, type: 2 },
    ],
    [
      { x: 0, y: 6, type: 2 },
      { x: 1, y: 6, type: 2 },
      { x: 2, y: 6, type: 2 },
      { x: 3, y: 6, type: 2 },
      { x: 4, y: 6, type: 1 },
      { x: 5, y: 6, type: 1 },
      { x: 6, y: 6, type: 1 },
      { x: 7, y: 6, type: 2 },
      { x: 8, y: 6, type: 2 },
      { x: 9, y: 6, type: 2 },
    ],
    [
      { x: 0, y: 5, type: 2 },
      { x: 1, y: 5, type: 2 },
      { x: 2, y: 5, type: 2 },
      { x: 3, y: 5, type: 2 },
      { x: 4, y: 5, type: 2 },
      { x: 5, y: 5, type: 0 },
      { x: 6, y: 5, type: 2 },
      { x: 7, y: 5, type: 2 },
      { x: 8, y: 5, type: 2 },
      { x: 9, y: 5, type: 2 },
    ],
    [
      { x: 0, y: 4, type: 2 },
      { x: 1, y: 4, type: 2 },
      { x: 2, y: 4, type: 2 },
      { x: 3, y: 4, type: 2 },
      { x: 4, y: 4, type: 2 },
      { x: 5, y: 4, type: 2 },
      { x: 6, y: 4, type: 2 },
      { x: 7, y: 4, type: 2 },
      { x: 8, y: 4, type: 2 },
      { x: 9, y: 4, type: 2 },
    ],
    [
      { x: 0, y: 3, type: 2 },
      { x: 1, y: 3, type: 2 },
      { x: 2, y: 3, type: 2 },
      { x: 3, y: 3, type: 2 },
      { x: 4, y: 3, type: 2 },
      { x: 5, y: 3, type: 2 },
      { x: 6, y: 3, type: 2 },
      { x: 7, y: 3, type: 2 },
      { x: 8, y: 3, type: 2 },
      { x: 9, y: 3, type: 2 },
    ],
    [
      { x: 0, y: 2, type: 2 },
      { x: 1, y: 2, type: 2 },
      { x: 2, y: 2, type: 2 },
      { x: 3, y: 2, type: 2 },
      { x: 4, y: 2, type: 2 },
      { x: 5, y: 2, type: 2 },
      { x: 6, y: 2, type: 2 },
      { x: 7, y: 2, type: 2 },
      { x: 8, y: 2, type: 2 },
      { x: 9, y: 2, type: 2 },
    ],
    [
      { x: 0, y: 1, type: 2 },
      { x: 1, y: 1, type: 2 },
      { x: 2, y: 1, type: 2 },
      { x: 3, y: 1, type: 2 },
      { x: 4, y: 1, type: 2 },
      { x: 5, y: 1, type: 2 },
      { x: 6, y: 1, type: 2 },
      { x: 7, y: 1, type: 2 },
      { x: 8, y: 1, type: 2 },
      { x: 9, y: 1, type: 2 },
    ],
    [
      { x: 0, y: 0, type: 2 },
      { x: 1, y: 0, type: 2 },
      { x: 2, y: 0, type: 2 },
      { x: 3, y: 0, type: 2 },
      { x: 4, y: 0, type: 2 },
      { x: 5, y: 0, type: 2 },
      { x: 6, y: 0, type: 2 },
      { x: 7, y: 0, type: 2 },
      { x: 8, y: 0, type: 2 },
      { x: 9, y: 0, type: 2 },
    ],
  ]);
});

it("adds plane object to planes", () => {
  const gameboard = Gameboard();
  const plane = Plane({ x: 5, y: 5 });

  const planes = [];
  planes.push(plane);
  gameboard.addPlane(plane);

  expect(gameboard.getPlanes()).toStrictEqual(planes);
});

it("adds multiple planes without collision", () => {
  const gameboard = Gameboard();
  const plane1 = Plane({ x: 5, y: 5 });
  const plane2 = Plane({ x: 3, y: 4 });
  const plane3 = Plane({ x: 8, y: 4 });

  expect(gameboard.addPlane(plane1)).toStrictEqual(true);
  expect(gameboard.addPlane(plane2)).toStrictEqual(true);
  expect(gameboard.addPlane(plane3)).toStrictEqual(true);

  expect(gameboard.getBlocks()).toStrictEqual([
    [
      { x: 0, y: 9, type: 2 },
      { x: 1, y: 9, type: 2 },
      { x: 2, y: 9, type: 2 },
      { x: 3, y: 9, type: 2 },
      { x: 4, y: 9, type: 2 },
      { x: 5, y: 9, type: 2 },
      { x: 6, y: 9, type: 2 },
      { x: 7, y: 9, type: 2 },
      { x: 8, y: 9, type: 2 },
      { x: 9, y: 9, type: 2 },
    ],
    [
      { x: 0, y: 8, type: 2 },
      { x: 1, y: 8, type: 2 },
      { x: 2, y: 8, type: 2 },
      { x: 3, y: 8, type: 2 },
      { x: 4, y: 8, type: 1 },
      { x: 5, y: 8, type: 1 },
      { x: 6, y: 8, type: 1 },
      { x: 7, y: 8, type: 2 },
      { x: 8, y: 8, type: 2 },
      { x: 9, y: 8, type: 2 },
    ],
    [
      { x: 0, y: 7, type: 2 },
      { x: 1, y: 7, type: 2 },
      { x: 2, y: 7, type: 1 },
      { x: 3, y: 7, type: 1 },
      { x: 4, y: 7, type: 1 },
      { x: 5, y: 7, type: 1 },
      { x: 6, y: 7, type: 2 },
      { x: 7, y: 7, type: 1 },
      { x: 8, y: 7, type: 1 },
      { x: 9, y: 7, type: 1 },
    ],
    [
      { x: 0, y: 6, type: 2 },
      { x: 1, y: 6, type: 2 },
      { x: 2, y: 6, type: 2 },
      { x: 3, y: 6, type: 1 },
      { x: 4, y: 6, type: 1 },
      { x: 5, y: 6, type: 1 },
      { x: 6, y: 6, type: 1 },
      { x: 7, y: 6, type: 2 },
      { x: 8, y: 6, type: 1 },
      { x: 9, y: 6, type: 2 },
    ],
    [
      { x: 0, y: 5, type: 2 },
      { x: 1, y: 5, type: 2 },
      { x: 2, y: 5, type: 1 },
      { x: 3, y: 5, type: 1 },
      { x: 4, y: 5, type: 1 },
      { x: 5, y: 5, type: 0 },
      { x: 6, y: 5, type: 2 },
      { x: 7, y: 5, type: 1 },
      { x: 8, y: 5, type: 1 },
      { x: 9, y: 5, type: 1 },
    ],
    [
      { x: 0, y: 4, type: 2 },
      { x: 1, y: 4, type: 2 },
      { x: 2, y: 4, type: 2 },
      { x: 3, y: 4, type: 0 },
      { x: 4, y: 4, type: 2 },
      { x: 5, y: 4, type: 2 },
      { x: 6, y: 4, type: 2 },
      { x: 7, y: 4, type: 2 },
      { x: 8, y: 4, type: 0 },
      { x: 9, y: 4, type: 2 },
    ],
    [
      { x: 0, y: 3, type: 2 },
      { x: 1, y: 3, type: 2 },
      { x: 2, y: 3, type: 2 },
      { x: 3, y: 3, type: 2 },
      { x: 4, y: 3, type: 2 },
      { x: 5, y: 3, type: 2 },
      { x: 6, y: 3, type: 2 },
      { x: 7, y: 3, type: 2 },
      { x: 8, y: 3, type: 2 },
      { x: 9, y: 3, type: 2 },
    ],
    [
      { x: 0, y: 2, type: 2 },
      { x: 1, y: 2, type: 2 },
      { x: 2, y: 2, type: 2 },
      { x: 3, y: 2, type: 2 },
      { x: 4, y: 2, type: 2 },
      { x: 5, y: 2, type: 2 },
      { x: 6, y: 2, type: 2 },
      { x: 7, y: 2, type: 2 },
      { x: 8, y: 2, type: 2 },
      { x: 9, y: 2, type: 2 },
    ],
    [
      { x: 0, y: 1, type: 2 },
      { x: 1, y: 1, type: 2 },
      { x: 2, y: 1, type: 2 },
      { x: 3, y: 1, type: 2 },
      { x: 4, y: 1, type: 2 },
      { x: 5, y: 1, type: 2 },
      { x: 6, y: 1, type: 2 },
      { x: 7, y: 1, type: 2 },
      { x: 8, y: 1, type: 2 },
      { x: 9, y: 1, type: 2 },
    ],
    [
      { x: 0, y: 0, type: 2 },
      { x: 1, y: 0, type: 2 },
      { x: 2, y: 0, type: 2 },
      { x: 3, y: 0, type: 2 },
      { x: 4, y: 0, type: 2 },
      { x: 5, y: 0, type: 2 },
      { x: 6, y: 0, type: 2 },
      { x: 7, y: 0, type: 2 },
      { x: 8, y: 0, type: 2 },
      { x: 9, y: 0, type: 2 },
    ],
  ]);
});

it("adds multiple planes object to planes", () => {
  const gameboard = Gameboard();
  const plane1 = Plane({ x: 1, y: 1 });
  const plane2 = Plane({ x: 5, y: 2 });
  const plane3 = Plane({ x: 7, y: 6 });
  const planes = [];
  planes.push(plane1);
  planes.push(plane2);
  planes.push(plane3);
  expect(gameboard.addPlane(plane1)).toStrictEqual(true);
  expect(gameboard.addPlane(plane2)).toStrictEqual(true);
  expect(gameboard.addPlane(plane3)).toStrictEqual(true);

  expect(gameboard.getPlanes()).toStrictEqual(planes);
});

it("removes plane", () => {
  const gameBoard = Gameboard();
  const plane = Plane({ x: 5, y: 5 });

  gameBoard.addPlane(plane);

  gameBoard.removePlane(plane);

  expect(gameBoard.getPlanes()).toStrictEqual([]);

  expect(gameBoard.getBlocks()).toStrictEqual([
    [
      { x: 0, y: 9, type: 2 },
      { x: 1, y: 9, type: 2 },
      { x: 2, y: 9, type: 2 },
      { x: 3, y: 9, type: 2 },
      { x: 4, y: 9, type: 2 },
      { x: 5, y: 9, type: 2 },
      { x: 6, y: 9, type: 2 },
      { x: 7, y: 9, type: 2 },
      { x: 8, y: 9, type: 2 },
      { x: 9, y: 9, type: 2 },
    ],
    [
      { x: 0, y: 8, type: 2 },
      { x: 1, y: 8, type: 2 },
      { x: 2, y: 8, type: 2 },
      { x: 3, y: 8, type: 2 },
      { x: 4, y: 8, type: 2 },
      { x: 5, y: 8, type: 2 },
      { x: 6, y: 8, type: 2 },
      { x: 7, y: 8, type: 2 },
      { x: 8, y: 8, type: 2 },
      { x: 9, y: 8, type: 2 },
    ],
    [
      { x: 0, y: 7, type: 2 },
      { x: 1, y: 7, type: 2 },
      { x: 2, y: 7, type: 2 },
      { x: 3, y: 7, type: 2 },
      { x: 4, y: 7, type: 2 },
      { x: 5, y: 7, type: 2 },
      { x: 6, y: 7, type: 2 },
      { x: 7, y: 7, type: 2 },
      { x: 8, y: 7, type: 2 },
      { x: 9, y: 7, type: 2 },
    ],
    [
      { x: 0, y: 6, type: 2 },
      { x: 1, y: 6, type: 2 },
      { x: 2, y: 6, type: 2 },
      { x: 3, y: 6, type: 2 },
      { x: 4, y: 6, type: 2 },
      { x: 5, y: 6, type: 2 },
      { x: 6, y: 6, type: 2 },
      { x: 7, y: 6, type: 2 },
      { x: 8, y: 6, type: 2 },
      { x: 9, y: 6, type: 2 },
    ],
    [
      { x: 0, y: 5, type: 2 },
      { x: 1, y: 5, type: 2 },
      { x: 2, y: 5, type: 2 },
      { x: 3, y: 5, type: 2 },
      { x: 4, y: 5, type: 2 },
      { x: 5, y: 5, type: 2 },
      { x: 6, y: 5, type: 2 },
      { x: 7, y: 5, type: 2 },
      { x: 8, y: 5, type: 2 },
      { x: 9, y: 5, type: 2 },
    ],
    [
      { x: 0, y: 4, type: 2 },
      { x: 1, y: 4, type: 2 },
      { x: 2, y: 4, type: 2 },
      { x: 3, y: 4, type: 2 },
      { x: 4, y: 4, type: 2 },
      { x: 5, y: 4, type: 2 },
      { x: 6, y: 4, type: 2 },
      { x: 7, y: 4, type: 2 },
      { x: 8, y: 4, type: 2 },
      { x: 9, y: 4, type: 2 },
    ],
    [
      { x: 0, y: 3, type: 2 },
      { x: 1, y: 3, type: 2 },
      { x: 2, y: 3, type: 2 },
      { x: 3, y: 3, type: 2 },
      { x: 4, y: 3, type: 2 },
      { x: 5, y: 3, type: 2 },
      { x: 6, y: 3, type: 2 },
      { x: 7, y: 3, type: 2 },
      { x: 8, y: 3, type: 2 },
      { x: 9, y: 3, type: 2 },
    ],
    [
      { x: 0, y: 2, type: 2 },
      { x: 1, y: 2, type: 2 },
      { x: 2, y: 2, type: 2 },
      { x: 3, y: 2, type: 2 },
      { x: 4, y: 2, type: 2 },
      { x: 5, y: 2, type: 2 },
      { x: 6, y: 2, type: 2 },
      { x: 7, y: 2, type: 2 },
      { x: 8, y: 2, type: 2 },
      { x: 9, y: 2, type: 2 },
    ],
    [
      { x: 0, y: 1, type: 2 },
      { x: 1, y: 1, type: 2 },
      { x: 2, y: 1, type: 2 },
      { x: 3, y: 1, type: 2 },
      { x: 4, y: 1, type: 2 },
      { x: 5, y: 1, type: 2 },
      { x: 6, y: 1, type: 2 },
      { x: 7, y: 1, type: 2 },
      { x: 8, y: 1, type: 2 },
      { x: 9, y: 1, type: 2 },
    ],
    [
      { x: 0, y: 0, type: 2 },
      { x: 1, y: 0, type: 2 },
      { x: 2, y: 0, type: 2 },
      { x: 3, y: 0, type: 2 },
      { x: 4, y: 0, type: 2 },
      { x: 5, y: 0, type: 2 },
      { x: 6, y: 0, type: 2 },
      { x: 7, y: 0, type: 2 },
      { x: 8, y: 0, type: 2 },
      { x: 9, y: 0, type: 2 },
    ],
  ]);
});

it("adds plane and rotates", () => {
  const gameboard = Gameboard();
  const plane1 = Plane({ x: 1, y: 2 });
  const plane2 = Plane({ x: 7, y: 5 });

  gameboard.addPlane(plane1);
  gameboard.addPlane(plane2);
  gameboard.rotate(plane2);

  expect(gameboard.getBlocks()).toStrictEqual([
    [
      { x: 0, y: 9, type: 2 },
      { x: 1, y: 9, type: 2 },
      { x: 2, y: 9, type: 2 },
      { x: 3, y: 9, type: 2 },
      { x: 4, y: 9, type: 2 },
      { x: 5, y: 9, type: 2 },
      { x: 6, y: 9, type: 2 },
      { x: 7, y: 9, type: 2 },
      { x: 8, y: 9, type: 2 },
      { x: 9, y: 9, type: 2 },
    ],
    [
      { x: 0, y: 8, type: 2 },
      { x: 1, y: 8, type: 2 },
      { x: 2, y: 8, type: 2 },
      { x: 3, y: 8, type: 2 },
      { x: 4, y: 8, type: 2 },
      { x: 5, y: 8, type: 2 },
      { x: 6, y: 8, type: 2 },
      { x: 7, y: 8, type: 2 },
      { x: 8, y: 8, type: 2 },
      { x: 9, y: 8, type: 2 },
    ],
    [
      { x: 0, y: 7, type: 2 },
      { x: 1, y: 7, type: 2 },
      { x: 2, y: 7, type: 2 },
      { x: 3, y: 7, type: 2 },
      { x: 4, y: 7, type: 2 },
      { x: 5, y: 7, type: 2 },
      { x: 6, y: 7, type: 1 },
      { x: 7, y: 7, type: 2 },
      { x: 8, y: 7, type: 1 },
      { x: 9, y: 7, type: 2 },
    ],
    [
      { x: 0, y: 6, type: 2 },
      { x: 1, y: 6, type: 2 },
      { x: 2, y: 6, type: 2 },
      { x: 3, y: 6, type: 2 },
      { x: 4, y: 6, type: 2 },
      { x: 5, y: 6, type: 2 },
      { x: 6, y: 6, type: 1 },
      { x: 7, y: 6, type: 1 },
      { x: 8, y: 6, type: 1 },
      { x: 9, y: 6, type: 0 },
    ],
    [
      { x: 0, y: 5, type: 1 },
      { x: 1, y: 5, type: 1 },
      { x: 2, y: 5, type: 1 },
      { x: 3, y: 5, type: 2 },
      { x: 4, y: 5, type: 2 },
      { x: 5, y: 5, type: 2 },
      { x: 6, y: 5, type: 1 },
      { x: 7, y: 5, type: 2 },
      { x: 8, y: 5, type: 1 },
      { x: 9, y: 5, type: 2 },
    ],
    [
      { x: 0, y: 4, type: 2 },
      { x: 1, y: 4, type: 1 },
      { x: 2, y: 4, type: 2 },
      { x: 3, y: 4, type: 2 },
      { x: 4, y: 4, type: 2 },
      { x: 5, y: 4, type: 2 },
      { x: 6, y: 4, type: 2 },
      { x: 7, y: 4, type: 2 },
      { x: 8, y: 4, type: 2 },
      { x: 9, y: 4, type: 2 },
    ],
    [
      { x: 0, y: 3, type: 1 },
      { x: 1, y: 3, type: 1 },
      { x: 2, y: 3, type: 1 },
      { x: 3, y: 3, type: 2 },
      { x: 4, y: 3, type: 2 },
      { x: 5, y: 3, type: 2 },
      { x: 6, y: 3, type: 2 },
      { x: 7, y: 3, type: 2 },
      { x: 8, y: 3, type: 2 },
      { x: 9, y: 3, type: 2 },
    ],
    [
      { x: 0, y: 2, type: 2 },
      { x: 1, y: 2, type: 0 },
      { x: 2, y: 2, type: 2 },
      { x: 3, y: 2, type: 2 },
      { x: 4, y: 2, type: 2 },
      { x: 5, y: 2, type: 2 },
      { x: 6, y: 2, type: 2 },
      { x: 7, y: 2, type: 2 },
      { x: 8, y: 2, type: 2 },
      { x: 9, y: 2, type: 2 },
    ],
    [
      { x: 0, y: 1, type: 2 },
      { x: 1, y: 1, type: 2 },
      { x: 2, y: 1, type: 2 },
      { x: 3, y: 1, type: 2 },
      { x: 4, y: 1, type: 2 },
      { x: 5, y: 1, type: 2 },
      { x: 6, y: 1, type: 2 },
      { x: 7, y: 1, type: 2 },
      { x: 8, y: 1, type: 2 },
      { x: 9, y: 1, type: 2 },
    ],
    [
      { x: 0, y: 0, type: 2 },
      { x: 1, y: 0, type: 2 },
      { x: 2, y: 0, type: 2 },
      { x: 3, y: 0, type: 2 },
      { x: 4, y: 0, type: 2 },
      { x: 5, y: 0, type: 2 },
      { x: 6, y: 0, type: 2 },
      { x: 7, y: 0, type: 2 },
      { x: 8, y: 0, type: 2 },
      { x: 9, y: 0, type: 2 },
    ],
  ]);
});

it("adds plane, rotates and removes if collides", () => {
  const gameboard = Gameboard();
  const plane1 = Plane({ x: 5, y: 5 });
  const plane2 = Plane({ x: 2, y: 5 });

  expect(gameboard.addPlane(plane1)).toStrictEqual(true);
  expect(gameboard.addPlane(plane2)).toStrictEqual(true);
  gameboard.addPlane(plane1);
  gameboard.addPlane(plane2);

  expect(gameboard.rotate(plane2)).toStrictEqual(false);

  expect(gameboard.getBlocks()).toStrictEqual([
    [
      { x: 0, y: 9, type: 2 },
      { x: 1, y: 9, type: 2 },
      { x: 2, y: 9, type: 2 },
      { x: 3, y: 9, type: 2 },
      { x: 4, y: 9, type: 2 },
      { x: 5, y: 9, type: 2 },
      { x: 6, y: 9, type: 2 },
      { x: 7, y: 9, type: 2 },
      { x: 8, y: 9, type: 2 },
      { x: 9, y: 9, type: 2 },
    ],
    [
      { x: 0, y: 8, type: 2 },
      { x: 1, y: 8, type: 2 },
      { x: 2, y: 8, type: 2 },
      { x: 3, y: 8, type: 2 },
      { x: 4, y: 8, type: 1 },
      { x: 5, y: 8, type: 1 },
      { x: 6, y: 8, type: 1 },
      { x: 7, y: 8, type: 2 },
      { x: 8, y: 8, type: 2 },
      { x: 9, y: 8, type: 2 },
    ],
    [
      { x: 0, y: 7, type: 2 },
      { x: 1, y: 7, type: 2 },
      { x: 2, y: 7, type: 2 },
      { x: 3, y: 7, type: 2 },
      { x: 4, y: 7, type: 2 },
      { x: 5, y: 7, type: 1 },
      { x: 6, y: 7, type: 2 },
      { x: 7, y: 7, type: 2 },
      { x: 8, y: 7, type: 2 },
      { x: 9, y: 7, type: 2 },
    ],
    [
      { x: 0, y: 6, type: 2 },
      { x: 1, y: 6, type: 2 },
      { x: 2, y: 6, type: 2 },
      { x: 3, y: 6, type: 2 },
      { x: 4, y: 6, type: 1 },
      { x: 5, y: 6, type: 1 },
      { x: 6, y: 6, type: 1 },
      { x: 7, y: 6, type: 2 },
      { x: 8, y: 6, type: 2 },
      { x: 9, y: 6, type: 2 },
    ],
    [
      { x: 0, y: 5, type: 2 },
      { x: 1, y: 5, type: 2 },
      { x: 2, y: 5, type: 2 },
      { x: 3, y: 5, type: 2 },
      { x: 4, y: 5, type: 2 },
      { x: 5, y: 5, type: 0 },
      { x: 6, y: 5, type: 2 },
      { x: 7, y: 5, type: 2 },
      { x: 8, y: 5, type: 2 },
      { x: 9, y: 5, type: 2 },
    ],
    [
      { x: 0, y: 4, type: 2 },
      { x: 1, y: 4, type: 2 },
      { x: 2, y: 4, type: 2 },
      { x: 3, y: 4, type: 2 },
      { x: 4, y: 4, type: 2 },
      { x: 5, y: 4, type: 2 },
      { x: 6, y: 4, type: 2 },
      { x: 7, y: 4, type: 2 },
      { x: 8, y: 4, type: 2 },
      { x: 9, y: 4, type: 2 },
    ],
    [
      { x: 0, y: 3, type: 2 },
      { x: 1, y: 3, type: 2 },
      { x: 2, y: 3, type: 2 },
      { x: 3, y: 3, type: 2 },
      { x: 4, y: 3, type: 2 },
      { x: 5, y: 3, type: 2 },
      { x: 6, y: 3, type: 2 },
      { x: 7, y: 3, type: 2 },
      { x: 8, y: 3, type: 2 },
      { x: 9, y: 3, type: 2 },
    ],
    [
      { x: 0, y: 2, type: 2 },
      { x: 1, y: 2, type: 2 },
      { x: 2, y: 2, type: 2 },
      { x: 3, y: 2, type: 2 },
      { x: 4, y: 2, type: 2 },
      { x: 5, y: 2, type: 2 },
      { x: 6, y: 2, type: 2 },
      { x: 7, y: 2, type: 2 },
      { x: 8, y: 2, type: 2 },
      { x: 9, y: 2, type: 2 },
    ],
    [
      { x: 0, y: 1, type: 2 },
      { x: 1, y: 1, type: 2 },
      { x: 2, y: 1, type: 2 },
      { x: 3, y: 1, type: 2 },
      { x: 4, y: 1, type: 2 },
      { x: 5, y: 1, type: 2 },
      { x: 6, y: 1, type: 2 },
      { x: 7, y: 1, type: 2 },
      { x: 8, y: 1, type: 2 },
      { x: 9, y: 1, type: 2 },
    ],
    [
      { x: 0, y: 0, type: 2 },
      { x: 1, y: 0, type: 2 },
      { x: 2, y: 0, type: 2 },
      { x: 3, y: 0, type: 2 },
      { x: 4, y: 0, type: 2 },
      { x: 5, y: 0, type: 2 },
      { x: 6, y: 0, type: 2 },
      { x: 7, y: 0, type: 2 },
      { x: 8, y: 0, type: 2 },
      { x: 9, y: 0, type: 2 },
    ],
  ]);
});

function drawBoard(blocks) {
  let str = "";

  for (let i = 0; i < blocks.length; i++) {
    str = str.concat("\n");
    for (let j = 0; j < blocks.length; j++) {
      str = str.concat("x=" + blocks[i][j].x + " " + "y=" + blocks[i][j].y);
      if (blocks[i][j].type == 0) str = str.concat("    h");
      if (blocks[i][j].type == 1) str = str.concat("    @");
      if (blocks[i][j].type == 2) str = str.concat("    _");
      if (blocks[i][j].type == 3) str = str.concat("    x");
      str = str.concat("   |   ");
    }
  }
  console.log(str);
  return str;
}
