import {
  algorithmOptions,
  generateAnimationArray,
  sortingAlgorithmsData,
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
    runAnimation,
  } = useSortingAlgorithmContext();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAlgorithm(e.target.value as SortingAlgorithmType);
  };

  const handlePlay = () => {
    if (requiresReset) {
      resetArrayAndAnimation();
      return;
    }

    generateAnimationArray(selectedAlgorithm, isSorting, arrayToSort, runAnimation);
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
            <div className="hidden sm:flex absolute top-[120%] left-0 w-full z-50">
              <div className="flex w-full gap-6 p-4 text-gray-400 border rounded border-system-purple20 bg-system-purple80 bg-opacity-10">
                <div className="flex flex-col items-start justify-start w-3/4">
                  <h3 className="text-lg">
                    {sortingAlgorithmsData[selectedAlgorithm].title}
                  </h3>
                  <p className="pt-2 text-sm text-grey-500">
                    {sortingAlgorithmsData[selectedAlgorithm].description}
                  </p>
                </div>

                <div className="flex flex-col items-start justify-start w-1/4 gap-2">
                  <h3 className="text-lg">Time Complexity</h3>
                  <div className="flex flex-col gap-2">
                    <p className="flex w-full text-sm text-gray-500">
                      <span className="w-28">Worst Case:</span>
                      <span>{sortingAlgorithmsData[selectedAlgorithm].worstCase}</span>
                    </p>
                    <p className="flex w-full text-sm text-gray-500">
                      <span className="w-28">Average Case:</span>
                      <span>{sortingAlgorithmsData[selectedAlgorithm].averageCase}</span>
                    </p>
                    <p className="flex w-full text-sm text-gray-500">
                      <span className="w-28">Best Case:</span>
                      <span>{sortingAlgorithmsData[selectedAlgorithm].bestCase}</span>
                    </p>
                  </div>
                </div>
              </div>
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
