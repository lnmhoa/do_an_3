const mongoose = require('mongoose');
const { default: validateDB } = require('../utils/validateDB');

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
            messages: 'Sản phẩm không tồn tại!',
        },
    },
    price: {
        type: Number,
        require: true,
        validate: {
            validator: validateDB.checkNumber,
            messages: 'Giá phải là số!',
        },
    },
    startTime: {
        type: Date,
        require: true,
        trim: true,
        validate: [
            {
                validator: validateDB.checkDateInput,
                message: 'Ngày bắt đầu không hợp lệ!',
            },
        ],
    },
    endTime: {
        type: Date,
        trim: true,
        validate: [
            {
                validator: validateDB.checkDateInput,
                message: 'Ngày kết thúc không hợp lệ!',
            },
        ],
    },
    isEnd: {
        type: Boolean,
        default: false,
        validate: {
            validator: validateDB.checkBoolean,
            message: 'Giá trị kết thúc không hợp lệ!',
        },
    },
});

const Price = mongoose.model('Price', priceSchema);

module.exports = Price;
