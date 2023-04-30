import "./App.css";
import React, { useEffect } from "react";
import EntryAr from "./components/EntryAr";
import { useAr, useDispatch } from "./components/ArProvider";
import Scanner from "./components/Scanner";

const App = () => {
  const ar = useAr();
  const dispatch = useDispatch();
  useEffect(() => {
    const detectDeviceType = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? "Mobile"
        : "Desktop";
    if (detectDeviceType() == "Desktop") {
      dispatch("scanned");
    }
  }, []);

  return (
    <>
      <div className="container">
        {ar.isScanning ? <Scanner /> : <EntryAr />}
      </div>
    </>
  );
};

export default App;
