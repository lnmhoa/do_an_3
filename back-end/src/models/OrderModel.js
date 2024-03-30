const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    orderedDate: { type: Date },
    isPaid: { type: Boolean, default: false },
    totalPrice: { type: Number, required: true },
    orderItem: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
        },
    ],
    DeliveryInformation: {
        fullName: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
