import React from "react";
import "promise.allsettled/auto";
import { Entity, Scene } from "aframe-react";

const AframeInfo = () => {
  return (
    <Scene>
      <a-assets>
        <img
          id="groundTexture"
          src="https://cdn.aframe.io/a-painter/images/floor.jpg"
          alt="ground"
        />
        <img
          id="skyTexture"
          src="https://cdn.aframe.io/a-painter/images/sky.jpg"
          alt="sky"
        />
      </a-assets>

      <Entity
        primitive="a-plane"
        src="#groundTexture"
        rotation="-90 0 0"
        height="100"
        width="100"
      />
      <Entity primitive="a-light" type="ambient" color="#445451" />
      <Entity primitive="a-light" type="point" intensity="2" position="2 4 4" />
      <Entity
        primitive="a-sky"
        height="2048"
        radius="30"
        src="#skyTexture"
        theta-length="90"
        width="2048"
      />

      <Entity
        id="box"
        geometry={{ primitive: "box" }}
        material={{ color: "red", opacity: 0.6 }}
        position={{ x: 0, y: 2, z: -3 }}
        scale={{ x: 5, y: 5, z: 1 }}
      >
        <Entity
          text={{ value: "PPSMB Pionir \nGadjah Mada", align: "center" }}
          scale={{ x: 3, y: 3 }}
          position={{ x: 0, y: 0.2, z: 0.5 }}
        />
      </Entity>

      <Entity primitive="a-camera">
        <Entity
          primitive="a-cursor"
          animation__click={{
            property: "scale",
            startEvents: "click",
            from: "0.1 0.1 0.1",
            to: "1 1 1",
            dur: 150,
          }}
        />
      </Entity>
    </Scene>
  );
};

export default AframeInfo;
