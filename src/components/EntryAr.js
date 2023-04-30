import React, { useEffect, useState } from "react";
import AframeInfo from "./AframeInfo";
import InfoGrafis from "./InfoGrafis";

const EntryAr = () => {
  const [supported, setSupported] = useState(true);
  async function checkForXRSupport() {
    if (navigator.xr) {
      navigator.xr.isSessionSupported("immersive-vr").then((supported) => {
        if (!supported) {
          window.alert("Perangkat kamu tidak mendukung untuk AR");
          setSupported(false);
        }
      });
    } else {
      window.alert("Perangkat kamu tidak mendukung untuk AR");
      setSupported(false);
    }
  }

  useEffect(() => {
    checkForXRSupport();
  }, []);
  return <>{supported ? <InfoGrafis /> : <AframeInfo />}</>;
};

export default EntryAr;
