const productSevice = require('../services/ProductServices');

const createProduct = async (req, res) => {
    try {
        const { name, image, type, price, countInStock, rating, description } = req.body;
        if (!name || !image || !type || !price || !countInStock || !rating || !description) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'The input is required',
            });
        }
        const response = await productSevice.createProduct(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
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
                message: 'The productId is required',
            });
        }
        const response = await productSevice.updateProduct(productId ,data);
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
        if(!productId){
            return res.status(200).json({
                status: 'ERROR',
                message: 'The productId is required',
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
        if(!productId){
            return res.status(200).json({
                status: 'ERROR',
                message: 'The productId is required',
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
        const response = await productSevice.getAllProduct(Number(limit) || 8, Number(page) || 0 , sort, filter);
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
