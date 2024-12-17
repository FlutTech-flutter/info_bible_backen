const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    featuredImage: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        trim: true
    },

    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    tags: [{
        type: String
    }],

    featured: {
        type: Boolean,
        default: false
    },

});

const Product = mongoose.model('Product', postSchema);

module.exports = Product;