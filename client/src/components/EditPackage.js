import React, { useState } from "react";

const EditPackage = ({ pkg, updateDescription }) => {
  const [description, setDescription] = useState(pkg.description);

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${pkg.package_id}`}
        onClick={() => setDescription(pkg.description)}
      >
        Edit
      </button>

      <div className="modal" id={`id${pkg.package_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Package</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setDescription(pkg.description)}
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={() => updateDescription(pkg.package_id, description)}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => setDescription(pkg.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPackage;
