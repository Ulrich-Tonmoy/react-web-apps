import { lazy } from "react";

export const lazyLoader = (path: string, namedExport?: string) => {
  return lazy(() => {
    const promise = import(path); /* @vite-ignore */
    if (namedExport == null) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[namedExport] }));
    }
  });
};
