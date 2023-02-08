import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

const Box = (props) => {
  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.x += 1 * delta;
    ref.current.rotation.y += 0.05 * delta;
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
