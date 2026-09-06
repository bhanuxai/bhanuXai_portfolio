import { Environment, Lightformer } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Card from "./Card";
import { User } from "../types/types";

const Experience = ({ isVisible = true, ...student }: User & { isVisible?: boolean }) => {
  return (
    <Canvas 
      frameloop={isVisible ? "always" : "never"}
      dpr={[1, 1.5]} 
      camera={{ position: [0, 0, 13], fov: 25 }}
      gl={{ alpha: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), 0)}
    >
      <ambientLight intensity={1.5} />
      <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
        <Card student={student} />
      </Physics>
      <Environment blur={0.75}>
        <Lightformer intensity={1} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={2} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={2} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={5} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        <Lightformer toneMapped intensity={4} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[500, 10, 1]} />
        <Lightformer toneMapped intensity={2} color="white" position={[15, 0, 10]} scale={[10, 10, 1]} />
      </Environment>
    </Canvas>
  );
};

export default Experience;