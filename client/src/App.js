import React, { useEffect, useState } from "react";
import "./App.css";

import InputPackage from "./components/InputPackage";
import ListPackages from "./components/ListPackages";

function App() {
  const [formValues, setFormValues] = useState({
    tracking_number: "",
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

  const deletePackage = async (id) => {
    try {
      const deletePackage = await fetch(
        `http://localhost:5000/packages/${id}`,
        {
          method: "DELETE",
        }
      );
      setPackages(packages.filter((pkg) => pkg.package_id !== id));
      console.log(deletePackage);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">Input Package List</h1>
      <div className="container">
        <InputPackage
          formValues={formValues}
          onChange={handleFormValueChange}
        />
        <ListPackages packages={packages} deletePackage={deletePackage} />
      </div>
    </>
  );
}

export default App;
