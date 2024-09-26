import userServices from '../services/userServices.js'
import jwtService from '../services/jwtServices.js'
import { StatusCodes } from 'http-status-codes'

const createUser = async (req, res) => {
    try {
        const { phoneNumber, email, password } = req.body;
        if (!phoneNumber || !email || !password) {
            return res.status(StatusCodes.OK).json({
                status: 'ERROR',
                message: 'Vui lòng nhập đầy đủ thông tin!',
            });
        }
        const userInfo = { phoneNumber, email, password };
        const response = await userServices.createUser(userInfo);
        return res.status(StatusCodes.CREATED).json(response);
    } catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'ERROR',
            message: 'Có lỗi xảy ra, vui lòng thử lại sau!',
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { phoneNumber, password } = req.body;
        if (!phoneNumber || !password) {
            return res.status(StatusCodes.OK).json({
                status: 'ERROR',
                message: 'Vui lòng nhập đầy đủ thông tin!',
            });
        }
        const userInfo = { phoneNumber, email, password };
        const response = await userServices.loginUser(userInfo);
        const { refresh_token, ...otherResponse } = response;
        res.cookie('refresh_token', refresh_token, {
            httpOnly: true,
            secure: false,
            samesite: 'strict',
        });
        return res.status(StatusCodes.OK).json(otherResponse);
    } catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'ERROR',
            message: 'Có lỗi xảy ra, vui lòng thử lại sau!',
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { fullName, gender, dateOfBirth, email } = req.body;
        if (!userId) {
            return res.status(StatusCodes.OK).json({
                status: 'ERROR',
                message: 'Tài khoản không tồn tại!',
            });
        }
        if (!email) {
            return res.status(StatusCodes.OK).json({
                status: 'ERROR',
                message: 'Email không được để trống!',
            });
        }
        const userInfo = { fullName, gender, dateOfBirth, email };
        const response = await userServices.updateUser(userId, userInfo);
        return res.status(StatusCodes.OK).json(response);
    } catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'ERROR',
            message: 'Có lỗi xảy ra, vui lòng thử lại sau!',
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId) {
            return res.status(StatusCodes.OK).json({
                status: 'ERROR',
                message: 'Tài khoản không tồn tại!',
            });
        }
        const response = await userServices.deleteUser(userId);
        return res.status(StatusCodes.OK).json(response);
    } catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'ERROR',
            message: 'Có lỗi xảy ra, vui lòng thử lại sau!',
        });
    }
};

const getAllUser = async (req, res) => {
    try {
        const response = await userServices.getAllUser();
        return res.status(StatusCodes.OK).json(response);
    } catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'ERROR',
            message: 'Có lỗi xảy ra, vui lòng thử lại sau!',
        });
    }
};

const getDetailUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId) {
            return res.status(StatusCodes.OK).json({
                status: 'ERROR',
                message: 'Tài khoản không tồn tại!',
            });
        }
        const response = await userServices.getDetailUser(userId);
        return res.status(StatusCodes.OK).json(response);
    } catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'ERROR',
            message: 'Có lỗi xảy ra, vui lòng thử lại sau!',
        });
    }
};

const refreshToken = async (req, res) => {
    try {
        const token = req.cookies.refresh_token;
        if (!token) {
            return res.status(StatusCodes.OK).json({
                status: 'ERROR',
                message: 'Trường thông tin bắt buộc!',
            });
        }
        const response = await jwtService.refreshTokenJwtService(token);
        return res.status(StatusCodes.OK).json(response);
    } catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'ERROR',
            message: 'Có lỗi xảy ra, vui lòng thử lại sau!',
        });
    }
};

const logoutUser = async (req, res) => {
    try {
        res.clearCookie('refresh_token')
        return res.status(StatusCodes.OK).json({
            status: 'OK',
            message: 'Đăng xuất thành công'
        });
    } catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'ERROR',
            message: 'Có lỗi xảy ra, vui lòng thử lại sau!',
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
