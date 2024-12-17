const ProductCategory = require("../models/post.category.model.js")

const createCategory = async (req, res) => {
    try {
        const category = await ProductCategory.create(req.body);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await ProductCategory.findById(id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getCategories = async (req, res) => {
    try {
        const productCategories = await ProductCategory.find({});
        res.status(200).json(productCategories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await ProductCategory.findByIdAndUpdate(id, req.body);
        if (!category) {
            return res.status(404).json({ message: "product not found" });
        }

        const updatedCategory = await ProductCategory.findById(id);
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await ProductCategory.findByIdAndDelete(id);
        if (!category) {
            return res.status(404).json({ message: " Product not found" });
        }

        res.status(200).json({ message: " Product data deleted successfully " });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getCategories,
    getCategoryById,

    createCategory,
    updateCategory,
    deleteCategory
}