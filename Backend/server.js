const app = require("./src/app");
const dotenv = require("dotenv").config()
const connnectionDB = require("./src/config/db");

connnectionDB();

app.listen(5000, () => {
  console.log("Server is running");
});
