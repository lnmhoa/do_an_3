import Address from '../models/AddressModel';

const createAddress = (idUser, addressInfo) => {
    return new Promise(async (resolve, reject) => {
        const { aprovinceAddress, districtsAddress, detailAddress, defaultAddress } = addressInfo;
        try {
            const checkUser = await User.findById(idUser);
            if (checkUser === null) {
                resolve({
                    status: 'OK',
                    message: 'Tài khoản không tồn tại',
                });
            }
            const newAddress = await Address.create({
                idUser,
                aprovinceAddress,
                districtsAddress,
                detailAddress,
                defaultAddress,
            });
            if (newAddress) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newAddress,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

const updateAddress = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkAddress = await Address.findOne({
                _id: id,
            });
            if (checkAddress === null) {
                resolve({
                    status: 'OK',
                    message: 'Thương hiệu không tồn tại!',
                });
            }
            const updateAddress = await Address.findByIdAndUpdate(id, data, { new: true });
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updateAddress,
            });
        } catch (e) {
            reject(e);
            9;
        }
    });
};

const getDetailAddress = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const Address = await Address.findById(id);
            if (Address === null) {
                resolve({
                    status: 'OK',
                    message: 'Thương hiệu không tồn tại!',
                });
            }
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: Address,
            });
        } catch (e) {
            reject(e);
        }
    });
};

const deleteAddress = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkAddress = await Address.findById(id);
            if (checkAddress === null) {
                resolve({
                    status: 'OK',
                    message: 'Thương hiệu đã tồn tại!',
                });
            }
            await Address.findByIdAndDelete(id);
            resolve({
                status: 'OK',
                message: 'SUCCESS',
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getAllAddress = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allAddress = await Address.find();
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: allAddress,
            });
        } catch (e) {
            reject(e);
        }
    });
};

export default {
    createAddress,
    updateAddress,
    getDetailAddress,
    deleteAddress,
    getAllAddress,
};
