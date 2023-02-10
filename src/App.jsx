import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { Environment, OrbitControls, Stats } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";

import { useControls } from "leva";

const Env = () => {
  const { height, radius, scale } = useControls("Ground", {
    height: { value: 10, min: 0, max: 100, step: 1 },
    radius: { value: 115, min: 0, max: 1000, step: 1 },
    scale: { value: 100, min: 0, max: 1000, step: 1 },
  });
  return (
    <Environment
      files="./img/shanghai_bund_1k.hdr"
      background
      ground={{ height: height, radius: radius, scale: scale }}
    />
  );
};

const App = () => {
  const gltf = useLoader(GLTFLoader, "./models/scene.glb");
  return (
    <Canvas shadows camera={{ position: [-0.5, 1, 2] }}>
      <Env />
      <primitive object={gltf.scene} />
      <OrbitControls target={[0, 1, 0]} />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  );
};

export default App;
