const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserControllers');
const { authMiddleware, authUserMiddleware } = require('../middleware/authMiddleware');

//user
router.post('/sign-up', userController.createUser);
router.post('/sign-in', userController.loginUser);
router.post('/log-out', userController.logoutUser);
router.put('/update-user/:id', userController.updateUser);
router.get('/get-details-user/:id', authUserMiddleware, userController.getDetailUser);
//admin
router.delete('/delete-user/:id', authMiddleware, userController.deleteUser);
router.get('/getAll', userController.getAllUser); // tạm xoá check authMiddleware để get dữ liệu
router.post('/refresh-token', userController.refreshToken);

module.exports = router;
