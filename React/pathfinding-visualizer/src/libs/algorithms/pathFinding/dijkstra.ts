import {
  GridType,
  TileType,
  dropFromQueue,
  getUntraversedNeighbors,
  isEqual,
} from "@/libs";

export const dijkstra = (grid: GridType, startTile: TileType, endTile: TileType) => {
  const traversedTiles: TileType[] = [];
  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  base.isTraversed = true;
  const untraversed = [base];

  while (untraversed.length) {
    untraversed.sort((a, b) => a.distance - b.distance);
    const tile = untraversed.shift()!;
    if (tile.isWall) continue;
    if (tile.distance === Infinity) break;
    tile.isTraversed = true;
    traversedTiles.push(tile);
    if (isEqual(tile, endTile)) break;

    const neighbors = getUntraversedNeighbors(grid, tile);
    for (let i = 0; i < neighbors.length; i++) {
      if (tile.distance + 1 < neighbors[i].distance) {
        dropFromQueue(neighbors[i], untraversed);
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
