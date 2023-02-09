import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import {
  Circle,
  OrbitControls,
  Stats,
} from '@react-three/drei';
import {
  Canvas,
  useLoader,
} from '@react-three/fiber';

const App = () => {
  const gltf = useLoader(GLTFLoader, "./models/monkey.glb");
  return (
    <Canvas shadows camera={{ position: [-0.5, 1, 2] }}>
      <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
      <primitive
        object={gltf.scene}
        position={[0, 1, 0]}
        children-0-castShadow
      />
      <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Circle>
      <OrbitControls target={[0, 1, 0]} />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  );
};

export default App;
