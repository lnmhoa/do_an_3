import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import apiError from '../utils/ApiError.js';

const createType = async (req, res, next) => {
    const correctCondition = Joi.object({
        typeName: Joi.string().required().min(1).trim().strict().messages({
            'any.required': 'Vui lòng nhập loại thương hiệu!',
            'string.empty': 'Loại thương hiệu không được bỏ trống!',
            'string.min': 'Loại thương hiệu không được bỏ trống',
            'string.trim': 'Vui lòng xóa khoảng trống ở đầu hoặc cuối!',
        }),
        image: Joi.string().required().min(1).trim().strict().messages({
            'any.required': 'Vui lòng thêm hình loại sản phẩm!',
            'string.empty': 'Vui lòng thêm hình loại sản phẩm!',
            'string.min': 'Vui lòng thêm hình loại sản phẩm!',
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

const updateType = async (req, res, next) => {
    const correctCondition = Joi.object({
        typeName: Joi.string().required().min(1).trim().strict().messages({
            'any.required': 'Vui lòng nhập loại thương hiệu!',
            'string.empty': 'Loại thương hiệu không được bỏ trống!',
            'string.min': 'Loại thương hiệu không được bỏ trống',
            'string.trim': 'Vui lòng xóa khoảng trống ở đầu hoặc cuối!',
        }),
        image: Joi.string().required().min(1).trim().strict().messages({
            'any.required': 'Vui lòng thêm hình loại sản phẩm!',
            'string.empty': 'Vui lòng thêm hình loại sản phẩm!',
            'string.min': 'Vui lòng thêm hình loại sản phẩm!',
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

export default {
    createType,
    updateType,
};
