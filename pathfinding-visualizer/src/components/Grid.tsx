import { usePathFinding } from "@/hooks";
import { MAX_COLS, MAX_ROWS, checkIfStartOrEnd, generateNewGrid } from "@/libs";
import { twMerge } from "tailwind-merge";
import { Tile } from "./Tile";
import { MutableRefObject, useState } from "react";

export const Grid = ({
  isVisualizationRunning,
}: {
  isVisualizationRunning: MutableRefObject<boolean>;
}) => {
  const { grid, setGrid } = usePathFinding();
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = (row: number, col: number) => {
    if (isVisualizationRunning.current || checkIfStartOrEnd(row, col)) return;

    setIsMouseDown(true);
    const newGrid = generateNewGrid(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = (row: number, col: number) => {
    if (isVisualizationRunning.current || checkIfStartOrEnd(row, col)) return;

    setIsMouseDown(false);
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (isVisualizationRunning.current || checkIfStartOrEnd(row, col)) return;
    if (!isMouseDown) return;

    const newGrid = generateNewGrid(grid, row, col);
    setGrid(newGrid);
  };

  return (
    <div
      className={twMerge(
        "flex items-center flex-col justify-center border-sky-300 mt-10",
        `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${MAX_ROWS * 15}px]
         xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
        `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px]
         xs:w-[${MAX_COLS * 8}px] w-[${MAX_COLS * 7}px]`,
      )}
    >
      {grid.map((row, rowIndex) => (
        <div className="flex" key={rowIndex}>
          {row.map((tile, tileIndex) => (
            <Tile
              key={tileIndex}
              {...tile}
              handleMouseDown={() => handleMouseDown(tile.row, tile.col)}
              handleMouseEnter={() => handleMouseEnter(tile.row, tile.col)}
              handleMouseUp={() => handleMouseUp(tile.row, tile.col)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
