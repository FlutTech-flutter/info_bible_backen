const mongoose = require('mongoose');

const PostCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // Ensure unique category names
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    description: {
        type: String,
        trim: true
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category' // Reference to the parent category
    },
    image: {
        type: String // URL to the category image
    },
    featured: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Category', PostCategorySchema);