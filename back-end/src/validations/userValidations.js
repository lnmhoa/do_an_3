import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

const create =  async (req, res, next) => {
    const correctCondition = Joi.object({
        phoneNumber: Joi.tring().require().min(10).max(11).trim().strict(),
        email: Joi.tring().require().min(10).max(11).trim().strict(),
        password: Joi.tring().require().min(10).max(11).trim().strict()
    })
    try {
        await correctCondition.validateAsync(req.body)
        res.status(StatusCodes.OK).json({
            status: 'ERROR',
            message: 'Vui lòng nhập đầy đủ thông tin!',
        });
    } catch (error) {
        res.status(StatusCodes.UNPROCESSABLE_ENTITY)
    }
   
}