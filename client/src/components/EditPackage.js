import React, { useState } from "react";

const EditPackage = ({ pkg, updateDescription }) => {
  const [description, setDescription] = useState(pkg.description);

  return (
    <>
      <button
        type="button"
        class="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${pkg.package_id}`}
      >
        Edit
      </button>

      <div
        class="modal"
        id={`id${pkg.package_id}`}
        onClick={() => setDescription(pkg.description)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Package</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setDescription(pkg.description)}
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={() => updateDescription(pkg.package_id, description)}
              >
                Save
              </button>
              <button
                type="button"
                class="btn btn-danger"
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
