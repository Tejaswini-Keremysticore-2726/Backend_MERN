const mongoose = require("mongoose");

const productsdetailed = new mongoose.Schema(
  {
    pro_name: {
      type: String,
      required: true,
    },
    pro_price: {
      type: Number,
      required: true,
    },
    pro_url: {
      type: String,
    },
    pro_category: {
      type: String,
      required: true,
    },
    pro_stock: {
      type: Number,
    },
    createdAt: { type: Date, default: Date.now },
  },

  { timestamps: true },
);
module.exports = mongoose.model("product", productsdetailed);
