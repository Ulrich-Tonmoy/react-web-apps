import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cubes from "./components/Cubes";
import FirstPersonView from "./components/FirstPersonView";
import Ground from "./components/Ground";
import { Menu } from "./components/Menu";
import Player from "./components/Player";
import { TextureSelector } from "./components/TextureSelector";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FirstPersonView />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className="absolute centered cursor">+</div>
      <TextureSelector />
      <Menu />
    </>
  );
}

export default App;
