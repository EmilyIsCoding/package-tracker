import React from "react";

const InputPackage = ({ formValues, onChange }) => {
  const onSubmitForm = async (e) => {
    try {
      if (formValues.tracking_number === "") {
        return alert("Please input a tracking number.");
      }
      const response = await fetch("http://localhost:5000/packages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
      console.log(`Successful response: ${response}`);
    } catch (err) {
      console.error(err.message);
      return alert("Invalid tracking number");
    }
  };
  return (
    <>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          name="tracking_number"
          type="text"
          placeholder="Tracking Number"
          className="form-control"
          value={formValues.tracking_number}
          onChange={onChange}
        />
        <input
          name="description"
          type="text"
          placeholder="Package Description"
          className="form-control"
          value={formValues.description}
          onChange={onChange}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default InputPackage;

// TODO: Add validation if they insert an invalid tracking number
