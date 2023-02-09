import { useRef } from "react";

import { useFrame } from "@react-three/fiber";

const Polyhedron = (props) => {
  const ref = useRef(); // ref defined here and used in poth controls and to attach to mesh
  useFrame((_, delta) => {
    ref.current.rotation.x += 0.2 * delta;
    ref.current.rotation.y += 0.05 * delta;
  });

  return (
    <mesh {...props} ref={ref} castShadow receiveShadow>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  );
};

export default Polyhedron;
