// // const cookieParser = require("cookie-parser");
// const app = require("./src/app");
// const dotenv = require("dotenv").config();
// const connnectionDB = require("./src/config/db");

// // app.use(cookieParser());
// connnectionDB();

// app.listen(5000, () => {
//   console.log("Server is running");
// });

const app = require("./src/app");
require("dotenv").config();
const connnectionDB = require("./src/config/db");

connnectionDB();

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
