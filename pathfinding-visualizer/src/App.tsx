import { PathFindingProvider, SpeedProvider, TileProvider } from "@/context";
import { Grid, Nav } from "@/components";
import { useRef } from "react";

function App() {
  const isVisualizationRunning = useRef(false);

  return (
    <PathFindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="flex flex-col w-full h-full">
            <Nav isVisualizationRunning={isVisualizationRunning} />
            <Grid isVisualizationRunning={isVisualizationRunning} />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathFindingProvider>
  );
}

export default App;
