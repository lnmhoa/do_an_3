import addressServices from '../services/addressServices.js'

const createAddress = async (req, res) => {
    try {
        const userId = req.params.id;
        const { provinceAddress, districtsAddress, detailAddress, defaultAddress } = req.body;
        const response = await addressServices.createAddress(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const updateAddress = async (req, res) => {
    try {
        const idUser = req.params.id;
        const { provinceAddress, districtsAddress, detailAddress, defaultAddress, idAddress } = req.body;
        if (!idUser) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'Tài khoản không tồn tại!',
            });
        }
        const response = await addressServices.updatAddress(idUser, );
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const deleteAddress = async (req, res) => {
    try {
        const brandId = req.params.id;
        if (!brandId) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'Mã thương hiệu không hợp lệ!',
            });
        }
        const response = await addressServices.deleteBrand(brandId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const getDetailAddress = async (req, res) => {
    try {
        const brandId = req.query.id;
        if (!brandId) {
            return res.status(404).json({
                status: 'ERROR',
                message: 'Mã thương hiệu không hợp lệ!',
            });
        }
        const response = await addressServices.getDetailBrand(brandId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const getAllAddress = async (req, res) => {
    try {
        const response = await addressServices.getAllBrand();
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: 'lỗi',
        });
    }
};

export default {
    createAddress,
    updateAddress,
    deleteAddress,
    getDetailAddress,
    getAllAddress,
};
