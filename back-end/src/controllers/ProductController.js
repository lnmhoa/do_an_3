const productSevice = require('../services/ProductServices');

const createProduct = async (req, res) => {
    try {
        const { productName, priceProduct, description, countInStock, brand, type, image } = req.body;
        if (!productName || !image || !description || !priceProduct || !countInStock || !brand || !type) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'Trường thông tin bắt buộc',
            });
        }

        const response = await productSevice.createProduct({
            productName,
            image,
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
        const productId = req.params.id;
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
        const response = await productSevice.getAllProduct();
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
