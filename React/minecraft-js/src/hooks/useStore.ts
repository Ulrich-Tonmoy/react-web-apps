/* eslint-disable @typescript-eslint/no-explicit-any */
import create from "zustand";
import { nanoid } from "nanoid";

const getLocalStorage = (key: any) => JSON.parse(window.localStorage.getItem(key) as string);
const setLocalStorage = (key: any, value: any) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: getLocalStorage("cubes") || [],
  addCube: (x: any, y: any, z: any) => {
    set((prev: any) => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          position: [x, y, z],
          texture: prev.texture,
        },
      ],
    }));
  },
  removeCube: (x: any, y: any, z: any) => {
    set((prev: any) => ({
      cubes: prev.cubes.filter((cube: any) => {
        const [X, Y, Z] = cube.position;
        return X !== x || Y !== y || Z !== z;
      }),
    }));
  },
  setTexture: (texture: any) => {
    set(() => ({
      texture,
    }));
  },
  saveWorld: () => {
    set((prev: any) => {
      setLocalStorage("cubes", prev.cubes);
    });
  },
  resetWorld: () => {
    set(() => ({
      cubes: [],
    }));
  },
}));
