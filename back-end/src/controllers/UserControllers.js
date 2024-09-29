import userServices from '../services/UserServices.js'
import jwtService from '../services/JwtServices.js'
import { StatusCodes } from 'http-status-codes'


const createUser = async (req, res, next) => {
    try {
        const response = await userServices.createUser(req.body)
        return res.status(StatusCodes.CREATED).json(response);
    } catch (error) {
        next(error)
    }
};

const loginUser = async (req, res) => {
    try {
        const response = await userServices.loginUser(req.body);
        const { refresh_token, ...otherResponse } = response;
        res.cookie('refresh_token', refresh_token, {
            httpOnly: true,
            secure: false,
            samesite: 'strict',
        });
        return res.status(StatusCodes.OK).json(otherResponse);
    } catch (error) {
       next(error);
    }
};

const updateUser = async (req, res) => {
    try {
        const response = await userServices.updateUser(req.body, req.params.id);
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(error)
    }
};

const deleteUser = async (req, res) => {
    try {
        const response = await userServices.deleteUser(req.params.id);
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(error)
    }
};

const getAllUser = async (req, res) => {
    try {
        const response = await userServices.getAllUser();
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(error)
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
    } catch (error) {
        next(error)
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
    } catch (error) {
        next(error)
    }
};

const logoutUser = async (req, res) => {
    try {
        res.clearCookie('refresh_token')
        return res.status(StatusCodes.OK).json({
            status: 'OK',
            message: 'Đăng xuất thành công'
        });
    } catch (error) {
        next(error)
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
