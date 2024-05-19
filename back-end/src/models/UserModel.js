const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        fullName: { type: String },
        password: { type: String },
        email: { type: String, unique: true },
        gender: { type: String, default: 'Nam' },
        isAdmin: { type: Boolean, default: false },
        phoneNumber: { type: String, unique: true },
        dateOfBirth: { type: Date },
        avatar: { type: String },
        address: { type: String },
        block: { type: String, default: false },
        access_token: { type: String },
        refresh_token: { type: String },
    },
    {
        timestamps: true,
    },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
