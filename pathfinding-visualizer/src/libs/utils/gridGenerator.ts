import { MAX_COLS, MAX_ROWS, GridType, TileType } from "@/libs";

const createRow = (row: number, startTile: TileType, endTile: TileType): TileType[] => {
  const currentRow: TileType[] = [];

  for (let col = 0; col < MAX_COLS; col++) {
    currentRow.push({
      row,
      col,
      isEnd: row === endTile.row && col === endTile.col,
      isWall: false,
      isPath: false,
      distance: Infinity,
      isTraversed: false,
      isStart: row === startTile.row && col === startTile.col,
      parent: null,
    });
  }

  return currentRow;
};

export const generateGrid = (startTile: TileType, endTile: TileType): GridType => {
  const grid: GridType = [];

  for (let row = 0; row < MAX_ROWS; row++) {
    grid.push(createRow(row, startTile, endTile));
  }

  return grid;
};

export const generateNewGrid = (grid: GridType, row: number, col: number): GridType => {
  const newGrid: GridType = grid.slice();
  newGrid[row][col].isWall = !newGrid[row][col].isWall;
  return newGrid;
};
