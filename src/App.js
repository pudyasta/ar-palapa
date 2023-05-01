import "./App.css";
import React, { useEffect, useState } from "react";
import Scanner from "./components/Scanner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EntryAr from "./components/EntryAr";
const App = () => {
  const [device, setDevice] = useState("mobile");
  useEffect(() => {
    const detectDeviceType = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? "Mobile"
        : "Desktop";
    if (detectDeviceType() === "Desktop") {
      setDevice("desktop");
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/">
              <Route
                index
                element={device === "mobile" ? <Scanner /> : <EntryAr />}
              />
              <Route path="blogs" element={<EntryAr />} />
            </Route>
          </Routes>
          {/* {ar.isScanning ? : <EntryAr />} */}
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
