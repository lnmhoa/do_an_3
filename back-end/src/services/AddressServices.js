import Address from '../models/addressModel.js';

const createAddress = (data, idUser) => {
    return new Promise(async (resolve, reject) => {
        const { provinceAddress, districtsAddress, detailAddress, defaultAddress } = data;
        try {
            const checkUser = await User.findById(idUser);
            if (checkUser === null) {
                resolve({
                    status: 'OK',
                    message: 'Tài khoản không tồn tại!',
                });
                return;
            }
            const newAddress = await Address.create({
                idUser,
                data
            });
            if (newAddress) {
                resolve({
                    status: 'OK',
                    message: 'Thêm địa chỉ thành công',
                    data: newAddress,
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

const updateAddress = (data, idUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findById(idUser);
            if (checkUser === null) {
                resolve({
                    status: 'OK',
                    message: 'Tài khoản không tồn tại!',
                });
                return;
            }
            const checkAddress = await Address.findById(data.idAddress)
            if (checkAddress === null) {
                resolve({
                    status: 'OK',
                    message: 'Địa chỉ không tồn tại!',
                });
                return
            }
            const updateAddress = await Address.findByIdAndUpdate(data.idAddress, idUser:idUser, data, { new: true });
            resolve({
                status: 'OK',
                message: 'Cập nhật địa chỉ thành công',
                data: updateAddress,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const getDetailAddress = (idAddress, idUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findById(idUser);
            if (checkUser === null) {
                resolve({
                    status: 'OK',
                    message: 'Tài khoản không tồn tại!',
                });
                return;
            }
            const checkAddress = await Address.findById(idAddress)
            if (checkAddress === null) {
                resolve({
                    status: 'OK',
                    message: 'Địa chỉ không tồn tại!',
                });
                return
            }
            const Address = await Address.findById(id);
            if (Address === null) {
                resolve({
                    status: 'OK',
                    message: 'Thương hiệu không tồn tại!',
                });
            }
            resolve({
                status: 'OK',
                message: 'Thành công',
                data: Address,
            });
        } catch (error) {
            reject(error);
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
                    message: 'Thương hiệu không tồn tại!',
                });
                return;
            }
            await Address.findByIdAndDelete(id);
            resolve({
                status: 'OK',
                message: 'Xóa thành công',
            });
        } catch (error) {
            reject(error);
        }
    });
};

const getAllAddress = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allAddress = await Address.find();
            resolve({
                status: 'OK',
                message: 'Thành công',
                data: allAddress,
            });
        } catch (error) {
            reject(error);
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
