const Brand = require('../models/BrandModel');

const createBrand = (brandInfo) => {
    return new Promise(async (resolve, reject) => {
        const { brandName, image } = brandInfo;
        try {
            const checkBrand = await Brand.findOne({
                brandName: brandName,
            });
            if (checkBrand !== null) {
                resolve({
                    status: 'OK',
                    message: 'Thương hiệu đã tồn tại!',
                });
            }
            const newBrand = await Brand.create({
                brandName,
                image,
            });
            if (newBrand) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newBrand,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

const updateBrand = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkBrand = await Brand.findOne({
                _id: id,
            });
            if (checkBrand === null) {
                resolve({
                    status: 'OK',
                    message: 'Thương hiệu không tồn tại!',
                });
            }
            const updateBrand = await Brand.findByIdAndUpdate(id, data, { new: true });
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updateBrand,
            });
        } catch (e) {
            reject(e);
            9;
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
            }
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: Brand,
            });
        } catch (e) {
            reject(e);
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
            }
            await Brand.findByIdAndDelete(id);
            resolve({
                status: 'OK',
                message: 'SUCCESS',
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getAllBrand = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allBrand = await Brand.find();
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: allBrand,
                total: totalBrand,
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createBrand,
    updateBrand,
    getDetailBrand,
    deleteBrand,
    getAllBrand,
};
