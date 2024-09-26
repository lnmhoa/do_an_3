import express from 'express'
import userController from '../controllers/userControllers.js'
import authMiddleware from '../middleware/authMiddlewares.js'

const router = express.Router();

//all
router.post('/sign-up', userController.createUser);
router.post('/sign-in', userController.loginUser);
router.post('/log-out', userController.logoutUser);
router.put('/update-user/:id', userController.updateUser);
router.get('/get-details-user/:id', authMiddleware.authAdminMiddleware, userController.getDetailUser);
router.post('/refresh-token', userController.refreshToken);
//admin
router.delete('/delete-user/:id', authMiddleware.authAdminMiddleware, userController.deleteUser);
router.get('/getAll', authMiddleware.authAdminMiddleware, userController.getAllUser);

export default router;
