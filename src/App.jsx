import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { Environment, OrbitControls, Stats } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";

const App = () => {
  const gltf = useLoader(GLTFLoader, "./models/monkeyShine.glb");
  return (
    <Canvas shadows camera={{ position: [-0.5, 1, 2] }}>
      <Environment preset="sunset" background blur={0.05} />
      {/* <directionalLight position={[3.3, 1.0, 4.4]} /> */}
      <primitive
        object={gltf.scene}
        position={[0, 1, 0]}
        children-0-castShadow
      />

      <OrbitControls target={[0, 1, 0]} />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  );
};

export default App;
