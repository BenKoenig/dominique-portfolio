import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Vector3, Box3 } from "three";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/vanilla_iced_latte.glb");

  useEffect(() => {
    if (groupRef.current) {
      const box = new Box3().setFromObject(groupRef.current);
      const size = new Vector3();
      box.getSize(size);
      groupRef.current.position.y = -size.y / 2;
    }
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Adjust this value to change rotation speed
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["015_1"].geometry}
        material={materials.Material__821}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object001_1.geometry}
        material={materials["Material _46"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}
