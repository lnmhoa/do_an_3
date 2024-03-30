const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema(
    {
        brandName: { type: String, require: true },
        image: { type: String, require: true },
    },
    {
        timestamps: true,
    },
);

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
