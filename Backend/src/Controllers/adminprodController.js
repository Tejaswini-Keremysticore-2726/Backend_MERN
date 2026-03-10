const product = require("../models/productsModel");

const createprod = async (req, res) => {
  try {
    const { pro_name, pro_price, pro_url, pro_category, pro_stock } = req.body; //recive data from req.body
    const newprod = await product.create({
      pro_name,
      pro_price,
      pro_url,
      pro_category,
      pro_stock,
    });

    res.status(200).json(newprod);
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

const allprod = async (req, res) => {
  try {
    const findallprod = await product.find();
    res.status(200).json(findallprod);
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

const singleprod = async (req, res) => {
  try {
    const id = req.params.id;
    const findprodid = await product.findById(id);
    if (!findprodid) {
      res.status(404).json({ status: false, message: "not found" });
    } else {
      res.status(200).json(findprodid);
    }
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

const updateprod = async (req, res) => {
  try {
    const id = req.params.id;
    const { pro_name, pro_price, pro_url, pro_category, pro_stock } = req.body;
    const toupdateprod = await product.findByIdAndUpdate(
      id,
      {
        pro_name,
        pro_price,
        pro_url,
        pro_category,
        pro_stock,
      },
      { returnDocument: "after" }, // without it returns old product with it it returns new document returns updated document
    );
    res.status(200).json(toupdateprod);
  } catch (err) {
    res.status(500).json({ status: true, message: "internal server  error" });
  }
};

const deleteprod = async (req, res) => {
  try {
    const id = req.params.id;
    const todeleteprod = await product.findByIdAndDelete(id);
    if (todeleteprod) {
      res
        .status(200)
        .json({ status: true, message: "Product Deleted successfully" });
    } else {
      res.status(400).json({ status: false, message: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ status: false, message: "internal server error" });
  }
};

module.exports = { createprod, allprod, singleprod, updateprod, deleteprod };
