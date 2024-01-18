require("dotenv").config();
const express = require("express");
const app = express();
// const db = require("./db");

const port = process.env.PGPORT || 3001;
app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
