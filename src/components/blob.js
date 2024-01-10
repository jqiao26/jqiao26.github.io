import React, { Suspense, useState } from "react";
import {
  PerspectiveCamera,
  MeshDistortMaterial,
  ContactShadows,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

const Blobject = a(MeshDistortMaterial);

function Blob({ toggleBackground }) {
  const [isHovered, setIsHovered] = useState(false);
  const [clickDown, setClickDown] = useState(false);
  const [lightMode, setLightMode] = useState(true);

  const [{ wobble, color }] = useSpring(
    {
      wobble: clickDown ? 1.1 : isHovered ? 1.05 : 1,
      coat: !isHovered ? 0.04 : 1,
      ambient: !isHovered ? 1.5 : 0.5,
      env: !isHovered ? 0.4 : 1,
      color: isHovered ? "#457b9d" : "#202020",
      config: (n) =>
        n === "wobble" && isHovered && { mass: 2, tension: 1000, friction: 10 },
    },
    [isHovered, clickDown]
  );

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={80}>
        <a.ambientLight intensity={1.5} />
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <a.mesh
          scale={wobble}
          onPointerOver={() => setIsHovered(true)}
          onPointerOut={() => setIsHovered(false)}
          onPointerDown={() => setClickDown(true)}
          onPointerUp={() => {
            setClickDown(false);
            setLightMode(!lightMode);
            toggleBackground({
              background: !lightMode ? "#faf9f6" : "#202020",
              fill: !lightMode ? "#202020" : "#faf9f6",
            });
          }}
        >
          <sphereBufferGeometry args={[1, 64, 64]} />
          <Blobject
            color={color}
            envMapIntensity={0.4}
            clearcoat={0.04}
            clearcoatRoughness={0}
            metalness={0.1}
          />
        </a.mesh>
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={0.8}
          width={2}
          height={2}
          blur={2.5}
          far={1.6}
        />
      </Suspense>
    </>
  );
}

export default Blob;
