require("dotenv").config();
const express = require("express");
const pool = require("./db");
const EasyPostClient = require("@easypost/api");
const client = new EasyPostClient(process.env.EASYPOST_API_KEY);
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// ROUTES

// Create a package
app.post("/packages", async (req, res) => {
  try {
    const { tracking_number } = req.body;

    const tracker = await client.Tracker.create({
      tracking_code: tracking_number,
    });

    // const newPackage = await pool.query(
    //   "INSERT INTO packages (tracking_number) VALUES($1) RETURNING *",
    //   [tracking_number]
    // );

    // console.log(`New Package: ${newPackage}`);
    console.log(`This is the tracker: ${tracker}`);

    res.json({
      tracking_code: tracking_number,
    });
    // res.json(newPackage.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

// Get all packages
app.get("/packages", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      packages: ["123", "1234", "12345"],
    },
  });
});

// Get a package by id

// Update a package

// Delete a package

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
