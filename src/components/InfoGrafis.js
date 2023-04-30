import React, { Suspense, useState } from "react";
import {
  Interactive,
  XR,
  Controllers,
  XRButton,
  ARButton,
} from "@react-three/xr";
import { Text, OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ResizeObserver } from "@juggle/resize-observer";

const Box = ({ color, size, scale, children, ...rest }) => {
  return (
    <mesh scale={scale} {...rest}>
      <boxGeometry args={size} />
      <meshPhongMaterial color={color} />
      {children}
    </mesh>
  );
};

const Button = (props) => {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState("pink");

  const onSelect = () => {
    setColor((Math.random() * 0xffffff) | 0);
  };

  return (
    <Interactive
      onHover={() => setHover(true)}
      onBlur={() => setHover(false)}
      onSelect={onSelect}
    >
      <Box
        color={color}
        scale={hover ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5]}
        size={[0.45, 0.5, 0.1]}
        {...props}
      >
        <Suspense fallback={null}>
          <Text
            position={[0, 0, 0.06]}
            fontSize={0.05}
            color="#000"
            anchorX="center"
            anchorY="middle"
          >
            Pionir Gadjah Mada
          </Text>
        </Suspense>
      </Box>
    </Interactive>
  );
};

const InfoGrafis = () => {
  const [inAr, setInAr] = useState(false);

  return (
    <>
      <XRButton
        mode="ar"
        position={[0, 0, 0]}
        camera={{ position: [0, 0, -3] }}
      />
      <Canvas resize={{ polyfill: ResizeObserver }}>
        <XR
          referenceSpace="local"
          onSessionStart={() => setInAr(true)}
          onSessionEnd={() => setInAr(false)}
        >
          {inAr && (
            <>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Button position={[0, 0.1, -0.8]} />
            </>
          )}

          {!inAr && (
            <>
              <Environment files="/ok2.hdr" background />
              <Controllers />
              <OrbitControls />
            </>
          )}
        </XR>
      </Canvas>
    </>
  );
};

export default InfoGrafis;
