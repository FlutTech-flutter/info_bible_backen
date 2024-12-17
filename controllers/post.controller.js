const Product = require("../models/posts.model.js");
const getPosts = async (req, res) => {
  try {
    const Posts = await Product.find({});
    res.status(200).json(Posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getPostsByCategory= async (req, res)=>{
  try {
    const { id } = req.params;

    const product = await Product.find({categories	:id});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: " Product not found" });
    }

    res.status(200).json({ message: " Product data deleted successfully " });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
module.exports = {
  getPosts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getPostsByCategory
}