import { usePathFinding, useTile } from "@/hooks";
import { Select } from "./Select";
import { MAZES, MazeType, resetGrid } from "@/libs";
import { useState } from "react";

export const Nav = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { maze, setMaze, grid } = usePathFinding();
  const { startTile, endTile } = useTile();

  const handleGenerateMaze = (maze: MazeType) => {
    if (maze === "NONE") {
      setMaze(maze);
      resetGrid({ grid, startTile, endTile });
      return;
    }

    setMaze(maze);
    setIsDisabled(true);
  };

  return (
    <div className="flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-600 sm:px-5 px-0">
      <div className="flex items-center lg:justify-between justify-center w-full sm:w-[52rem]">
        <h1 className="hidden lg:flex w-[40%] text-2xl pl-1">PathFinding Visualizer</h1>
        <div className="flex flex-col items-center justify-start py-4 space-y-3 sm:items-end sm:justify-between sm:flex-row sm:space-y-0 sm:py-0 sm:space-x-4">
          <Select
            label="Maze"
            value={maze}
            options={MAZES}
            onChange={(e) => handleGenerateMaze(e.target.value as MazeType)}
          />
        </div>
      </div>
    </div>
  );
};
