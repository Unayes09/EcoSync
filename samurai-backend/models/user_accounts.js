const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'Unassigned'
    },
    isLogin: {
        type: Boolean,
        default: false
    }
});

// Create model
const User = mongoose.model('User', userSchema);

module.exports = User;