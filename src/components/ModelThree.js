import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ModelThree = (props) => {
  const model = useLoader(GLTFLoader, "info1.gltf");
  let mixer;
  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene);
    model.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });

  return (
    <group position={props.position}>
      <primitive object={model.scene} scale={props.scale} />
    </group>
  );
};

export default ModelThree;
