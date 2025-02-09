import { SortingAlgorithmProvider } from "@/context";
import { Home } from "@/components";

function App() {
  return (
    <SortingAlgorithmProvider>
      <Home />
    </SortingAlgorithmProvider>
  );
}

export default App;
