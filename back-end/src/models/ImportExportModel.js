import mongoose from 'mongoose';
import validateDB from '../utils/validateDB.js';

const importExportSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
            validate: {
                validator: async function (value) {
                    if (!mongoose.Types.ObjectId.isValid(value)) {
                        return false;
                    }
                    const checkProduct = await this.model('Product').findById(value);
                    return !!checkProduct;
                },
                message: 'Sản phẩm không tồn tại!',
            },
        },
        type: {
            type: String,
            required: true,
            trim: true,
            minLength: [1, 'Loại không được để trống!'],
        },
        count: {
            type: Number,
            required: true,
            trim: true,
            minLength: [1, 'Số lượng không được để trống!'],
            validate: {
                validator: validateDB.checkNumber,
                message: 'Số lượng sản phẩm không hợp lệ!'
            }
        },
        describe: {
            type: String,
            required: true,
            minLength: [1, 'Mô tả không được để trống!'],
        },
    },
    {
        timestamps: true,
    },
);

const ImportExport = mongoose.model('ImportExport', importExportSchema);

export default ImportExport;