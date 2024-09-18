import mongoose from 'mongoose';
import validateDB from '../utils/validateDB';

const priceSchema = new mongoose.Schema({
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
    reduction: {
        type: String,
        required: true,
        trim: true,
        validate: [
            {
                validator: validateDB.checkNumber,
                message: 'Mức giảm giá không hợp lệ!',
            },
            {
                validator: function (value) {
                    return validateDB.checkNumberInRange(value, 1, 99);
                },
                message: 'Mức giảm giá phải nằm trong ngưỡng 1 - 99!',
            },
        ],
    },
    startTime: {
        type: Date,
        require: true,
        trim: true,
        validate: [
            {
                validator: validateDB.checkDateInput,
                message: 'Ngày bắt đầu giảm giá không hợp lệ!',
            },
        ],
    },
    endTime: {
        type: Date,
        require: true,
        trim: true,
        validate: [
            {
                validator: validateDB.checkDateInput,
                message: 'Ngày kết thúc giảm giá không hợp lệ!',
            },
        ],
    },
    isEnd: {
        type: Boolean,
        default: false,
        validate: [
            {
                validator: validateDB.checkBoolean,
                message: 'Giá trị kết thúc phải đúng hoặc sai!',
            },
        ],
    },
});

const Price = mongoose.model('Price', priceSchema);

module.exports = Price;
