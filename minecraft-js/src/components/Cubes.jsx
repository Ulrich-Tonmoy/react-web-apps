import { useStore } from "../hooks/useStore";
import Cube from "./Cube";

const Cubes = () => {
    const [cubes] = useStore((state) => [state.cubes]);

    return cubes?.map(({ key, position, texture }) => {
        return <Cube key={key} position={position} texture={texture} />;
    });
};

export default Cubes;
