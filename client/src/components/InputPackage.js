import React from "react";

const InputPackage = ({ formValues, onChange }) => {
  const onSubmitForm = async (e) => {
    try {
      const body = { formValues };
      const response = await fetch("http://localhost:5000/packages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <h1 className="text-center mt-5">Input Package List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          name="tracking_number"
          type="text"
          className="form-control"
          value={formValues.tracking_number}
          onChange={onChange}
        />
        <input
          name="description"
          type="text"
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
