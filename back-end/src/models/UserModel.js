import mongoose from 'mongoose'
import validate from '../utils/validateDB'

const userSchema = new mongoose.Schema(
    {
        fullName: { 
            type: String, 
            trim: true, 
            minlength: [1, "Tên người dùng phải có ít nhất 1 kí tự!"],
            maxlength: [30, "Tên người dùng không vượt quá 30 kí tự!"],
            validate: {
                validator: validate.checkWhitespace,
                message: "Tên người dùng không được để trống!"
            },
        },
        password: { 
            type: String, 
            require: true,
            trim: true, 
            minlength: [6, "Mật khẩu phải có ít nhất 1 kí tự!"]
            maxlength: [18, "Mật khẩu không vượt quá 18 kí tự!"],
            validate: {
                validator: validate.checkWhitespace,
                message: "Mật khẩu không được để trống!"
            },
        },
        email: { 
            type: String, 
            unique: true,
            trim: true,
            validate: [
                {
                    validator: validate.checkEmail,
                    message: "Vui lòng nhập email hợp lệ!"
                },
                {
                    validator: validate.checkWhitespace,
                    message: "Email không được để trống!"
                },
            ]
        },
        gender: { 
            type: String, 
            default: 'Nam',
            trim: true,
            validate: {
                validator: function(value) {
                    return validate.checkLengthInRange(value, 2,3);
                },
                message: "Thông tin không hợp lệ!"
            },
        },
        isAdmin: { 
            type: Boolean,
            default: false,
            trim: true,
            validate: {
                validator: validate.checkBoolean,
                message: "Thông tin không hợp lệ!"
            }
        },
        phoneNumber: {
            type: String, 
            unique: true, 
            require: true,
            trim: true,
            validate: {
                validator: function(value) {
                  return validate.checkValidLength(value, 11);
                },
                message: "Số điện thoại phải có 11 số!"
              }
        },
        dateOfBirth: { 
            type: Date,
            validate: {
                validator: validate.checkDateInput,
                message: "Ngày sinh phải là một ngày hợp lệ!"
              }
        },
        avatar: { 
            type: String, 
            trim: true,
            validate: {
                validator: validate.checkWhitespace,
                message: "Thông tin không hợp lệ!"
            }
        },
        address: { 
            type: String, 
            trim: true, 
            validate: {
                validator: validate.checkWhitespace,
                message: "Thông tin không hợp lệ!"
            } 
        },
        block: { 
            type: Boolean, 
            default: false,
            validate: [
                {
                    validator: validate.checkWhitespace,
                    message: "Thông tin không hợp lệ!"
                },
                {
                    validator: validate.checkBoolean,
                    message: "Thông tin không hợp lệ!"
                }
            ] 
        },
        access_token: { 
            type: String, 
            trim: true,
            validate: {
                validator: validate.checkWhitespace,
                message: "Thông tin không hợp lệ!"
            } 
        },
        refresh_token: { 
            type: String, 
            trim: true,
            validate: {
                validator: validate.checkWhitespace,
                message: "Thông tin không hợp lệ!"
            } 
        },
    },
    {
        timestamps: true,
    },
);

const User = mongoose.model('User', userSchema)

export default User
