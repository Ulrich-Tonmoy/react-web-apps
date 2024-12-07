import { useCallback, useEffect, useRef, useState } from "react";
import { COLS, createEmptyGrid, DIRECTIONS, getGridSize, ROWS } from "@/libs";
import { twMerge } from "tailwind-merge";
import { Button, PlayPauseButton, Select } from "@/components";
import { FaGithub } from "react-icons/fa";

function App() {
  const [grid, setGrid] = useState<number[][]>(createEmptyGrid());
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [cellSize, setCellSize] = useState(getGridSize());

  const speedRef = useRef(speed);
  speedRef.current = speed;

  const playingRef = useRef(isPlaying);
  playingRef.current = isPlaying;

  const runGameOfLife = useCallback(() => {
    if (!playingRef.current) return;

    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((arr) => [...arr]);

      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          let liveNeighbors = 0;

          DIRECTIONS.forEach(([x, y]) => {
            const neighborRow = row + x;
            const neighborCol = col + y;

            if (
              neighborRow >= 0 &&
              neighborRow < ROWS &&
              neighborCol >= 0 &&
              neighborCol < COLS
            ) {
              liveNeighbors += prevGrid[neighborRow][neighborCol] ? 1 : 0;
            }
          });

          if (liveNeighbors < 2 || liveNeighbors > 3) {
            newGrid[row][col] = 0;
          } else if (prevGrid[row][col] === 0 && liveNeighbors === 3) {
            newGrid[row][col] = 1;
          }
        }
      }
      return newGrid;
    });

    setTimeout(runGameOfLife, speedRef.current);
  }, [setGrid]);

  const toggleCellState = (rowToToggle: number, colToToggle: number) => {
    const newGrid = grid.map((row, rowIndex) =>
      row.map((cell, colIndex) =>
        rowIndex === rowToToggle && colIndex === colToToggle ? (cell ? 0 : 1) : cell,
      ),
    );
    setGrid(newGrid);
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (isMouseDown) {
      toggleCellState(row, col);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setCellSize(getGridSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center w-screen h-screen gap-4 p-4">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#a333ee_100%)]"></div>
      <h1 className="text-xl md:text-2xl">Conway's Game of Life</h1>
      <div className="flex items-center gap-4">
        <PlayPauseButton
          isPlaying={isPlaying}
          onClick={() => {
            setIsPlaying(!isPlaying);
            if (!isPlaying) {
              playingRef.current = true;
              runGameOfLife();
            }
          }}
        />
        <Button
          onClick={() => {
            const rows = [];
            for (let i = 0; i < ROWS; i++) {
              rows.push(Array.from(Array(COLS), () => (Math.random() > 0.75 ? 1 : 0)));
            }
            setGrid(rows);
          }}
        >
          Seed
        </Button>
        <Button
          onClick={() => {
            setGrid(createEmptyGrid());
            setIsPlaying(false);
          }}
        >
          Clear
        </Button>
        <Select
          label="speed selector"
          value={speed}
          onChange={(e) => setSpeed(parseInt(e.target.value))}
        >
          <option value={1500}>Super Slow</option>
          <option value={1000}>Slow</option>
          <option value={500}>Medium</option>
          <option value={100}>Fast</option>
          <option value={50}>Lightning</option>
          <option value={10}>Super Lightning</option>
        </Select>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${ROWS}, ${cellSize}px)`,
        }}
      >
        {grid.map((rows, orgRowIdx) =>
          rows.map((_, orgColIdx) => (
            <button
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseEnter={() => {
                handleMouseEnter(orgRowIdx, orgColIdx);
              }}
              onClick={() => {
                toggleCellState(orgRowIdx, orgColIdx);
              }}
              key={`${orgRowIdx}-${orgColIdx}`}
              className={twMerge(
                "border border-[#9050e9]",
                grid[orgRowIdx][orgColIdx] ? "bg-[#ad7bee]" : "bg-[#240643]",
              )}
            />
          )),
        )}
      </div>
      <a
        target="_blank"
        href="https://github.com/Ulrich-Tonmoy/react-web-apps/tree/main/conways-game-of-life"
      >
        <FaGithub className="w-8 h-8 text-gray-300 transition ease-in hover:text-gray-400" />
      </a>
    </div>
  );
}

export default App;
