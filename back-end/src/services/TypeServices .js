import Type from '../models/TypeModel'

const createType = (typeInfo) => {
    return new Promise(async (resolve, reject) => {
        const { typeName, image } = typeInfo;
        try {
            const checkType = await Type.findOne({
                typeName: typeName,
            });
            if (checkType !== null) {
                resolve({
                    status: 'OK',
                    message: 'Loại sản phẩm đã tồn tại!',
                });
            }
            const newType = await Type.create({
                typeName,
                image,
            });
            if (newType) {
                resolve({
                    status: 'OK',
                    message: 'Thêm mới thành công',
                    data: newType,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

const updateType = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkType = await Type.findOne({
                _id: id,
            });
            if (checkType === null) {
                resolve({
                    status: 'OK',
                    message: 'Loại sản phẩm không tồn tại!',
                });
            }
            const updateType = await Type.findByIdAndUpdate(id, data, { new: true });
            resolve({
                status: 'OK',
                message: 'Cập nhật thành công',
                data: updateType,
            });
        } catch (e) {
            reject(e);
            9;
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
            }
            resolve({
                status: 'OK',
                message: 'Thành công',
                data: infoType,
            });
        } catch (e) {
            reject(e);
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
            }
            await Type.findByIdAndDelete(id);
            resolve({
                status: 'OK',
                message: 'Thành công',
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await Type.find();
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: allType,
            });
        } catch (e) {
            reject(e);
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
