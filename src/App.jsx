import { useRef } from "react";

import { useControls } from "leva";
import {
  Color,
  MeshBasicMaterial,
  MeshNormalMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
} from "three";

import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Polyhedron from "./Polyhedron";

const Lights = () => {
  const ambientRef = useRef();
  const directionalRef = useRef();
  const pointRef = useRef();
  const spotRef = useRef();

  useControls("Ambient Light", {
    visible: {
      value: false,
      onChange: (v) => (ambientRef.current.visible = v),
    },
    color: {
      value: "white",
      onChange: (v) => (ambientRef.current.color = new Color(v)),
    },
  });

  useControls("Directional Light", {
    visible: {
      value: true,
      onChange: (v) => (directionalRef.current.visible = v),
    },
    position: {
      x: 1,
      y: 1,
      z: 1,
      onChange: (v) => directionalRef.current.position.copy(v),
    },
    color: {
      value: "white",
      onChange: (v) => (directionalRef.current.color = new Color(v)),
    },
  });

  useControls("Point Light", {
    visible: {
      value: false,
      onChange: (v) => (pointRef.current.visible = v),
    },
    position: {
      x: 2,
      y: 0,
      z: 0,
      onChange: (v) => pointRef.current.position.copy(v),
    },
    color: {
      value: "white",
      onChange: (v) => (pointRef.current.color = new Color(v)),
    },
  });

  useControls("Spot Light", {
    visible: {
      value: false,
      onChange: (v) => (spotRef.current.visible = v),
    },
    position: {
      x: 3,
      y: 2.5,
      z: 2,
      onChange: (v) => spotRef.current.position.copy(v),
    },
    color: {
      value: "white",
      onChange: (v) => (spotRef.current.color = new Color(v)),
    },
  });
  return (
    <>
      <ambientLight ref={ambientRef} />
      <directionalLight ref={directionalRef} />
      <pointLight ref={pointRef}>
        <mesh>
          <sphereGeometry args={[0.25]} />
        </mesh>
      </pointLight>
      <spotLight ref={spotRef} />
    </>
  );
};

const App = () => {
  return (
    <Canvas camera={{ position: [4, 4, 1.5] }}>
      <Lights />
      <Polyhedron
        name="meshBasicMaterial"
        position={[-3, 1, 0]}
        material={new MeshBasicMaterial({ color: "yellow" })}
      />
      <Polyhedron
        name="meshNormalMaterial"
        position={[-1, 1, 0]}
        material={new MeshNormalMaterial({ flatShading: true })}
      />
      <Polyhedron
        name="meshPhongMaterial"
        position={[1, 1, 0]}
        material={new MeshPhongMaterial({ color: "lime", flatShading: true })}
      />
      <Polyhedron
        name="meshStandardMaterial"
        position={[3, 1, 0]}
        material={
          new MeshStandardMaterial({
            color: 0xff0033,
            flatShading: true,
          })
        }
      />
      <OrbitControls target={[2, 2, 0]} />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  );
};

export default App;
