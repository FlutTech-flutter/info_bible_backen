const express = require("express");
const Product = require("../models/posts.model.js");
const router = express.Router();
const { getPostsByTags, getPosts, getProductById, createProduct, updateProduct, deleteProduct, getPostsByCategory, getFeaturedPosts } = require("../controllers/post.controller.js")

router.get('/', getPosts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/category/:id', getPostsByCategory);
router.get('/featured/true', getFeaturedPosts);
router.get('/tags/:tag', getPostsByTags);



module.exports = router;