const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,

    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        //select: false // Exclude password from responses
    },
    phoneNumber: {
        type: String,
        trim: true
    },
    addresses: [{
        street: String,
        city: String,
        state: String,
        country: String,
        zipCode: String,
        isDefault: {
            type: Boolean,
            default: false
        }
    }],

    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Posts'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);

