/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useContext, FC } from "react";

interface ResultContextType {
  getResults: (type: string) => Promise<void>;
  results: any[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

const ResultContext = createContext<ResultContextType>({
  getResults: async () => {},
  results: [],
  searchTerm: "",
  setSearchTerm: () => {},
  isLoading: false,
});
const baseURL = "https://seo-api.p.rapidapi.com/v1";

export const ResultContextProvider: FC<any> = ({ children }) => {
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const getResults = async (type: string): Promise<void> => {
    setIsLoading(true);
    const response = await fetch(`${baseURL}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "US",
        "x-rapidapi-host": "seo-api.p.rapidapi.com",
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
      },
    });

    const data = await response.json();

    if (type.includes("/news")) setResults(data.entries);
    else if (type.includes("/image")) setResults(data.image_results);
    else setResults(data.results);

    setIsLoading(false);
  };

  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = (): ResultContextType =>
  useContext<ResultContextType>(ResultContext);
