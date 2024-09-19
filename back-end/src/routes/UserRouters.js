import express from 'express'
import userController from '../controllers/UserControllers'
import { authMiddleware, authUserMiddleware } from '../middleware/authMiddleware'

const router = express.Router();

//user
router.post('/sign-up', userController.createUser);
router.post('/sign-in', userController.loginUser);
router.post('/log-out', userController.logoutUser);
router.put('/update-user/:id', userController.updateUser);
router.get('/get-details-user/:id', authUserMiddleware, userController.getDetailUser);
//admin
router.delete('/delete-user/:id', authMiddleware, userController.deleteUser);
router.get('/getAll', authMiddleware, userController.getAllUser); // tạm xoá check authMiddleware để get dữ liệu
router.post('/refresh-token', userController.refreshToken);

export default router;
