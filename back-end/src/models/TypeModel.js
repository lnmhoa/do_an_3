import mongoose from 'mongoose'
import validateDB from '../utils/validateDB'

const typeSchema = new mongoose.Schema(
    {
        TypeName: { 
            type: String,
            require: true,
            unique: true, 
            trim: true,
            minlength: [1, "Loại sản phẩm không được để trống!"],
            maxlength: [50, "Tên loại sản phẩm không vượt quá 50 kí tự!"],
        },
        image: { 
            type: String,
            require: true,
            unique: true, 
            trim: true,
            minlength: [1, "Hình ảnh loại sản phẩm không được để trống!"],
        },
    },
    {
        timestamps: true,
    },
);

const Type = mongoose.model('Type', typeSchema);

export default Type;
