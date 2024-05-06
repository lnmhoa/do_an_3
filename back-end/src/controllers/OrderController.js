const orderSevice = require('../services/OrderServices');

const createOrder = async (req, res) => {
    try {
        const { user, orderedDate, isPaid, totalPrice, orderItem, DeliveryInformation} = req.body;
        const response = await OrderSevice.createOrder(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const updateOrder = async (req, res) => {
    try {
        const data = req.body;
        const orderId = req.params.id;
        if (!orderId) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'Mã đơn hàng không hợp lệ!',
            });
        }
        const response = await orderSevice.updateOrder(orderId, data);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        if (!orderId) {
            return res.status(200).json({
                status: 'ERROR',
                message: 'Mã đơn hàng không hợp lệ!',
            });
        }
        const response = await orderSevice.deleteOrder(orderId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
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
        const response = await orderSevice.getDetailOrder(orderId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const getAllOrder = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query;
        const response = await orderSevice.getAllOrder(Number(limit) || 8, Number(page) || 0, sort, filter);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

module.exports = {
    createOrder,
    updateOrder,
    getDetailOrder,
    deleteOrder,
    getAllOrder,
};
