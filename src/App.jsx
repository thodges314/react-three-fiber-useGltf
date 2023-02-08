import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import { BoxGeometry, SphereGeometry, DodecahedronGeometry } from "three";
import Polyhedron from "./Polyhedron";

const App = () => {
  const polyhedron = [
    new BoxGeometry(),
    new SphereGeometry(0.785398),
    new DodecahedronGeometry(0.785398),
  ];
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <Polyhedron position={[-0.75, -0.75, 0]} polyhedreon={polyhedron} />
      <Polyhedron position={[0.75, -0.75, 0]} polyhedreon={polyhedron} />
      <Polyhedron position={[-0.75, 0.75, 0]} polyhedreon={polyhedron} />
      <Polyhedron position={[0.75, 0.75, 0]} polyhedreon={polyhedron} />
      <OrbitControls />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  );
};

export default App;
