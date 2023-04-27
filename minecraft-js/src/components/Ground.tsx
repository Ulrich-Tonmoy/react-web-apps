/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../assets/textures";
import { useStore } from "../hooks/useStore";

const Ground = () => {
  const [ref] = usePlane<any>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));
  const [addCube] = useStore((state: any) => [state.addCube]);

  groundTexture.repeat.set(100, 100);

  return (
    <mesh
      onClick={(e) => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point).map((value) => Math.ceil(value));
        addCube(x, y, z);
      }}
      ref={ref}
    >
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};

export default Ground;
