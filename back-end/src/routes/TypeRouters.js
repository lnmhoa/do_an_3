import express from 'express'
import typeController from '../controllers/TypeControllers.js'
import authMiddleware from '../middleware/authMiddlewares.js'
import typeValidation from '../validations/TypeValidations.js'

const router = express.Router();

router.post('/create', authMiddleware.authAdminMiddleware, typeValidation.createType, typeController.createType);
router.put('/update/:id', authMiddleware.authAdminMiddleware, typeValidation.updateType, typeController.updateType);
router.delete('/delete/:id', authMiddleware.authAdminMiddleware, typeController.deleteType);

router.get('/get-all', typeController.getAllType);

export default router;
