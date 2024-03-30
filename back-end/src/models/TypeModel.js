const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema(
    {
        TypeName: { type: String },
    },
    {
        timestamps: true,
    },
);

const Type = mongoose.model('Type', typeSchema);

module.exports = Type;
