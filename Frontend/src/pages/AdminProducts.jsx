import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { FaBox } from "react-icons/fa";

const AdminProducts = () => {
  const [prodata, setProdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successmsg, setSuccessmsg] = useState("");
  const [formmodal, setFormmodal] = useState(false);
  const [formdata, setFormdata] = useState({
    pro_name: "",
    pro_price: "",
    pro_url: "",
    pro_category: "",
    pro_stock: "",
  });

  const [updatemodal, setUpdatemodal] = useState(false); // update on off modal
  const [updateddata, setUpdateddata] = useState({}); //updated data store

  const fetchProducts = async () => {
    setLoading(true);
    const res = await axios.get("http://localhost:5000/api/admin/products", {
      withCredentials: true,
    });
    setProdata(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/admin/products/${updateddata._id}`,
        updateddata,
        { withCredentials: true },
      );
      setUpdatemodal(false);
      fetchProducts();
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/admin/products", formdata);
      setFormmodal(false);
      setFormdata({
        // ← ye add karo

        pro_name: "",
        pro_price: "",
        pro_url: "",
        pro_category: "",
        pro_stock: "",
      });
      

      setSuccessmsg("product added successfully");
      setTimeout(() => setSuccessmsg(false), 3000);
      fetchProducts();
    } catch (err) {
      console.log(err.message);
    }
  };

  if (loading === true) {
    return <div>Loading...</div>;
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/products/${id}`);
      fetchProducts();
      const confirm = window.confirm(
        "Are you sure you want to delete the product",
      );
      if (!confirm) {
        return;
      }
      setSuccessmsg("product deleted sucessfullly");
      setTimeout(() => setSuccessmsg(false), 3000);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="p-8 pt-20 px-8 h-150 bg-black font-sans">
        <h2 className="mb-5 text-2xl font-bold text-white flex justify-between">
          <div className="flex gap-2">
            <FaBox size={25} className="text-amber-900 mt-1" />
            Products
          </div>
          <button
            className="bg-amber-600 text-white hover:bg-amber-900 p-1 rounded-lg"
            onClick={() => setFormmodal(true)}
          >
            Add Products
          </button>
        </h2>

        <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
          <table className="min-w-full border-collapse">
            <thead className="bg-amber-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Prod_img
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Prod_Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Prod_Price
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Prod_Category
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Stock
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="font-semibold">
              {prodata.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-5">
                    No Products Found
                  </td>
                </tr>
              ) : (
                prodata.map((eachprod) => (
                  <tr
                    key={eachprod._id}
                    className="hover:bg-gray-100 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <img
                        src={eachprod.pro_url}
                        alt={eachprod.pro_name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    </td>
                    <td className="px-4 py-3">{eachprod.pro_name}</td>
                    <td className="px-4 py-3">₹{eachprod.pro_price}</td>
                    <td className="px-4 py-3">{eachprod.pro_category}</td>
                    <td className="px-4 py-3">{eachprod.pro_stock}</td>
                    <td className="py-3 flex gap-5 justify-center mt-2">
                      <button
                        onClick={() => {
                          setUpdateddata(eachprod);
                          setUpdatemodal(true);
                        }}
                      >
                        <FaEdit
                          size={25}
                          className="text-amber-700 hover:text-amber-900"
                        />
                      </button>
                      <button onClick={() => handleDelete(eachprod._id)}>
                        <FiTrash2
                          size={25}
                          className="text-amber-700 hover:text-amber-900"
                        />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Add Product Modal */}
        {formmodal && (
          <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-5 rounded-lg">
              <h1 className="font-bold text-2xl p-2 border-b-2 mb-2">
                Add Product
              </h1>
              <div className="flex flex-col gap-2 w-100 p-2">
                <input
                  type="text"
                  placeholder="Product Name"
                  name="pro_name"
                  value={formdata.pro_name}
                  onChange={(e) =>
                    setFormdata({
                      ...formdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="border p-2 rounded-lg border-gray-300"
                />
                <input
                  type="number"
                  placeholder="Product Price"
                  name="pro_price"
                  value={formdata.pro_price}
                  onChange={(e) =>
                    setFormdata({
                      ...formdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="border p-2 rounded-lg border-gray-300"
                />
                <input
                  type="text"
                  placeholder="Product URL"
                  name="pro_url"
                  value={formdata.pro_url}
                  onChange={(e) =>
                    setFormdata({
                      ...formdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="border p-2 rounded-lg border-gray-300"
                />
                <input
                  type="text"
                  placeholder="Product Category"
                  name="pro_category"
                  value={formdata.pro_category}
                  onChange={(e) =>
                    setFormdata({
                      ...formdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="border p-2 rounded-lg border-gray-300"
                />
                <input
                  type="number"
                  placeholder="Product Stock"
                  name="pro_stock"
                  value={formdata.pro_stock}
                  onChange={(e) =>
                    setFormdata({
                      ...formdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="border p-2 rounded-lg border-gray-300"
                />
                <div className="flex justify-end gap-5 font-semibold text-white mt-3">
                  <button
                    className="text-black border border-gray-300 p-2 rounded-lg w-20"
                    onClick={() => setFormmodal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-black p-2 rounded-lg w-30"
                    onClick={handleSubmit}
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Update Modal */}
        {updatemodal && (
          <div
            className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setUpdatemodal(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <h1 className="text-2xl font-bold text-black mb-6 border-b-2 border-black pb-3">
                ✏️ Edit Product
              </h1>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Product Name"
                  defaultValue={updateddata.pro_name}
                  onChange={(e) =>
                    setUpdateddata({ ...updateddata, pro_name: e.target.value })
                  }
                  className="w-full border-2 border-gray-300 rounded-lg p-3 outline-none"
                />
                <input
                  type="number"
                  placeholder="Product Price"
                  defaultValue={updateddata.pro_price}
                  onChange={(e) =>
                    setUpdateddata({
                      ...updateddata,
                      pro_price: e.target.value,
                    })
                  }
                  className="w-full border-2 border-gray-300 rounded-lg p-3 outline-none"
                />
                <input
                  type="text"
                  placeholder="Product URL"
                  defaultValue={updateddata.pro_url}
                  onChange={(e) =>
                    setUpdateddata({ ...updateddata, pro_url: e.target.value })
                  }
                  className="w-full border-2 border-gray-300 rounded-lg p-3 outline-none"
                />
                <input
                  type="text"
                  placeholder="Product Category"
                  defaultValue={updateddata.pro_category}
                  onChange={(e) =>
                    setUpdateddata({
                      ...updateddata,
                      pro_category: e.target.value,
                    })
                  }
                  className="w-full border-2 border-gray-300 rounded-lg p-3 outline-none"
                />
                <input
                  type="number"
                  placeholder="Product Stock"
                  defaultValue={updateddata.pro_stock}
                  onChange={(e) =>
                    setUpdateddata({
                      ...updateddata,
                      pro_stock: e.target.value,
                    })
                  }
                  className="w-full border-2 border-gray-300 rounded-lg p-3 outline-none"
                />
              </div>
              <div className="flex gap-3 mt-8 justify-end">
                <button
                  onClick={() => setUpdatemodal(false)}
                  className="px-6 py-2 rounded-lg border-2 border-gray-300 font-semibold hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-6 py-2 rounded-lg bg-black text-white font-semibold hover:bg-gray-800"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {successmsg && (
        <div className="fixed top-5 right-5 bg-green-500 text-white p-3 rounded-lg z-50">
          {successmsg}
        </div>
      )}
    </>
  );
};

export default AdminProducts;
