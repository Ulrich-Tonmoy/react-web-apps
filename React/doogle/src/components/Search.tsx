/* eslint-disable react-hooks/exhaustive-deps */
import { Links } from "./Links";
import { useState, useEffect } from "react";
import { useResultContext } from "../contexts/ResultContextProvider";
import { useDebounce } from "use-debounce";

const Search = () => {
  const [text, setText] = useState("Ulrich Tonmoy");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        type="text"
        value={text}
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search Doggle or type a URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
          onClick={() => setText("")}
        >
          ❌
        </button>
      )}
      <Links />
    </div>
  );
};
export default Search;
