import { useRef, useEffect } from "react";

const Box = (props) => {
  const ref = useRef();

  useEffect(() => console.log(ref));

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
};

export default Box;
