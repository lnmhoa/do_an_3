import mongoose from 'mongoose';
import validateDB from '../utils/validateDB.js';

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            trim: true,
            minlength: [1, 'Tên người dùng không được để trống!'],
            maxlength: [30, 'Tên người dùng không vượt quá 30 kí tự!'],
        },
        password: {
            type: String,
            require: true,
            trim: true,
            minlength: [6, 'Mật khẩu không được để trống!'],
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            validate: {
                validator: validateDB.checkEmail,
                message: 'Vui lòng nhập email hợp lệ!',
            },
        },
        gender: {
            type: String,
            default: 'Nam',
            trim: true,
            validate: {
                validator: function (value) {
                    return validateDB.checkLengthInRange(value, 2, 3);
                },
                message: 'Thông tin không hợp lệ!',
            },
        },
        isAdmin: {
            type: Boolean,
            default: false,
            trim: true,
            validate: {
                validator: validateDB.checkBoolean,
                message: 'Thông tin không hợp lệ!',
            },
        },
        phoneNumber: {
            type: String,
            unique: true,
            require: true,
            trim: true,
            validate: {
                validator: function (value) {
                    return validateDB.checkValidLength(value, 10);
                },
                message: 'Số điện thoại phải có 10 số!',
            },
        },
        dateOfBirth: {
            type: Date,
            validate: {
                validator: validateDB.checkDateInput,
                message: 'Ngày sinh phải là một ngày hợp lệ!',
            },
        },
        avatar: {
            type: String,
            trim: true,
            minlength: [1, 'Thông tin ảnh đại diện không hợp lệ!'],
        },
        block: {
            type: Boolean,
            default: false,
            validate: {
                validator: validateDB.checkBoolean,
                message: 'Thông tin không hợp lệ!',
            },
        },
        access_token: {
            type: String,
            trim: true,
            minlength: [1, 'Thông tin không hợp lệ!'],
        },
        refresh_token: {
            type: String,
            trim: true,
            minlength: [1, 'Thông tin không hợp lệ!'],
        },
    },
    {
        timestamps: true,
    },
);

const User = mongoose.model('User', userSchema);

export default User;
