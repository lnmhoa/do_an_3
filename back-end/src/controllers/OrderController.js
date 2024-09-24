import orderServices from '../services/OrderServices.js'

const createOrder = async (req, res) => {
    try {
        const { user, orderedDate, isPaid, totalPrice, orderItem, DeliveryInformation} = req.body;
        const response = await orderServices.createOrder(req.body);
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
        const response = await orderServices.updateOrder(orderId, data);
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
        const response = await orderServices.deleteOrder(orderId);
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
        const response = await orderServices.getDetailOrder(orderId);
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
        const response = await orderServices.getAllOrder(Number(limit) || 8, Number(page) || 0, sort, filter);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

export default {
    createOrder,
    updateOrder,
    getDetailOrder,
    deleteOrder,
    getAllOrder,
};
