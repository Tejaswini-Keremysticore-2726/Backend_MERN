// const mongoose = require("mongoose");

// const connnectionDB = async () => {
//   try {
//     const connect = await mongoose.connect(process.env.MONGODB_URI);
//     console.log("Database connected successfully✅");
//   } catch (error) {
//     console.log("Failed Connection ", error.message);
//   }
// };
// module.exports = connnectionDB;

const mongoose = require("mongoose");

const connnectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully ✅");
  } catch (error) {
    console.log("Failed Connection:", error.message);
    process.exit(1);
  }
};

module.exports = connnectionDB;
