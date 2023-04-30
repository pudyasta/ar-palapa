import React, { useEffect, useState } from "react";
import AframeInfo from "./AframeInfo";
import InfoGrafis from "./InfoGrafis";
import Swal from "sweetalert2";

const EntryAr = () => {
  const [supported, setSupported] = useState(true);
  async function checkForXRSupport() {
    if (navigator.xr) {
      navigator.xr.isSessionSupported("immersive-vr").then((supported) => {
        if (!supported) {
          Swal.fire({
            title: "Device kamu tidak disupport",
            text: "Tapi jangan khawatir kamu tetap bisa mengakses AR dengan 3d Model lhoo",
            imageUrl:
              "https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg",

            imageAlt: "Custom image",
            showConfirmButton: false,
          });
          setSupported(false);
        }
      });
    } else {
      Swal.fire({
        title: "Device kamu tidak disupport",
        text: "Tapi jangan khawatir kamu tetap bisa mengakses AR dengan 3d Model lhoo",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        showConfirmButton: false,
      });
      setSupported(false);
    }
  }

  useEffect(() => {
    checkForXRSupport();
  }, []);
  return <>{supported ? <InfoGrafis /> : <AframeInfo />}</>;
};

export default EntryAr;
