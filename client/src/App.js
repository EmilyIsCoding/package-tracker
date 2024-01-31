import React, { useEffect, useState } from "react";
import "./App.css";

import InputPackage from "./components/InputPackage";
import ListPackages from "./components/ListPackages";

function App() {
  const [formValues, setFormValues] = useState({
    trackingNumber: "",
    description: "",
  });
  const [packages, setPackages] = useState([]);

  function handleFormValueChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
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
        <InputPackage
          formValues={formValues}
          onChange={handleFormValueChange}
        />
        <ListPackages packages={packages} />
      </div>
    </>
  );
}

export default App;
