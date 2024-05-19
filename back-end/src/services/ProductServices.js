const Product = require('../models/ProductModel');

const createProduct = (productInfo) => {
    return new Promise(async (resolve, reject) => {
        const { productName, image, priceProduct, description, countInStock, brand, type } = productInfo;
        try {
            const checkProduct = await Product.findOne({
                productName: productName,
            });
            if (checkProduct !== null) {
                resolve({
                    status: 'OK',
                    message: 'The name of product is already',
                });
            }
            const newProduct = await Product.create({
                productName,
                image,
                priceProduct,
                description,
                countInStock,
                brand,
                type,
            });
            if (newProduct) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newProduct,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

const updateProduct = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.findOne({
                _id: id,
            });
            if (checkProduct === null) {
                resolve({
                    status: 'OK',
                    message: 'The product is not defined',
                });
            }
            const updateProduct = await Product.findByIdAndUpdate(id, data, { new: true });
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updateProduct,
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getDetailProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const product = await Product.findById(id);
            if (product === null) {
                resolve({
                    status: 'OK',
                    message: 'The product is defined',
                });
            }
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: product,
            });
        } catch (e) {
            reject(e);
        }
    });
};

const deleteProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.findById(id);
            if (checkProduct === null) {
                resolve({
                    status: 'OK',
                    message: 'The product is defined',
                });
            }
            await Product.findByIdAndDelete(id);
            resolve({
                status: 'OK',
                message: 'SUCCESS',
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getAllProduct = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalProduct = await Product.countDocuments();
            if (filter) {
                const ojectfilter = {};
                ojectfilter[filter[0]] = filter[1];
                const allProduct = await Product.find({ [filter[0]]: { $regex: filter[1], $options: 'i' } })
                    .limit(limit)
                    .skip(limit * page)

                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: allProduct,
                    total: totalProduct,
                    pagecurrent: page + 1,
                    totalPage: Math.ceil(totalProduct / limit),
                });
            }
            if (sort) {
                const ojectSort = {};
                ojectSort[sort[0]] = sort[1];
                console.log(ojectSort);
                const allProduct = await Product.find()
                    .limit(limit)
                    .skip(limit * page)
                    .sort(ojectSort);
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: allProduct,
                    total: totalProduct,
                    pagecurrent: page + 1,
                    totalPage: Math.ceil(totalProduct / limit),
                });
            }
            const allProduct = await Product.find()
                .limit(limit)
                .skip(limit * page);
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: allProduct,
                total: totalProduct,
                pagecurrent: page + 1,
                totalPage: Math.ceil(totalProduct / limit),
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createProduct,
    updateProduct,
    getDetailProduct,
    deleteProduct,
    getAllProduct,
};
