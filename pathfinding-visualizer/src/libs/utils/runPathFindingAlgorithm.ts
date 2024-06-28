import { AlgorithmType, GridType, TileType } from "../types";
import { bfs, dfs } from "../algorithms";

export const runPathFindingAlgorithm = ({
  algorithm,
  grid,
  startTile,
  endTile,
}: {
  algorithm: AlgorithmType;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
}) => {
  switch (algorithm) {
    case "BFS":
      return bfs(grid, startTile, endTile);
    case "DFS":
      return dfs(grid, startTile, endTile);
    default:
      return bfs(grid, startTile, endTile);
  }
};
