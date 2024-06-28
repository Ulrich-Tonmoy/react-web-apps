import { GridType, SpeedType, TileType } from "src/libs/types";
import { sleep } from "../../utils/helper";
import { createWall } from "../../utils/createWall";
import { MAX_ROWS, MAX_COLS } from "../../constants";

export const binaryTree = async (
  grid: GridType,
  startTile: TileType,
  endTile: TileType,
  setIsDisabled: (disabled: boolean) => void,
  speed: SpeedType,
) => {
  createWall(startTile, endTile, speed);
  await sleep(MAX_ROWS * MAX_COLS);
};
