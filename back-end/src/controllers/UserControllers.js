const userSevice = require('../services/UserServices');
const jwtSevice = require('../services/JwtService');

const createUser = async (req, res) => {
    try {
        const { phoneNumber, email, password } = req.body;
        const response = await userSevice.createUser(req.body);
        return res.status(201).json(response);
    } catch (e) {
        return res.status(400).json({
            message: e,
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { phoneNumber, password } = req.body;
        const response = await userSevice.loginUser(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(401).json({
            message: e,
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const {fullName,gender, phoneNumber,dateOfBirth,address,joinedDate} = req.body;
        if (!userId) {
            return res.status(401).json({
                status: 'ERROR',
                message: 'Tài khoản không tồn tại.',
            });
        }
        const response = await userSevice.updateUser(userId, data);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(400).json({
            message: e,
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'The userId is required',
            });
        }
        const response = await userSevice.deleteUser(userId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(400).json({
            message: e,
        });
    }
};

const getAllUser = async (req, res) => {
    try {
        const response = await userSevice.getAllUser();
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const getDetailUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'The userId is required',
            });
        }
        const response = await userSevice.getDetailUser(userId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const refreshToken = async (req, res) => {
    try {
        const token = req.headers.token.split(' ')[1];
        if (!token) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'The token is required',
            });
        }
        const response = await jwtSevice.refreshTokenJwtService(token);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(400).json({
            message: e,
        });
    }
};

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailUser,
    refreshToken,
};
