const userSevice = require('../services/UserServices');
const jwtSevice = require('../services/JwtService');

const createUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, phone } = req.body;
        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isCheckEmail = reg.test(email);
        if (!name || !email || !password || !confirmPassword || !phone) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'The input is required',
            });
        } else if (!isCheckEmail) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'The input is email',
            });
        } else if (password !== confirmPassword) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'The input is password',
            });
        }
        const response = await userSevice.createUser(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, phone } = req.body;
        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isCheckEmail = reg.test(email);
        if (!name || !email || !password || !confirmPassword || !phone) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'The input is required',
            });
        } else if (!isCheckEmail) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'The input is email',
            });
        } else if (password !== confirmPassword) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'The input is password',
            });
        }
        const response = await userSevice.loginUser(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = req.body;
        if(!userId){
            return res.status(200).json({
                status: 'ERROR',
                message: 'The userId is required',
            });
        }
        const response = await userSevice.updateUser(userId, data);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if(!userId){
            return res.status(200).json({
                status: 'ERROR',
                message: 'The userId is required',
            });
        }
        const response = await userSevice.deleteUser(userId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
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
        if(!userId){
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
        if(!token){
            return res.status(200).json({
                status: 'ERROR',
                message: 'The token is required',
            });
        }
        const response = await jwtSevice.refreshTokenJwtService(token);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
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
    refreshToken
};
