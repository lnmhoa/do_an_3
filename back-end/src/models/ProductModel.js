const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        productName: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        priceProduct: { type: Number, required: true },
        description: { type: String, required: true },
        countInStock: { type: Number, required: true },
        brand: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Brand',
            required: false,
        },
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Type',
            required: false,
        },
    },
    {
        timestamps: true,
    },
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
