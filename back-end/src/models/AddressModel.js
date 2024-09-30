import mongoose from 'mongoose';
import validateDB from '../utils/ValidateDB.js';

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
        provinceAddress: {
            type: String,
            required: true,
            trim: true,
            minLength: [1, 'Thành phố không được để trống!'],
            validate: {
                validator: validateDB.checkNoneNumber,
                message: 'Tên thành phố không hợp lệ!',
            },
        },
        districtsAddress: {
            required: true,
            trim: true,
            minLength: [1, 'Quận/ Huyện không được để trống!'],
        },
        detailAddress: {
            required: true,
            trim: true,
            minLength: [1, 'Địa chỉ chi tiết không được để trống'],
        },
        defaultAddress: {
            type: Boolean,
            default: false,
            validate: [
                {
                    validator: validateDB.checkBoolean,
                    message: 'Giá trị không hợp lệ!',
                },
            ],
        },
    },
    {
        timestamps: true,
    },
);

const Address = mongoose.model('Address', addressSchema);

export default Address;