import {
  GridType,
  TileType,
  dropFromQueue,
  getUntraversedNeighbors,
  initFunctionCost,
  initHeuristicCost,
  isEqual,
} from "@/libs";

export const aStar = (grid: GridType, startTile: TileType, endTile: TileType) => {
  const traversedTiles = [];
  const heuristicCost = initHeuristicCost(grid, endTile);
  const functionCost = initFunctionCost();
  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  functionCost[base.row][base.col] = base.distance + heuristicCost[base.row][base.col];
  base.isTraversed = true;
  const untraversed = [base];

  while (untraversed.length) {
    untraversed.sort((a, b) => {
      if (functionCost[a.row][a.col] === functionCost[b.row][b.col]) {
        return b.distance - a.distance;
      }
      return functionCost[a.row][a.col] - functionCost[b.row][b.col];
    });
    const tile = untraversed.shift()!;
    if (tile.isWall) continue;
    if (tile.distance === Infinity) break;
    tile.isTraversed = true;
    traversedTiles.push(tile);
    if (isEqual(tile, endTile)) break;

    const neighbors = getUntraversedNeighbors(grid, tile);
    for (let i = 0; i < neighbors.length; i++) {
      const distanceToNeighbor = tile.distance + 1;
      if (distanceToNeighbor < neighbors[i].distance) {
        dropFromQueue(neighbors[i], untraversed);
        const neighbor = neighbors[i];
        neighbor.distance = distanceToNeighbor;
        functionCost[neighbor.row][neighbor.col] =
          neighbor.distance + heuristicCost[neighbor.row][neighbor.col];
        neighbor.parent = tile;
        untraversed.push(neighbor);
      }
    }
  }

  const path = [];
  let current = grid[endTile.row][endTile.col];
  while (current !== null) {
    current.isPath = true;
    path.unshift(current);
    current = current.parent!;
  }

  return { traversedTiles, path };
};
