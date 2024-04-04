"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import Model from "./Model";

export default function Scene() {
  return (
    <Canvas>
      <directionalLight intensity={2} position={[0, 2, 4]} />
      <Environment preset="city" />
      <ScrollControls pages={2} damping={5}>
        <Model />
      </ScrollControls>
    </Canvas>
  );
}
