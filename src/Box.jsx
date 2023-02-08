import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Box = (props) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const [rotate, setRotate] = useState(false);

  useFrame((_, delta) => {
    if (rotate) {
      ref.current.rotation.x += 1 * delta;
      ref.current.rotation.y += 0.05 * delta;
    }
  });

  // useEffect(() => console.log(ref));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerDown={() => setRotate(!rotate)}
    >
      <boxGeometry />
      <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe />
    </mesh>
  );
};

export default Box;
