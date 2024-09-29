import productServices from '../services/productServices.js'

const createProduct = async (req, res) => {
    try {
        const { productName, priceProduct, description, countInStock, brand, type, image } = req.body;
        if (!productName || !image || !description || !priceProduct || !countInStock || !brand || !type) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'Trường thông tin bắt buộc',
            });
        }

        const response = await productServices.createProduct({
            productName,
            image,
            description,
            countInStock,
            brand,
            type,
        });
        const response1 = await Services.createProduct({
            priceProduct,
        });
        return res.status(200).json({response, response1});
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
        const response = await productServices.updateProduct(productId, data);
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
        const response = await productServices.deleteProduct(productId);
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
        const response = await productServices.getDetailProduct(productId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const getAllProduct = async (req, res) => {
    try {
        const response = await productServices.getAllProduct();
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

export default {
    createProduct,
    updateProduct,
    getDetailProduct,
    deleteProduct,
    getAllProduct,
};
