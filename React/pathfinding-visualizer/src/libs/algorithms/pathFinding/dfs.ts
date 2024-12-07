import { GridType, TileType, checkStack, getUntraversedNeighbors, isEqual } from "@/libs";

export const dfs = (grid: GridType, startTile: TileType, endTile: TileType) => {
  const traversedTiles: TileType[] = [];
  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  base.isTraversed = true;
  const untraversed = [base];

  while (untraversed.length) {
    const tile = untraversed.pop()!;
    if (tile.isWall) continue;
    if (tile.distance === Infinity) break;
    tile.isTraversed = true;
    traversedTiles.push(tile);
    if (isEqual(tile, endTile)) break;

    const neighbors = getUntraversedNeighbors(grid, tile);
    for (let i = 0; i < neighbors.length; i++) {
      if (!checkStack(neighbors[i], untraversed)) {
        const neighbor = neighbors[i];
        neighbor.distance = tile.distance + 1;
        neighbor.parent = tile;
        untraversed.push(neighbor);
      }
    }
  }

  const path = [];
  let tile = grid[endTile.row][endTile.col];
  while (tile !== null) {
    tile.isPath = true;
    path.unshift(tile);
    tile = tile.parent!;
  }
  return { traversedTiles, path };
};
