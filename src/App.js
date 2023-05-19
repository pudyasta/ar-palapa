import "./App.css";
import React, { useEffect, useState } from "react";
import Scanner from "./components/Scanner";

import QRScanner from "./components/QRScanner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EntryAr from "./components/EntryAr";
import AframeInfo from "./components/AframeInfo";
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
<<<<<<< HEAD
                element={device === "mobile" ? <Scanner /> : <AframeInfo />}
=======
                element={device === "mobile" ? <QRScanner /> : <EntryAr />}
>>>>>>> dfc941ab8b6184b0fcd6058e25daf87a8dcce0f6
              />
              <Route path="blogs" element={<EntryAr />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
