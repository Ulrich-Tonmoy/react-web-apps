/* eslint-disable @typescript-eslint/no-explicit-any */
import { useStore } from "../hooks/useStore";
import Cube from "./Cube";

const Cubes = () => {
  const [cubes] = useStore((state: any) => [state.cubes]);

  return cubes?.map(({ key, position, texture }: any) => {
    return <Cube key={key} position={position} texture={texture} />;
  });
};

export default Cubes;
