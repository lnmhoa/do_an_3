const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
        reduction: { type: String, require: true },
        startTime: { type: Date, require: true },
        endTime: { type: Date },
        isEnd: { type: Boolean, default: false },
    },
);

const Price = mongoose.model('Price', priceSchema);

module.exports = Price;
