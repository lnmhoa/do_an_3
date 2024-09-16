const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        fullName: { 
            type: String, 
            trim: true, 
            minlength: [1, "Tên người dùng phải có ít nhất 1 kí tự!"],
            maxlength: [30, "Tên người dùng không quá 30 kí tự!"]
        },
        password: { type: String, trim: true, minlength: [1, "Tên người dùng phải có ít nhất 1 kí tự"] },
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
