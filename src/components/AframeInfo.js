import React from "react";
import "promise.allsettled/auto";
import { Canvas } from "@react-three/fiber";
import { ResizeObserver } from "@juggle/resize-observer";
import { Environment, OrbitControls } from "@react-three/drei";
import ModelThree from "./ModelThree";

const AframeInfo = () => {
  return (
    <Canvas resize={{ polyfill: ResizeObserver }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <ModelThree position={[0, 5, -30]} scale={[0.09, 0.09, 0.09]} />
      <OrbitControls />
      <Environment files="/ok2.hdr" background />
    </Canvas>
  );
};

export default AframeInfo;
