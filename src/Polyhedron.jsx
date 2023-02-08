import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Polyhedron = ({ position, polyhedreon }) => {
  const ref = useRef();
  const [count, setCount] = useState(0);

  console.log(polyhedreon);

  useFrame((_, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += 0.5 * delta;
  });

  return (
    <mesh
      ref={ref}
      position={position}
      onPointerDown={() => setCount((count + 1) % 3)}
      geometry={polyhedreon[count]}
    >
      <meshBasicMaterial color={"lime"} wireframe />
    </mesh>
  );
};

export default Polyhedron;
