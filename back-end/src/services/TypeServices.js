import Type from '../models/typeModel.js'

const createType = (typeInfo) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkType = await Type.findOne({
                typeName: typeInfo.typeName,
            });
            if (checkType !== null) {
                resolve({
                    status: 'OK',
                    message: 'Loại sản phẩm đã tồn tại!',
                });
                return;
            }
            const newType = await Type.create({
                typeInfo
            });
            if (newType) {
                resolve({
                    status: 'OK',
                    message: 'Thêm mới thành công',
                    data: newType,
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

const updateType = (data, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkType = await Type.findById(id);
            if (checkType === null) {
                resolve({
                    status: 'OK',
                    message: 'Loại sản phẩm không tồn tại!',
                });
                return;
            }
            const updateType = await Type.findByIdAndUpdate(id, data, { new: true });
            resolve({
                status: 'OK',
                message: 'Cập nhật thành công',
                data: updateType,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const getDetailType = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const infoType = await Type.findById(id);
            if (infoType === null) {
                resolve({
                    status: 'OK',
                    message: 'Loại sản phẩm không tồn tại!',
                });
                return
            }
            resolve({
                status: 'OK',
                message: 'Thành công',
                data: infoType,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const deleteType = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkType = await Type.findById(id);
            if (checkType === null) {
                resolve({
                    status: 'OK',
                    message: 'Loại sản phẩm không tồn tại!',
                });
                return
            }
            await Type.findByIdAndDelete(id);
            resolve({
                status: 'OK',
                message: 'Xóa thành công',
            });
        } catch (error) {
            reject(error);
        }
    });
};

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await Type.find();
            resolve({
                status: 'OK',
                message: 'Thành công',
                data: allType,
            });
        } catch (error) {
            reject(error);
        }
    });
};

export default {
    createType,
    getDetailType,
    updateType,
    deleteType,
    getAllType,
};
