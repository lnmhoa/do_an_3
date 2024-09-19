import userServices from '../services/UserServices'
import jwtService from '../services/JwtService'

const createUser = async (req, res) => {
    try {
        const { phoneNumber, email, password } = req.body;
        const response = await userServices.createUser(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(400).json({
            message: e,
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { phoneNumber, password } = req.body;
        const response = await userServices.loginUser(req.body);
        const { refresh_token, ...otherResponse } = response;
        res.cookie('refresh_token', refresh_token, {
            httpOnly: true,
            secure: false,
            samesite: 'strict',
        });
        return res.status(200).json(otherResponse);
    } catch (e) {
        return res.status(401).json({
            message: e,
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { fullName, gender, phoneNumber, dateOfBirth, address, email } = req.body;
        if (!userId) {
            return res.status(401).json({
                status: 'ERROR',
                message: 'Tài khoản không tồn tại.',
            });
        }
        const response = await userServices.updateUser(userId, req.body);
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
        console.log(userId);
        if (!userId) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'Trường thông tin bắt buộc',
            });
        }
        const response = await userServices.deleteUser(userId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(400).json({
            message: e,
        });
    }
};

const getAllUser = async (req, res) => {
    try {
        const response = await userServices.getAllUser();
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
                message: 'Trường thông tin bắt buộc',
            });
        }
        const response = await userServices.getDetailUser(userId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const refreshToken = async (req, res) => {
    try {
        const token = req.cookies.refresh_token;
        if (!token) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'Trường thông tin bắt buộc',
            });
        }
        const response = await jwtService.refreshTokenJwtService(token);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(400).json({
            message: e,
        });
    }
};

const logoutUser = async (req, res) => {
    try {
        res.clearCookie('refresh_token')
        return res.status(200).json({
            status: 'OK',
            message: 'Đăng xuất thành công'
        });
    } catch (e) {
        return res.status(400).json({
            message: e,
        });
    }
};

export default {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailUser,
    refreshToken,
    logoutUser,
};
