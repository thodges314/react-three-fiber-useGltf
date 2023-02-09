import { useControls } from "leva";
import {
  MeshBasicMaterial,
  MeshNormalMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
} from "three";

import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Floor from "./Floor";
import Polyhedron from "./Polyhedron";

const Lights = () => {
  // const ambientRef = useRef();
  // const directionalRef = useRef();
  // const pointRef = useRef();
  // const spotRef = useRef();

  const ambientCtl = useControls("Ambient Light", {
    visible: {
      value: false,
    },
    color: {
      value: "white",
    },
    intensity: {
      value: 1.0,
      min: 0,
      max: 1.0,
      step: 0.1,
    },
  });

  const directionalCtl = useControls("Directional Light", {
    visible: {
      value: true,
    },
    position: {
      x: 3.3,
      y: 1.0,
      z: 4.4,
    },
    color: {
      value: "white",
    },
    castShadow: {
      value: true,
    },
  });

  const pointCtl = useControls("Point Light", {
    visible: {
      value: false,
    },
    position: {
      x: 2,
      y: 0,
      z: 0,
    },
    color: {
      value: "white",
    },
    castShadow: {
      value: true,
    },
  });

  const spotCtl = useControls("Spot Light", {
    visible: {
      value: false,
    },
    position: {
      x: 3,
      y: 2.5,
      z: 2,
    },
    color: {
      value: "white",
    },
    castShadow: {
      value: true,
    },
  });
  return (
    <>
      <ambientLight
        visible={ambientCtl.visible}
        color={ambientCtl.color}
        intensity={ambientCtl.intensity}
      />
      <directionalLight
        visible={directionalCtl.visible}
        color={directionalCtl.color}
        intensity={directionalCtl.intensity}
        castShadow={directionalCtl.castShadow}
        position={[
          directionalCtl.position.x,
          directionalCtl.position.y,
          directionalCtl.position.z,
        ]}
      >
        <mesh material={new MeshBasicMaterial({ color: directionalCtl.color })}>
          <sphereGeometry args={[0.25]} />
        </mesh>
      </directionalLight>
      <pointLight
        visible={pointCtl.visible}
        color={pointCtl.color}
        intensity={pointCtl.intensity}
        castShadow={pointCtl.castShadow}
        position={[
          pointCtl.position.x,
          pointCtl.position.y,
          pointCtl.position.z,
        ]}
      >
        <mesh material={new MeshBasicMaterial({ color: pointCtl.color })}>
          <sphereGeometry args={[0.25]} />
        </mesh>
      </pointLight>
      <spotLight
        visible={spotCtl.visible}
        color={spotCtl.color}
        intensity={spotCtl.intensity}
        castShadow={spotCtl.castShadow}
        position={[spotCtl.position.x, spotCtl.position.y, spotCtl.position.z]}
      >
        <mesh material={new MeshBasicMaterial({ color: spotCtl.color })}>
          <sphereGeometry args={[0.25]} />
        </mesh>
      </spotLight>
    </>
  );
};

const App = () => {
  return (
    <Canvas shadows camera={{ position: [4, 4, 1.5] }}>
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
      <Floor />
      <OrbitControls target={[2, 2, 0]} />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  );
};

export default App;
