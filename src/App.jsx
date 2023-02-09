import { useRef } from "react";

import { useControls } from "leva";
import {
  MeshBasicMaterial,
  MeshNormalMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
  TextureLoader,
} from "three";

import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";

import Floor from "./Floor";
import Polyhedron from "./Polyhedron";

const Lights = () => {
  const directionalRef = useRef();

  useControls("Directional Light", {
    intensity: {
      value: 1,
      min: 0,
      max: 5,
      step: 0.1,
      onChange: (v) => (directionalRef.current.intensity = v),
    },

    position: {
      x: 3.3,
      y: 1.0,
      z: 4.4,
      onChange: (v) => directionalRef.current.position.copy(v),
    },
  });

  return <directionalLight ref={directionalRef} castShadow />;
};

const App = () => {
  const texture = useLoader(TextureLoader, "./img/grid.png");
  return (
    <Canvas shadows camera={{ position: [4, 4, 1.5] }}>
      <Lights />
      <Polyhedron
        name="meshBasicMaterial"
        position={[-3, 1, 0]}
        material={new MeshBasicMaterial({ map: texture })}
      />
      <Polyhedron
        name="meshNormalMaterial"
        position={[-1, 1, 0]}
        material={new MeshNormalMaterial({ flatShading: true })}
      />
      <Polyhedron
        name="meshPhongMaterial"
        position={[1, 1, 0]}
        material={new MeshPhongMaterial({ map: texture, flatShading: true })}
      />
      <Polyhedron
        name="meshStandardMaterial"
        position={[3, 1, 0]}
        material={
          new MeshStandardMaterial({
            map: texture,
            flatShading: true,
          })
        }
      />
      <Floor />
      <OrbitControls target={[2, 2, 0]} />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  );
};

export default App;
