import mongoose from 'mongoose';
import validateDB from '../utils/validateDB.js';

const addressSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.type.ObjectId,
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
                message: 'Người dùng không tồn tại!',
            },
        },
        cartProduct: [
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
                quantity: { 
                    type: Number, 
                    required: true,
                    minLength: [1, 'Số lượng không được để trống!'],
                    validate: {
                        validator: validateDB.checkNumber,
                        message: 'Số lượng sản phẩm không hợp lệ!'
                    }
                },
            }
        ]
    },
    {
        timestamps: true,
    },
);

const Address = mongoose.model('Address', addressSchema);

export default Address;