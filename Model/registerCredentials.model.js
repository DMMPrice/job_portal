const mongoose = require("mongoose");

const registerCredentialsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

exports.registerCredentials = mongoose.model('registerCredentials', registerCredentialsSchema);