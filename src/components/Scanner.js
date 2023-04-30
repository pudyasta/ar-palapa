import React, { useEffect, useRef } from "react";
import { useAr, useDispatch } from "./ArProvider";

const Scanner = (props) => {
  const sceneRef = useRef(null);
  const targetRef = useRef();
  const dispatch = useDispatch();
  const ar = useAr();

  useEffect(() => {
    if (ar.isScanning) {
      const sceneEl = sceneRef.current;
      const arSystem = sceneEl?.systems["mindar-image-system"];

      sceneEl.addEventListener("renderstart", () => {
        arSystem.start();
        targetRef.current.addEventListener("targetFound", (event) => {
          dispatch("scanned");
        });
      });
      return () => {
        arSystem.stop();
      };
    }
  }, []);
  return (
    <a-scene
      ref={sceneRef}
      mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.mind; autoStart: false;"
      color-space="sRGB"
      embedded
      renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
    >
      <a-assets>
        <img
          id="card"
          src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.png"
          alt="card"
        />
        <a-asset-item
          id="avatarModel"
          src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/softmind/scene.gltf"
        ></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0" ref={targetRef}></a-entity>
    </a-scene>
  );
};

export default Scanner;
