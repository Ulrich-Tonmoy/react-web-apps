import {
  algorithmOptions,
  SortingAlgorithmType,
  useSortingAlgorithmContext,
} from "@/libs";
import { Slider } from "./Slider";
import { Select } from "./Select";
import { RxReset } from "react-icons/rx";
import { FaPlayCircle } from "react-icons/fa";

export const Home = () => {
  const {
    arrayToSort,
    isSorting,
    animationSpeed,
    setAnimationSpeed,
    selectedAlgorithm,
    setSelectedAlgorithm,
    requiresReset,
    resetArrayAndAnimation,
  } = useSortingAlgorithmContext();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAlgorithm(e.target.value as SortingAlgorithmType);
  };

  const handlePlay = () => {
    if (requiresReset) {
      resetArrayAndAnimation();
      return;
    }
  };

  return (
    <div className="absolute top-0 h-screen w-screen z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#150229_1px)] bg-[size:40px_40px]">
      <div className="flex justify-center h-full">
        <div
          id="content-container"
          className="flex max-w-[1020px] w-full flex-col lg:px-0 px-4"
        >
          <div className="h-[66px] relative flex items-center justify-between w-full">
            <h1 className="hidden text-2xl font-light text-gray-300 md:flex">
              Sorting Visualizer
            </h1>
            <div className="flex items-center justify-center gap-4">
              <Slider
                isDisabled={isSorting}
                value={animationSpeed}
                handleChange={(e) => setAnimationSpeed(Number(e.target.value))}
              />
              <Select
                options={algorithmOptions}
                defaultValue={selectedAlgorithm}
                onChange={handleSelectChange}
                isDisabled={isSorting}
              />
              <button className="flex items-center justify-center" onClick={handlePlay}>
                {requiresReset ? (
                  <RxReset className="w-8 h-8 text-gray-400" />
                ) : (
                  <FaPlayCircle className="w-8 h-8 text-system-green60" />
                )}
              </button>
            </div>
          </div>
          <div className="relative h-[calc(100vh-66px)] w-full">
            <div className="absolute bottom-[32px] w-full mx-auto left-0 right-0 flex justify-center items-end">
              {arrayToSort.map((value, index) => (
                <div
                  key={index}
                  className="array-line relative w-1 mx-0.5 shadow-lg opacity-70 rounded-lg default-line-color"
                  style={{ height: `${value}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
