import { useRef, useState } from "react";

const Polyhedron = ({ polyhedreon, color, ...props }) => {
  const ref = useRef();
  const [count, setCount] = useState(0);

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => setCount((count + 1) % 3)}
      geometry={polyhedreon[count]}
    >
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
};

export default Polyhedron;
