import { useRef, useState, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { BoxGeometry, SphereGeometry } from "three";

const Box = (props) => {
  const ref = useRef();

  // const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(0);
  const geometry = useMemo(
    () => [new BoxGeometry(), new SphereGeometry(0.785398)],
    []
  );

  useFrame((_, delta) => {
    ref.current.rotation.x += 1 * delta;
    ref.current.rotation.y += 0.05 * delta;
  });

  useEffect(() => console.log(ref.current.geometry.uuid));

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => setCount((count + 1) % 2)}
      geometry={geometry[count]}
    >
      <meshBasicMaterial color={"lime"} wireframe />
    </mesh>
  );
};

export default Box;
