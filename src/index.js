require("dotenv").config();
const express = require("express");
const router = require("./routes");
const auth = require("./middlewares/auth");
require("./database");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(auth);

// Router
app.use("/api", router);
// Start
app.listen(3000, () => {
  console.log("Server is running on ", `http://localhost:${3000}`);
});
