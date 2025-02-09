import { Context } from "@/features/confirm/components/context";
import { useContext as useReactContext } from "react";

const useContext = () => {
  const context = useReactContext(Context);

  if (context === undefined) {
    throw new Error("useContext must be used with a context(confirm)");
  }

  return context;
};

export { useContext as useConfirm };
