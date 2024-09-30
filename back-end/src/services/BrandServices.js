import Brand from '../models/brandModel.js'

const createBrand = (brandInfo) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkBrand = await Brand.findOne({
                brandName: brandInfo.brandName,
            });
            if (checkBrand !== null) {
                resolve({
                    status: 'OK',
                    message: 'Thương hiệu đã tồn tại!',
                });
                return;
            }
            const newBrand = await Brand.create({
               brandInfo
            });
            if (newBrand) {
                resolve({
                    status: 'OK',
                    message: 'Thêm thương hiệu thành công',
                    data: newBrand,
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

const updateBrand = (data, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkBrand = await Brand.findById(id);
            if (checkBrand === null) {
                resolve({
                    status: 'OK',
                    message: 'Thương hiệu không tồn tại!',
                });
                return
            }
            const updateBrand = await Brand.findByIdAndUpdate(id, data, { new: true });
            resolve({
                status: 'OK',
                message: 'Cập nhật thương hiệu thành công',
                data: updateBrand,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const getDetailBrand = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const Brand = await Brand.findById(id);
            if (Brand === null) {
                resolve({
                    status: 'OK',
                    message: 'Thương hiệu không tồn tại!',
                });
                return
            }
            resolve({
                status: 'OK',
                message: 'Thành công',
                data: Brand,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const deleteBrand = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkBrand = await Brand.findById(id);
            if (checkBrand === null) {
                resolve({
                    status: 'OK',
                    message: 'Thương hiệu đã tồn tại!',
                });
                return;
            }
            await Brand.findByIdAndDelete(id);
            resolve({
                status: 'OK',
                message: 'Xóa thành công',
            });
        } catch (error) {
            reject(error);
        }
    });
};

const getAllBrand = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allBrand = await Brand.find();
            resolve({
                status: 'OK',
                message: 'Thành công',
                data: allBrand,
            });
        } catch (error) {
            reject(error);
        }
    });
};

export default {
    createBrand,
    updateBrand,
    getDetailBrand,
    deleteBrand,
    getAllBrand,
};
