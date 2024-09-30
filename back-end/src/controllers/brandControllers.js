import brandServices from '../services/brandServices.js'
import { StatusCodes } from 'http-status-codes'

const createBrand = async (req, res) => {
    try {
        const response = await brandServices.createBrand(req.body);
        return res.status(StatusCodes.CREATED).json(response);
    } catch (error) {
        next(error)
    }
};

const updateBrand = async (req, res) => {
    try {
        const response = await brandServices.updateBrand(req.body, req.params.id);
        return res.status(StatusCodes.OK).json(response);
    } catch (e) {
        next(error)
    }
};

const deleteBrand = async (req, res) => {
    try {
        const response = await brandServices.deleteBrand(req.params.id);
        return res.status(StatusCodes.OK).json(response);
    } catch (e) {
        next(error)
    }
};

const getDetailBrand = async (req, res) => {
    try {
        const response = await brandServices.getDetailBrand(req.params.id);
        return res.status(StatusCodes.OK).json(response);
    } catch (e) {
        next(error)
    }
};

const getAllBrand = async (req, res) => {
    try {
        const response = await brandServices.getAllBrand();
        return res.status(StatusCodes.OK).json(response);
    } catch (e) {
        next(error)
    }
};

export default {
    createBrand,
    updateBrand,
    getDetailBrand,
    deleteBrand,
    getAllBrand,
};
