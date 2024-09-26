import typeServices from '../services/typeServices.js'

const createType = async (req, res) => {
    try {
        const { typeName, image } = req.body;
        const response = await typeServices.createType(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const updateType = async (req, res) => {
    try {
        const data = req.body;
        const typeId = req.params.id;
        if (!typeId) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'Mã thương hiệu không hợp lệ!',
            });
        }
        const response = await typeServices.updateType(typeId, data);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const deleteType = async (req, res) => {
    try {
        const typeId = req.params.id;
        if (!typeId) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'Mã thương hiệu không hợp lệ!',
            });
        }
        const response = await typeServices.deleteType(typeId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const getDetailType = async (req, res) => {
    try {
        const typeId = req.query.id;
        if (!typeId) {
            return res.status(404).json({
                status: 'ERROR',
                message: 'Mã thương hiệu không hợp lệ!',
            });
        }
        const response = await typeServices.getDetailType(typeId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const getAllType = async (req, res) => {
    try {
        const response = await typeServices.getAllType();
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: 'lỗi',
        });
    }
};

export default {
    createType,
    updateType,
    getDetailType,
    deleteType,
    getAllType,
};
