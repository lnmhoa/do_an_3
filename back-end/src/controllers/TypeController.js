const typeServices = require('../services/TypeServices ');

// const createBrand = async (req, res) => {
//     try {
//         const { brandName, image } = req.body;
//         const response = await brandSevice.createBrand(req.body);
//         return res.status(200).json(response);
//     } catch (e) {
//         return res.status(404).json({
//             message: e,
//         });
//     }
// };

// const updateBrand = async (req, res) => {
//     try {
//         const data = req.body;
//         const brandId = req.params.id;
//         if (!brandId) {
//             return res.status(200).json({
//                 status: 'ERROR',
//                 message: 'Mã thương hiệu không hợp lệ!',
//             });
//         }
//         const response = await brandSevice.updateBrand(brandId, data);
//         return res.status(200).json(response);
//     } catch (e) {
//         return res.status(404).json({
//             message: e,
//         });
//     }
// };

// const deleteBrand = async (req, res) => {
//     try {
//         const brandId = req.params.id;
//         if (!brandId) {
//             return res.status(200).json({
//                 status: 'ERROR',
//                 message: 'Mã thương hiệu không hợp lệ!',
//             });
//         }
//         const response = await brandSevice.deleteBrand(brandId);
//         return res.status(200).json(response);
//     } catch (e) {
//         return res.status(404).json({
//             message: e,
//         });
//     }
// };

// const getDetailBrand = async (req, res) => {
//     try {
//         const brandId = req.query.id;
//         if (!brandId) {
//             return res.status(404).json({
//                 status: 'ERROR',
//                 message: 'Mã thương hiệu không hợp lệ!',
//             });
//         }
//         const response = await brandSevice.getDetailBrand(brandId);
//         return res.status(200).json(response);
//     } catch (e) {
//         return res.status(404).json({
//             message: e,
//         });
//     }
// };

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

module.exports = {
    // createBrand,
    // updateBrand,
    // getDetailBrand,
    // deleteBrand,
    getAllType,
};
