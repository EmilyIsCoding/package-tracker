import React from "react";

const ListPackages = ({ packages, deletePackage }) => {
  return (
    <>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Tracking Number</th>
            <th>Description</th>
            <th>Status</th>
            <th>Estimated Delivery</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg.package_id}>
              <td>{pkg.tracking_number}</td>
              <td>{pkg.description}</td>
              <td>{pkg.status}</td>
              <td>{pkg.est_delivery_date}</td>
              <td>
                {/* <EditPackage pkg={pkg} updateDescription={updateDescription} /> */}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deletePackage(pkg.package_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListPackages;
