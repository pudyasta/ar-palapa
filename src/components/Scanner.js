import React from "react";
import { ARAnchor, ARView } from "react-three-mind";
import { useDispatch } from "./ArProvider";
import { ResizeObserver } from "@juggle/resize-observer";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
// function Plane(props) {
//   return (
//     <a-gltf-model
//       rotation="0 0 0 "
//       position="0 -0.25 0"
//       scale="0.05 0.05 0.05"
//       src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.1/examples/image-tracking/assets/band-example/raccoon/scene.gltf"
//       animation-mixer
//     />
//   );
// }

const Scanner = (props) => {
  const dispatch = useDispatch();
  const gltf = useLoader(
    GLTFLoader,
    "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.1/examples/image-tracking/assets/band-example/raccoon/scene.gltf"
  );
  return (
    <ARView
      imageTargets="/targets.mind"
      filterMinCF={0.1}
      maxTrack={5}
      filterBeta={10000}
      resize={{ polyfill: ResizeObserver }}
    >
      <ambientLight />
      <ARAnchor target={0} onAnchorFound={() => console.log("ok")}>
        <primitive
          object={gltf.scene}
          scale={[0.2, 0.2, 0.2]}
          position={[0, 0, 1]}
          children-0-castShadow
        />
        {/* <Plane /> */}
      </ARAnchor>
      <ARAnchor target={1} onAnchorFound={() => console.log("ok")}>
        <primitive
          object={gltf.scene}
          position={[0, 0, 1]}
          scale={[0.2, 0.2, 0.2]}
          children-0-castShadow
        />
      </ARAnchor>
      <ARAnchor target={2} onAnchorFound={() => console.log("ok")}>
        <primitive
          object={gltf.scene}
          position={[0, 0, 0.5]}
          scale={[0.1, 0.1, 0.1]}
          children-0-castShadow
        />
        {/* <Plane /> */}
      </ARAnchor>
    </ARView>
  );
};

export default Scanner;
