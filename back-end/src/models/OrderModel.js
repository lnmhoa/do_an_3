const mongoose = require('mongoose');
const { default: validateDB } = require('../utils/validateDB');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        validate: {
            validator: async function (value) {
                if (!mongoose.Types.ObjectId.isValid(value)) {
                    return false;
                }
                const checkUser = await this.model('User').findById(value);
                return !!checkUser;
            },
            messages: 'Người dùng không tồn tại!',
        },
    },
    orderedDate: { 
        type: Date,
        require: true,
        trim: true,
        validate: [
            {
                validator: validateDB.checkDateInput,
                message: 'Ngày đặt hàng không hợp lệ!',
            },
        ],
    },
    isPaid: { 
        type: Boolean,
        default: false,
        trim: true,
        validate: {
            validator: validateDB.checkBoolean,
            message: 'Thông tin không hợp lệ!',
        },
    },
    totalPrice: { 
        type: Number, 
        required: true,
        trim: true,
        validate: {
            validator: validateDB.checkNumber,
            message: 'Thông tin không hợp lệ!',
        },
    },
    orderItem: [
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
                    messages: 'Sản phẩm không tồn tại!',
                },
            },
        },
    ],
    DeliveryInformation: {
        fullName: {
            type: String,
            required: true,
            trim: true,
            minLength: [1, 'Tên người nhận hàng không được để trống!']
        },
        address: {
            type: String,
            required: true,
            trim: true,
            minLength: [1, 'Địa chỉ nhận hàng không được để trống!']
        },
        phone: {
            type: Number,
            required: true,
            trim: true,
            minLength: [1, 'Số điện thoại nhận hàng không được để trống!'],
            validate: {
                validator: function (value) {
                    return validateDB.checkValidLength(value, 10);
                },
                message: 'Số điện thoại phải có 10 số!',
            },
        },
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
