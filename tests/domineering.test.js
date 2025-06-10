import { Domineering } from "../src/domineering/model/domineering";
import { Direction } from "../src/domineering/model/player";
import { expect, test } from 'vitest'


test('board creation to have a square of 0', () => {
  const vplayerName = "vplayer";
  const hplayerName = "hplayer";
  const game = new Domineering(vplayerName, hplayerName);

  expect(game.board[2][0]).toBe(0);
});

test('validates for completely off row/col', () => {
  const vplayerName = "vplayer";
  const hplayerName = "hplayer";
  const game = new Domineering(vplayerName, hplayerName);
  const row = Domineering.MAX_ROWS;
  const col = 0;
  const direction = Direction.Vertical;

  const expected = false;

  expect(game.validateMove(row, col, direction)).toBe(expected);
});

test('validates for out of bound square, vertical', () => {
  const vplayerName = "vplayer";
  const hplayerName = "hplayer";
  const game = new Domineering(vplayerName, hplayerName);
  
  const row = Domineering.MAX_ROWS-1;
  const col = 0;
  const direction = Direction.Vertical;

  const expected = false;

  expect(game.validateMove(row, col, direction)).toBe(expected);
});

test('validates for out of bound square, horizontal', () => {
  const vplayerName = "vplayer";
  const hplayerName = "hplayer";
  const game = new Domineering(vplayerName, hplayerName);
  
  const row = 0;
  const col = Domineering.MAX_COLS - 1;
  const direction = Direction.Horizontal;

  const expected = false;

  expect(game.validateMove(row, col, direction)).toBe(expected);
});

test('validates for filled square ending, invalid, vertical', () => {
  const vplayerName = "vplayer";
  const hplayerName = "hplayer";
  const game = new Domineering(vplayerName, hplayerName);
  
  const rowFilled = 1;
  const colFilled = 0;

  const rowPlaced = 0;
  const colPlaced = 0;

  const direction = Direction.Vertical;

  const expected = false;

  game.board[rowFilled][colFilled] = Domineering.FILLED;

  expect(game.validateMove(rowPlaced, colPlaced, direction)).toBe(expected);
});

test('validates for filled square starting, invalid, vertical', () => {
  const vplayerName = "vplayer";
  const hplayerName = "hplayer";
  const game = new Domineering(vplayerName, hplayerName);
  
  const rowFilled = 1;
  const colFilled = 0;

  const rowPlaced = 1;
  const colPlaced = 0;

  const direction = Direction.Vertical;

  const expected = false;

  game.board[rowFilled][colFilled] = Domineering.FILLED;

  expect(game.validateMove(rowPlaced, colPlaced, direction)).toBe(expected);
});

test('validates for filled square, valid, vertical', () => {
  const vplayerName = "vplayer";
  const hplayerName = "hplayer";
  const game = new Domineering(vplayerName, hplayerName);
  
  const rowFilled = 1;
  const colFilled = 0;

  const rowPlaced = 1;
  const colPlaced = 1;

  const direction = Direction.Vertical;

  const expected = true;

  game.board[rowFilled][colFilled] = Domineering.FILLED;

  expect(game.validateMove(rowPlaced, colPlaced, direction)).toBe(expected);
});

test('validates for filled square ending, invalid, horizontal', () => {
  const vplayerName = "vplayer";
  const hplayerName = "hplayer";
  const game = new Domineering(vplayerName, hplayerName);
  
  const rowFilled = 0;
  const colFilled = 1;

  const rowPlaced = 0;
  const colPlaced = 0;

  const direction = Direction.Horizontal;

  const expected = false;

  game.board[rowFilled][colFilled] = Domineering.FILLED;

  expect(game.validateMove(rowPlaced, colPlaced, direction)).toBe(expected);
});

test('validates for filled square starting, invalid, horizontal', () => {
  const vplayerName = "vplayer";
  const hplayerName = "hplayer";
  const game = new Domineering(vplayerName, hplayerName);
  
  const rowFilled = 0;
  const colFilled = 1;

  const rowPlaced = 0;
  const colPlaced = 1;

  const direction = Direction.Horizontal;

  const expected = false;

  game.board[rowFilled][colFilled] = Domineering.FILLED;

  expect(game.validateMove(rowPlaced, colPlaced, direction)).toBe(expected);
});

test('validates for filled square, valid, horizontal', () => {
  const vplayerName = "vplayer";
  const hplayerName = "hplayer";
  const game = new Domineering(vplayerName, hplayerName);
  
  const rowFilled = 0;
  const colFilled = 1;

  const rowPlaced = 1;
  const colPlaced = 1;

  const direction = Direction.Horizontal;

  const expected = true;

  game.board[rowFilled][colFilled] = Domineering.FILLED;

  expect(game.validateMove(rowPlaced, colPlaced, direction)).toBe(expected);
});

test('validates prope', () => {
  const vplayerName = "vplayer";
  const hplayerName = "hplayer";
  const game = new Domineering(vplayerName, hplayerName);
  
  const rowFilled = 0;
  const colFilled = 1;

  const rowPlaced = 1;
  const colPlaced = 1;

  const direction = Direction.Horizontal;

  const expected = true;

  game.board[rowFilled][colFilled] = Domineering.FILLED;

  expect(game.validateMove(rowPlaced, colPlaced, direction)).toBe(expected);
});

