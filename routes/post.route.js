const express = require("express");
const Product = require("../models/posts.model.js");
const router = express.Router();
const { getPosts, getProductById, createProduct, updateProduct, deleteProduct , getPostsByCategory} = require("../controllers/post.controller.js")

router.get('/', getPosts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/category/:id', getPostsByCategory);




module.exports = router;