import addressServices from '../services/addressServices.js'
import { StatusCodes } from 'http-status-codes'

const createAddress = async (req, res) => {
    try {
        const response = await addressServices.createAddress(req.body, req.params.id);
        return res.status(StatusCodes.CREATED).json(response);
    } catch (error) {
        next(error)
    }
};

const updateAddress = async (req, res) => {
    try {   
        const response = await addressServices.updateAddress(req.body, req.params.id);
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(error)
    }
};

const deleteAddress = async (req, res) => {
    try {
        const response = await addressServices.deleteAddress(req.body);
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(error)
    }
};

const getDetailAddress = async (req, res) => {
    try {
        const response = await addressServices.getDetailAddress(req.body, req.params.id);
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(error)
    }
};

const getAllAddress = async (req, res) => {
    try {
        const response = await addressServices.getAllBrand();
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(error)
    }
};

export default {
    createAddress,
    updateAddress,
    deleteAddress,
    getDetailAddress,
    getAllAddress,
};
