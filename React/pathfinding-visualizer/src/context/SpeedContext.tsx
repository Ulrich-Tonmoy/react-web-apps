import { SpeedType } from "@/libs";
import { ReactNode, createContext, useState } from "react";

export interface SpeedContextInterface {
  speed: SpeedType;
  setSpeed: (speed: SpeedType) => void;
}

export const SpeedContext = createContext<SpeedContextInterface | undefined>(undefined);

export const SpeedProvider = ({ children }: { children: ReactNode }) => {
  const [speed, setSpeed] = useState<SpeedType>(0.5);

  return (
    <SpeedContext.Provider value={{ speed, setSpeed }}>{children}</SpeedContext.Provider>
  );
};
