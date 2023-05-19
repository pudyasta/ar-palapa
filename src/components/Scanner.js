import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import ModelThree from "./ModelThree";
// import { useLoader } from "@react-three/fiber";
// import { MindARThree } from "mind-ar/dist/mindar-image-three.prod.js";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "mind-ar/dist/mindar-image-aframe.prod.js";
const Scanner = (props) => {
  const sceneRef = useRef(null);
  const targetRef = useRef();
  const navigateTo = useNavigate();

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    sceneEl.addEventListener("renderstart", () => {
      arSystem.start();
    });
    targetRef.current.addEventListener("targetFound", (e) => {
      arSystem.stop();
      navigateTo("/blogs");
      window.location.reload();
    });
  });
  // const containerRef = useRef(null);
  // const gltf = useLoader(
  //   GLTFLoader,
  //   "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.1/examples/image-tracking/assets/band-example/raccoon/scene.gltf"
  // );

  // useEffect(() => {
  //   const mindarThree = new MindARThree({
  //     container: containerRef.current,
  //     imageTargetSrc: "/targets.mind",
  //   });
  //   const { renderer, scene, camera } = mindarThree;
  //   const light = new THREE.AmbientLight(0x404040); // soft white light
  //   scene.add(light);
  //   const anchor = mindarThree.addAnchor(0);
  //   const geometry = new THREE.PlaneGeometry(1, 0.55);
  //   const material = new THREE.MeshBasicMaterial({
  //     color: 0x00ffff,
  //     transparent: true,
  //     opacity: 0.5,
  //   });
  //   gltf.scene.scale.set(0.1, 0.1, 0.1);
  //   const root = gltf.scene;
  //   const mixer = new THREE.AnimationMixer(gltf);
  //   // console.log(gltf.animations[0]);
  //   mixer.clipAction(gltf.animations[0]).play();
  //   const plane = new THREE.Mesh(geometry, material);
  //   anchor.group.add(root);

  //   mindarThree.start();
  //   renderer.setAnimationLoop(() => {
  //     renderer.render(scene, camera);
  //   });

  //   return () => {
  //     renderer.setAnimationLoop(null);
  //     // mindarThree.stop();
  //   };
  // }, []);

  // return (
  //   <div style={{ width: "100%", height: "100vh" }} ref={containerRef}></div>
  // );
  return (
    <a-scene
      ref={sceneRef}
      mindar-image="imageTargetSrc: /targets.mind; autoStart: true;  uiError: no;"
      color-space="sRGB"
      embedded
      renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
    >
      <a-assets>
        <a-asset-item
          id="raccoonModel"
          src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.1/examples/image-tracking/assets/band-example/raccoon/scene.gltf"
        ></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 2" ref={targetRef}></a-entity>
      <a-entity mindar-image-target="targetIndex: 0">
        <a-gltf-model
          rotation="0 0 0 "
          position="0 -0.25 0"
          scale="0.05 0.05 0.05"
          src="#raccoonModel"
          animation-mixer
        />
      </a-entity>
    </a-scene>
  );
};

export default Scanner;
