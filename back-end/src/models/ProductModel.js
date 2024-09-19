import mongoose from 'mongoose';
import validateDB from '../utils/validateDB';

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: [1, 'Tên sản phẩm không được để trống!'],
        },
        image: {
            type: String,
            unique: true,
            require: true,
            trim: true,
            minlength: [1, 'Hình ảnh sản phẩm không được để trống!'],
        },
        description: {
            type: String,
            required: true,
            trim: true,
            minlength: [1, 'Mô tả sản phẩm không được để trống'],
        },
        brand: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Brand',
            required: true,
            validate: {
                validator: async function (value) {
                    if (!mongoose.Types.ObjectId.isValid(value)) {
                        return false;
                    }
                    const checkBrand = await this.model('Brand').findById(value);
                    return !!checkBrand;
                },
                message: 'Thương hiệu sản phẩm không tồn tại!',
            },
        },
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Type',
            required: true,
            validate: {
                validator: async function (value) {
                    if (!mongoose.Types.ObjectId.isValid(value)) {
                        return false;
                    }
                    const checkType = await this.model('Type').findById(value);
                    return !!checkType;
                },
                message: 'Loại sản phẩm không tồn tại!',
            },
        },
    },
    {
        timestamps: true,
    },
);

const Product = mongoose.model('Product', productSchema);

export default Product;
