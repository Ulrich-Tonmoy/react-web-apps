import {
  GridType,
  SPEEDS,
  SpeedType,
  TileType,
  WALL_TILE_STYLE,
  getRandInt,
  isEqual,
  recursiveDivision,
  sleep,
} from "@/libs";

export const horizontalDivision = async ({
  grid,
  startTile,
  endTile,
  row,
  col,
  height,
  width,
  setIsDisabled,
  speed,
}: {
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
  row: number;
  col: number;
  height: number;
  width: number;
  setIsDisabled: (disabled: boolean) => void;
  speed: SpeedType;
}) => {
  const makeWallAt = row + getRandInt(0, height - 1) * 2 + 1;
  const makePassageAt = col + getRandInt(0, width) * 2;

  for (let i = 0; i < 2 * width - 1; i += 1) {
    if (makePassageAt !== col + i) {
      if (
        !isEqual(grid[makeWallAt][col + i], startTile) &&
        !isEqual(grid[makeWallAt][col + i], endTile)
      ) {
        grid[makeWallAt][col + i].isWall = true;

        document.getElementById(
          `${makeWallAt}-${col + i}`,
        )!.className = `${WALL_TILE_STYLE} animate-wall`;
        await sleep(10 * SPEEDS.find((s) => s.value === speed)!.value - 5);
      }
    }
  }
  await recursiveDivision({
    grid,
    startTile,
    endTile,
    row,
    col,
    height: (makeWallAt - row + 1) / 2,
    width,
    setIsDisabled,
    speed,
  });
  await recursiveDivision({
    grid,
    startTile,
    endTile,
    row: makeWallAt + 1,
    col,
    height: height - (makeWallAt - row + 1) / 2,
    width,
    setIsDisabled,
    speed,
  });
};
