import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

export function PlayPauseButton({
  onClick,
  isPlaying,
}: {
  onClick: () => void;
  isPlaying: boolean;
}) {
  return (
    <button
      className={twMerge(
        "transition ease-in flex items-center justify-center h-8 w-8 rounded-full shadow-md",
        isPlaying ? "bg-gray-700 hover:bg-gray-800" : "bg-green-500 hover:bg-green-700",
      )}
      onClick={onClick}
    >
      {isPlaying ? (
        <BsFillPauseFill className="w-6 h-6" />
      ) : (
        <BsFillPlayFill className="w-6 h-6" />
      )}
    </button>
  );
}
