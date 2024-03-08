import React from "react";
import EditPackage from "./EditPackage";

const { format, parseISO } = require("date-fns");

const ListPackages = ({ packages, deletePackage, updateDescription }) => {
  return (
    <>
      {" "}
      <table className="table table-striped table-hover mt-5 text-center">
        <thead>
          <tr>
            <th>Id</th>
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
              <td>{pkg.package_id}</td>
              <td>{pkg.tracking_number}</td>
              <td>{pkg.description}</td>
              <td>{pkg.status}</td>
              <td>
                {pkg.estimated_delivery_date
                  ? format(
                      parseISO(pkg.estimated_delivery_date),
                      "MMM dd, yyyy 'at' hh:mm aaaa"
                    )
                  : "N/A"}
              </td>
              <td>
                <EditPackage
                  pkg={pkg}
                  updateDescription={updateDescription}
                ></EditPackage>
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
