import mongoose from 'mongoose'
import validateDB from '../utils/validateDB'

const brandSchema = new mongoose.Schema(
    {
        brandName: { 
            type: String, 
            require: true,
            unique: true, 
            trim: true,
            minlength: [1, "Tên thương hiệu không được để trống!"],
            maxlength: [50, "Tên thương hiệu không vượt quá 50 kí tự!"],
        },
        image: {
            type: String, 
            require: true,
            unique: true, 
            trim: true,
            minlength: [1, "Hình ảnh thương hiệu không được để trống!"],
        },
    },
    {
        timestamps: true,
    },
);

const Brand = mongoose.model('Brand', brandSchema);

export default Brand;
