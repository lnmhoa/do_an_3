import express from 'express'
import typeController from '../controllers/TypeControllers.js'
import authMiddleware from '../middleware/authMiddlewares.js'

const router = express.Router();

router.post('/create', authMiddleware.authAdminMiddleware, typeController.createType);
router.put('/update/:id', authMiddleware.authAdminMiddleware, typeController.updateType);
router.delete('/delete/:id', authMiddleware.authAdminMiddleware, typeController.deleteType);

router.get('/get-all', typeController.getAllType);

export default router;
