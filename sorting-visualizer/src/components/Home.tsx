import { useSortingAlgorithmContext } from "@/libs";
import { useEffect } from "react";

export const Home = () => {
  const { arrayToSort, isSorting } = useSortingAlgorithmContext();

  useEffect(() => {
    console.log("🚀 ~ Home ~ isSorting:", isSorting);
    console.log("🚀 ~ Home ~ arrayToSort:", arrayToSort);
  }, []);

  return <div>Home</div>;
};
