import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import apiError from '../utils/ApiError.js';

const createUser = async (req, res, next) => {
    const correctCondition = Joi.object({
        phoneNumber: Joi.string().required().min(10).max(11).trim().strict().messages({
            'any.required': 'Vui lòng nhập số điện thoại!',
            'string.empty': 'Số điện thoại không được bỏ trống!',
            'string.min': 'Số điện thoại phải có ít nhất 10 số!',
            'string.max': 'Số điện thoại có tối đa 11 số!',
            'string.trim': 'Vui lòng xóa khoảng trống ở đầu hoặc cuối!',
        }),
        email: Joi.string().required().min(3).max(254).trim().email().strict().messages({
            'any.required': 'Vui lòng nhập email!',
            'string.empty': 'Email không được bỏ trống!',
            'string.min': 'Email phải có ít nhất 3 kí tự!',
            'string.max': 'Email có tối đa 254 kí tự!',
            'string.trim': 'Vui lòng xóa khoảng trống ở đầu hoặc cuối!',
            'string.email': 'Vui lòng nhập email hợp lệ!',
        }),
        password: Joi.string().required().min(6).trim().strict().messages({
            'any.required': 'Vui lòng nhập mật khẩu!',
            'string.empty': 'Mật khẩu không được bỏ trống!',
            'string.min': 'Mật khẩu phải có ít nhất 6 kí tự!',
            'string.trim': 'Vui lòng xóa khoảng trống ở đầu hoặc cuối!',
        }),
    });
    try {
        await correctCondition.validateAsync(req.body);
        next();
    } catch (error) {
        next(new apiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error.message)));
    }
};

const login = async (req, res, next) => {
    const correctCondition = Joi.object({
        phoneNumber: Joi.string().required().min(10).max(11).trim().strict().messages({
            'any.required': 'Vui lòng nhập số điện thoại!',
            'string.empty': 'Số điện thoại không được bỏ trống!',
            'string.min': 'Số điện thoại phải có ít nhất 10 số!',
            'string.max': 'Số điện thoại có tối đa 11 số!',
            'string.trim': 'Vui lòng xóa khoảng trống ở đầu hoặc cuối!',
        }),
        password: Joi.string().required().min(6).trim().strict().messages({
            'any.required': 'Vui lòng nhập mật khẩu!',
            'string.empty': 'Mật khẩu không được bỏ trống!',
            'string.min': 'Mật khẩu phải có ít nhất 6 kí tự!',
            'string.trim': 'Vui lòng xóa khoảng trống ở đầu hoặc cuối!',
        }),
    });
    try {
        await correctCondition.validateAsync(req.body);
        next();
    } catch (error) {
        next(new apiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error.message)));
    }
};

const updateUser = async (req, res, next) => {
    const userId = req.params.id;
    const correctCondition = Joi.object({
        phoneNumber: Joi.string().required().min(10).max(11).trim().strict().messages({
            'any.required': 'Vui lòng nhập số điện thoại!',
            'string.empty': 'Số điện thoại không được bỏ trống!',
            'string.min': 'Số điện thoại phải có ít nhất 10 số!',
            'string.max': 'Số điện thoại có tối đa 11 số!',
            'string.trim': 'Vui lòng xóa khoảng trống ở đầu hoặc cuối!',
        }),
        password: Joi.string().required().min(6).trim().strict().messages({
            'any.required': 'Vui lòng nhập mật khẩu!',
            'string.empty': 'Mật khẩu không được bỏ trống!',
            'string.min': 'Mật khẩu phải có ít nhất 6 kí tự!',
            'string.trim': 'Vui lòng xóa khoảng trống ở đầu hoặc cuối!',
        }),
        userId: Joi.string()
        .required()
        .messages({
            'any.required': 'Tài khoản không hợp lệ!',
            'string.empty': 'Tài khoản không hợp lệ!',
        }),
    });
    try {
        await correctCondition.validateAsync({...req.body,userId});
        next();
    } catch (error) {
        next(new apiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error.message)));
    }
};

export default {
    createUser,
    login,
    updateUser,
};
