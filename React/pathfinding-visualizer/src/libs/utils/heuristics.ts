import { MAX_COLS, MAX_ROWS } from "../constants";
import { GridType, TileType } from "../types";

const retrieveHeuristicCost = (currentTile: TileType, endTile: TileType) => {
  const manhattanDistance = 1;
  const row = Math.abs(currentTile.row - endTile.row);
  const col = Math.abs(currentTile.col - endTile.col);
  return manhattanDistance * (row + col);
};

export const initHeuristicCost = (grid: GridType, endTile: TileType) => {
  const heuristicCost = [];
  for (let i = 0; i < MAX_ROWS; i += 1) {
    const row = [];
    for (let j = 0; j < MAX_COLS; j += 1) {
      row.push(retrieveHeuristicCost(grid[i][j], endTile));
    }
    heuristicCost.push(row);
  }
  return heuristicCost;
};

export const initFunctionCost = () => {
  const functionCost = [];
  for (let i = 0; i < MAX_ROWS; i += 1) {
    const row = [];
    for (let j = 0; j < MAX_COLS; j += 1) {
      row.push(Infinity);
    }
    functionCost.push(row);
  }
  return functionCost;
};
