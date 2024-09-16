const mongoose = require('mongoose');
import validateDB from '../utils/validateDB';

const brandSchema = new mongoose.Schema(
    {
        brandName: { 
            type: String, 
            require: true,
            trim: true,
            minlength: [1, "Tên thương hiệu phải có ít nhất 1 kí tự!"],
            maxlength: [50, "Tên thương hiệu không vượt quá 50 kí tự!"],
            validate: {
                validator: validate.checkWhitespace,
                message: "Tên thương hiệu không được để trống!"
            }
        },
        image: { 
            type: String, 
            require: true,
            trim: true,
            validate: {
                validator: validate.checkWhitespace,
                message: "Hình ảnh thương hiệu không được để trống!"
            }
        },
    },
    {
        timestamps: true,
    },
);

const Brand = mongoose.model('Brand', brandSchema);

export default Brand;
