const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const multer = require('multer');

dotenv.config();

const authMiddleware = (req, res, next) => {
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

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

module.exports = {
    authMiddleware,
    authUserMiddleware,
    upload,
};
