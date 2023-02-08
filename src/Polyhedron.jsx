import { useRef } from "react";
import { useControls } from "leva";
import { Color } from "three";
import { useFrame } from "@react-three/fiber";

const Polyhedron = (props) => {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += 0.2 * delta;
    ref.current.rotation.y += 0.05 * delta;
  });

  useControls(props.name, {
    wireframe: {
      value: false,
      onChange: (v) => {
        ref.current.material.wireframe = v;
      },
    },
    flatShading: {
      value: true,
      onChange: (v) => {
        ref.current.material.flatShading = v;
        ref.current.material.needsUpdate = true;
      },
    },
    color: {
      value: "lime",
      onChange: (v) => {
        ref.current.material.color = new Color(v);
      },
    },
  });

  return (
    <mesh {...props} ref={ref}>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  );
};

export default Polyhedron;
