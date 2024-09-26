import brandServices from '../services/brandServices.js'

const createBrand = async (req, res) => {
    try {
        const { brandName, image } = req.body;
        const response = await brandServices.createBrand(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const updateBrand = async (req, res) => {
    try {
        const data = req.body;
        const brandId = req.params.id;
        if (!brandId) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'Mã thương hiệu không hợp lệ!',
            });
        }
        const response = await brandServices.updateBrand(brandId, data);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const deleteBrand = async (req, res) => {
    try {
        const brandId = req.params.id;
        if (!brandId) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'Mã thương hiệu không hợp lệ!',
            });
        }
        const response = await brandServices.deleteBrand(brandId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const getDetailBrand = async (req, res) => {
    try {
        const brandId = req.query.id;
        if (!brandId) {
            return res.status(404).json({
                status: 'ERROR',
                message: 'Mã thương hiệu không hợp lệ!',
            });
        }
        const response = await brandServices.getDetailBrand(brandId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const getAllBrand = async (req, res) => {
    try {
        const response = await brandServices.getAllBrand();
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: 'lỗi',
        });
    }
};

export default {
    createBrand,
    updateBrand,
    getDetailBrand,
    deleteBrand,
    getAllBrand,
};
