import { usePathFinding, useSpeed, useTile } from "@/hooks";
import { Select } from "./Select";
import {
  AlgorithmType,
  EXTENDED_SLEEP_TIME,
  MAZES,
  MazeType,
  PATH_FINDING_ALGORITHMS,
  SLEEP_TIME,
  SPEEDS,
  SpeedType,
  animatePath,
  resetGrid,
  runMazeAlgorithm,
  runPathFindingAlgorithm,
} from "@/libs";
import { MutableRefObject, useState } from "react";
import { PlayButton } from "./PlayButton";

export const Nav = ({
  isVisualizationRunning,
}: {
  isVisualizationRunning: MutableRefObject<boolean>;
}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    maze,
    setMaze,
    grid,
    setGrid,
    isGraphVisualized,
    setIsGraphVisualized,
    algorithm,
    setAlgorithm,
  } = usePathFinding();
  const { startTile, endTile } = useTile();
  const { speed, setSpeed } = useSpeed();

  const handleGenerateMaze = (maze: MazeType) => {
    if (maze === "NONE") {
      setMaze(maze);
      resetGrid({ grid, startTile, endTile });
      return;
    }

    setMaze(maze);
    setIsDisabled(true);
    runMazeAlgorithm({
      maze,
      grid,
      startTile,
      endTile,
      setIsDisabled,
      speed,
    });

    const newGrid = grid.slice();
    setGrid(newGrid);
    setIsGraphVisualized(false);
  };

  const handlerRunVisualizer = () => {
    if (isGraphVisualized) {
      setIsGraphVisualized(false);
      resetGrid({ grid: grid.slice(), startTile, endTile });
      setSpeed(0.5);
      setAlgorithm("BFS");
      setMaze("NONE");
      return;
    }

    const { traversedTiles, path } = runPathFindingAlgorithm({
      algorithm,
      grid,
      startTile,
      endTile,
    });

    animatePath(traversedTiles, path, startTile, endTile, speed);
    setIsDisabled(true);
    isVisualizationRunning.current = true;
    setTimeout(() => {
      const newGrid = grid.slice();
      setGrid(newGrid);
      setIsGraphVisualized(true);
      setIsDisabled(false);
      isVisualizationRunning.current = false;
    }, SLEEP_TIME * (traversedTiles.length + SLEEP_TIME * 2) + EXTENDED_SLEEP_TIME * (path.length + 60) * SPEEDS.find((s) => s.value === speed)!.value);
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
          <Select
            label="Graph"
            value={algorithm}
            options={PATH_FINDING_ALGORITHMS}
            onChange={(e) => setAlgorithm(e.target.value as AlgorithmType)}
          />
          <Select
            label="Speed"
            value={speed}
            options={SPEEDS}
            onChange={(e) => setSpeed(parseInt(e.target.value) as SpeedType)}
          />
          <PlayButton
            isDisabled={isDisabled}
            isGraphVisualized={isGraphVisualized}
            handlerRunVisualizer={handlerRunVisualizer}
          />
        </div>
      </div>
    </div>
  );
};
