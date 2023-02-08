import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

const Box = (props) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += 1 * delta;
    ref.current.rotation.y += 0.05 * delta;
    ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) / 2;
  });

  // useEffect(() => console.log(ref));

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
};

export default Box;
