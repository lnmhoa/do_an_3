import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import apiError from '../utils/ApiError.js';

const createUAddress = async (req, res, next) => {
    const correctCondition = Joi.object({
        provinceAddress: Joi.string().required().min(1).trim().strict().messages({
            'any.required': 'Vui lòng nhập Thành phố!',
            'string.empty': 'Thành phố không được bỏ trống!',
            'string.min': 'Thành phố không được bỏ trống!',
            'string.trim': 'Vui lòng xóa khoảng trống ở đầu hoặc cuối!',
        }),
        districtsAddress: Joi.string().required().min(1).trim().strict().messages({
            'any.required': 'Quận/ Huyện không được để trống!',
            'string.empty': 'Quận/ Huyện không được để trống!',
            'string.min': 'Quận/ Huyện không được để trống!',
            'string.trim': 'Vui lòng xóa khoảng trống ở đầu hoặc cuối!',
        }),
        detailAddress: Joi.string().required().min(1).trim().strict().messages({
            'string.empty': 'Địa chỉ chi tiết không được để trống'',
            'string.min': 'Địa chỉ chi tiết không được để trống'',
            'string.max': 'Địa chỉ chi tiết không được để trống'',
            'string.trim': 'Vui lòng xóa khoảng trống ở đầu hoặc cuối!',
        }),
        defaultAddress: Joi.boolean().required().messages({
            'any.required': 'Vui lòng nhập trạng thái!',
            'boolean.base': 'Loại thái địa chỉ không hợp lệ!',
        }),
    });
    try {
        await correctCondition.validateAsync(req.body);
        next();
    } catch (error) {
        next(new apiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error.message)));
    }
};

const updateAddress = async (req, res, next) => {
    const correctCondition = Joi.object({
        idAddress: Joi.string().required().min(1).trim().strict().messages({
            'any.required': 'Địa chỉ không hợp lệ!',
            'string.empty': 'Địa chỉ không hợp lệ!',
            'string.min': 'Địa chỉ không hợp lệ!',
            'string.trim': 'Địa chỉ không hợp lệ!',
        }),
        provinceAddress: Joi.string().required().min(1).trim().strict().messages({
            'any.required': 'Vui lòng nhập Thành phố!',
            'string.empty': 'Thành phố không được bỏ trống!',
            'string.min': 'Thành phố không được bỏ trống!',
            'string.trim': 'Vui lòng xóa khoảng trống ở đầu hoặc cuối!',
        }),
        districtsAddress: Joi.string().required().min(1).trim().strict().messages({
            'any.required': 'Quận/ Huyện không được để trống!',
            'string.empty': 'Quận/ Huyện không được để trống!',
            'string.min': 'Quận/ Huyện không được để trống!',
            'string.trim': 'Vui lòng xóa khoảng trống ở đầu hoặc cuối!',
        }),
        detailAddress: Joi.string().required().min(1).trim().strict().messages({
            'string.empty': 'Địa chỉ chi tiết không được để trống'',
            'string.min': 'Địa chỉ chi tiết không được để trống'',
            'string.max': 'Địa chỉ chi tiết không được để trống'',
            'string.trim': 'Vui lòng xóa khoảng trống ở đầu hoặc cuối!',
        }),
        defaultAddress: Joi.boolean().required().messages({
            'any.required': 'Vui lòng nhập trạng thái!',
            'boolean.base': 'Loại thái địa chỉ không hợp lệ!',
        }),
    });
    try {
        await correctCondition.validateAsync(req.body);
        next();
    } catch (error) {
        next(new apiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error.message)));
    }
};

export default {
    createUser,
    updateUser,
};
