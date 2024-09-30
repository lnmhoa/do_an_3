import express from 'express';
import userController from '../controllers/UserControllers.js';
import authMiddleware from '../middleware/AuthMiddlewares.js';
import userValidation from '../validations/UserValidations.js';

const router = express.Router();

router.post('/sign-up', userValidation.createUser, userController.createUser);
router.post('/sign-in', userValidation.login, userController.loginUser);
router.post('/log-out', userController.logoutUser);
router.put('/update-user/:id', authMiddleware.authUserMiddleware, userValidation.updateUser, userController.updateUser); //
router.get('/get-details-user/:id', authMiddleware.authAdminMiddleware, userController.getDetailUser);
router.post('/refresh-token', userController.refreshToken);
//admin
router.delete('/delete-user/:id', authMiddleware.authAdminMiddleware, userController.deleteUser);
router.get('/getAll', authMiddleware.authAdminMiddleware, userController.getAllUser);

export default router;
