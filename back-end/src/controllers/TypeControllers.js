import typeServices from '../services/typeServices.js'
import { StatusCodes } from 'http-status-codes'

const createType = async (req, res) => {
    try {
        const response = await typeServices.createType(req.body);
        return res.status(StatusCodes.CREATED).json(response);
    } catch (error) {
        next(error)
    }
};

const updateType = async (req, res) => {
    try {
        const response = await typeServices.updateType(req.body, req.params.id);
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(error)
    }
};

const deleteType = async (req, res) => {
    try {
        const response = await typeServices.deleteType(req.params.id);
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(error)
    }
};

const getDetailType = async (req, res) => {
    try {
        const response = await typeServices.getDetailType(req.params.id);
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(error)
    }
};

const getAllType = async (req, res) => {
    try {
        const response = await typeServices.getAllType();
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(error)
    }
};

export default {
    createType,
    updateType,
    getDetailType,
    deleteType,
    getAllType,
};
