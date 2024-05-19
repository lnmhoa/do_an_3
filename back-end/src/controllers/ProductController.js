const productSevice = require('../services/ProductServices');
const cloudinary = require('../utils/cloudinary');

const createProduct = async (req, res) => {
    try {

        const { productName, priceProduct, description, countInStock, brand, type } = req.body;

        if (!productName || !req.file || !description || !priceProduct || !countInStock || !brand || !type) {
            console.log(productName);
            console.log(req.file);
            return res.status(200).json({
                status: 'ERROR',
                message: 'Trường thông tin bắt buộc',
            });
        }

        const result = await cloudinary.uploader.upload(req.file.path);

        const response = await productSevice.createProduct({
            productName,
            image: result.secure_url,
            priceProduct,
            description,
            countInStock,
            brand,
            type,
        });

        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e.message,
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        const data = req.body;
        const productId = req.params.id;
        if (!productId) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'Trường thông tin bắt buộc',
            });
        }
        const response = await productSevice.updateProduct(productId, data);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        if (!productId) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'Trường thông tin bắt buộc',
            });
        }
        const response = await productSevice.deleteProduct(productId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const getDetailProduct = async (req, res) => {
    try {
        const productId = req.query.id;
        if (!productId) {
            return res.status(404).json({
                status: 'ERROR',
                message: 'Trường thông tin bắt buộc',
            });
        }
        const response = await productSevice.getDetailProduct(productId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const getAllProduct = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query;
        const response = await productSevice.getAllProduct(Number(limit) || 8, Number(page) || 0, sort, filter);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

module.exports = {
    createProduct,
    updateProduct,
    getDetailProduct,
    deleteProduct,
    getAllProduct,
};
