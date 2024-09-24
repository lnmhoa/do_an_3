import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

const authAdminMiddleware = (req, res, next) => {
    const token = req.headers.token.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
        if (err) {
            return res.status(404).json({
                message: 'The authemtication',
                status: 'ERROR',
            });
        }
        if (user?.isAdmin) {
            next();
        } else {
            return res.status(404).json({
                message: 'The authemtication',
                status: 'ERROR',
            });
        }
    });
};

const authUserMiddleware = (req, res, next) => {
    const token = req.headers.token.split(' ')[1];
    const userId = req.params.id;
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
        if (err) {
            return res.status(404).json({
                message: 'The authemtication',
                status: 'ERROR',
            });
        }
        if (user?.isAdmin || user?.id === userId) {
            next();
        } else {
            return res.status(404).json({
                message: 'The authemtication',
                status: 'ERROR',
            });
        }
    });
};


export default {
    authAdminMiddleware,
    authUserMiddleware,
};
