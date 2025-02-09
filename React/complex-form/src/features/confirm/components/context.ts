import { Options } from "@/features/confirm/types/options";
import { createContext } from "react";

type ContextState = (optionsArg: Options) => Promise<unknown>;

export const Context = createContext<ContextState | undefined>(undefined);
