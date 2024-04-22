const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        fullName: { type: String },
        password: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        gender: { type: String, required: true, unique: true },
        isAdmin: { type: Boolean, default: false, required: true },
        phoneNumber: { type: String, required: true, unique: true },
        dateOfBirth: { type: Date },
        avatar: { type: String },
        address: { type: String },
        access_token: { type: String },
        refresh_token: { type: String },
    },
    {
        timestamps: true,
    },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
