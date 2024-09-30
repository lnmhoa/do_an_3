import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import apiError from '../utils/ApiError.js';

const createBrand= async (req, res, next) => {
    const correctCondition = Joi.object({
        brandName: Joi.string().required().min(1).trim().strict().messages({
            'any.required': 'Vui lòng nhập tên thương hiệu!',
            'string.empty': 'Tên thương hiệu không được bỏ trống!',
            'string.min': 'Tên thương hiệu không được bỏ trống',
            'string.trim': 'Vui lòng xóa khoảng trống ở đầu hoặc cuối!',
        }),
        image: Joi.string().required().min(1).trim().strict().messages({
            'any.required': 'Vui lòng thêm hình ảnh thương hiệu!',
            'string.empty': 'Vui lòng thêm hình ảnh thương hiệu!',
            'string.min': 'Vui lòng thêm hình ảnh thương hiệu!',
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

const updateBrand = async (req, res, next) => {
    const correctCondition = Joi.object({
        brandName: Joi.string().required().min(1).trim().strict().messages({
            'any.required': 'Vui lòng nhập tên thương hiệu!',
            'string.empty': 'Tên thương hiệu không được bỏ trống!',
            'string.min': 'Tên thương hiệu không được bỏ trống',
            'string.trim': 'Vui lòng xóa khoảng trống ở đầu hoặc cuối!',
        }),
        image: Joi.string().required().min(1).trim().strict().messages({
            'any.required': 'Vui lòng thêm hình ảnh thương hiệu!',
            'string.empty': 'Vui lòng thêm hình ảnh thương hiệu!',
            'string.min': 'Vui lòng thêm hình ảnh thương hiệu!',
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
    createBrand,
    updateBrand,
};
