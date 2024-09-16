const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema(
    {
        TypeName: { 
            type: String,
            require: true,
            trim: true,
            minlength: [1, "Loại sản phẩm phải có ít nhất 1 kí tự!"],
            maxlength: [50, "Loại sản phẩm không vượt quá 50 kí tự!"],
            validate: {
                validator: validate.checkWhitespace,
                message: "Tên loại không được để trống!"
            },
        },
        image: { 
            type: String
            require: true,
            trim: true,
            validate: {
                validator: function(v) {
                  return v.trim().length > 0;
                },
                message: "Thông tin không hợp lệ!"
            },
        },
    },
    {
        timestamps: true,
    },
);

const Type = mongoose.model('Type', typeSchema);

module.exports = Type;
