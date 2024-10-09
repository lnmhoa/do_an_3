import orderServices from '../services/orderServices.js'
import { StatusCodes } from 'http-status-codes'

const createOrder = async (req, res) => {
    try {
        const response = await orderServices.createOrder(req.body);
        return res.status(StatusCodes.CREATED).json(response);
    } catch (error) {
       next(error)
    }
};

const updateOrder = async (req, res) => {
    try {
        const data = req.body;
        const orderId = req.params.id;
        if (!orderId) {
            return res.status(StatusCodes.OK).json({
                status: 'ERROR',
                message: 'Mã đơn hàng không hợp lệ!',
            });
        }
        const response = await orderServices.updateOrder(orderId, data);
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
       next(error)
    }
};

const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        if (!orderId) {
            return res.status(StatusCodes.OK).json({
                status: 'ERROR',
                message: 'Mã đơn hàng không hợp lệ!',
            });
        }
        const response = await orderServices.deleteOrder(orderId);
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
       next(error)
    }
};

const getDetailOrder = async (req, res) => {
    try {
        const orderId = req.query.id;
        if (!orderId) {
            return res.status(404).json({
                status: 'ERROR',
                message: 'Mã đơn hàng không hợp lệ!',
            });
        }
        const response = await orderServices.getDetailOrder(orderId);
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
       next(error)
    }
};

const getAllOrder = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query;
        const response = await orderServices.getAllOrder(Number(limit) || 8, Number(page) || 0, sort, filter);
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
       next(error)
    }
};

export default {
    createOrder,
    updateOrder,
    getDetailOrder,
    deleteOrder,
    getAllOrder,
};
