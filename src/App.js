import "./App.css";
import React, { useEffect, useState } from "react";
import EntryAr from "./components/EntryAr";
import { useAr } from "./components/ArProvider";
import Scanner from "./components/Scanner";

const App = () => {
  const ar = useAr();

  return (
    <>
      <div className="container">
        {ar.isScanning ? <Scanner /> : <EntryAr />}
      </div>
    </>
  );
};

export default App;
