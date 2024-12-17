const express = require("express");
const ProductCategory = require("../models/post.category.model.js");
const router = express.Router();

const { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory } = require("../controllers/category.controller.js");


router.get('/', getCategories);
router.get('/:id', getCategoryById);
router.post('/', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;