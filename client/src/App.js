import React, { useEffect, useState } from "react";
import "./App.css";

import InputPackage from "./components/InputPackage";
import ListPackages from "./components/ListPackages";

function App() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [description, setDescription] = useState("");
  const [packages, setPackages] = useState([]);

  function handleTrackingNumberChange(e) {
    setTrackingNumber(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  const getPackages = async () => {
    try {
      const response = await fetch("http://localhost:5000/packages");
      const jsonData = await response.json();

      setPackages(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPackages();
  }, [packages]);

  return (
    <>
      <div className="container">
        <ListPackages packages={packages} />
      </div>
    </>
  );
}

export default App;
