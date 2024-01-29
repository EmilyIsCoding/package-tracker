require("dotenv").config();
const express = require("express");
const pool = require("./db");
const EasyPostClient = require("@easypost/api");
const client = new EasyPostClient(process.env.EASYPOST_API_KEY);
const app = express();
const cors = require("cors");
const { format, parseISO } = require("date-fns");

app.use(cors());
app.use(express.json());

// ROUTES

// Create a package
app.post("/packages", async (req, res) => {
  try {
    const tracker = await client.Tracker.create({
      tracking_code: req.body.tracking_number,
    });

    const estDeliveryDate = format(
      parseISO(tracker.est_delivery_date),
      "MMM dd, yyyy 'at' hh:mm aaaa"
    );

    const newPackage = await pool.query(
      "INSERT INTO packages (tracking_number, description, status, est_delivery_date) VALUES($1, $2, $3, $4) RETURNING *",
      [
        req.body.tracking_number,
        req.body.description,
        tracker.status,
        estDeliveryDate,
      ]
    );

    console.log(tracker);
    console.log(estDeliveryDate);
    res.json(newPackage.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

// Get all packages
app.get("/packages", async (req, res) => {
  try {
    const allPackages = await pool.query("SELECT * FROM packages");
    res.json(allPackages.rows);
  } catch (err) {
    console.error(err);
  }
});

// Get a package by id
app.get("/packages/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const package = await pool.query(
      "SELECT * FROM packages WHERE package_id = $1",
      [id]
    );
    res.json(package.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

// Update a package
app.put("/packages/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updatePackage = await pool.query(
      "UPDATE packages SET description = $1 WHERE package_id = $2",
      [description, id]
    );
    res.json("Package was updated!");
  } catch (err) {
    console.error(err);
  }
});

// Delete a package
app.delete("/packages/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletePackage = await pool.query(
      "DELETE FROM packages WHERE package_id = $1",
      [id]
    );
    res.json("Package was deleted!");
  } catch (err) {
    console.error(err);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
