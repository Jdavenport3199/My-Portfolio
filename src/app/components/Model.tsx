import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from "leva";

export default function Model() {
  const { viewport } = useThree();
  const { nodes } = useGLTF("/assets/test.glb");
  const mesh = useRef(null);
  const ref = useRef(null);
  const tl = useRef(null);
  const scale = viewport.width / 10;
  const materialProps = useControls({
    thickness: { value: 1.15, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 0.9, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.0, min: 0, max: 1 },
    backside: { value: true },
    transparent: { value: true },
    opacity: { value: 0.8, min: 0, max: 1, step: 0.05 },
  });

  useFrame(() => {
    if (mesh.current) {
      (mesh.current as any).rotation.x += 0.004;
      (mesh.current as any).rotation.y += 0.004;
      (mesh.current as any).rotation.z += 0.004;
    }
  });

  return (
    <group
      ref={ref}
      scale={[scale, scale, scale]}
      dispose={null}
      position={[0, 0, 0]}
    >
      <mesh ref={mesh} {...nodes.Icosphere}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
