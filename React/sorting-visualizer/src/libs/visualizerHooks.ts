import { SortingAlgorithmContext, SortingAlgorithmContextType } from "@/context";
import { useContext } from "react";

export const useSortingAlgorithmContext = (): SortingAlgorithmContextType => {
  const context = useContext(SortingAlgorithmContext);
  if (context === undefined) {
    throw new Error(
      "useSortingAlgorithmContext must be used within a SortingAlgorithmProvider",
    );
  }
  return context;
};
