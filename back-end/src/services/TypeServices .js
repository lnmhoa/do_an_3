const Type = require('../models/TypeModel');

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await Type.find();
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: allType,
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    getAllType,
};
