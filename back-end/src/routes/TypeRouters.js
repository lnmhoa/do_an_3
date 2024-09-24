import express from 'express'
import typeController from '../controllers/TypeController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router();
//admin
router.post('/create', authMiddleware.authAdminMiddleware, typeController.createType);
router.put('/update/:id', authMiddleware.authAdminMiddleware, typeController.updateType);
router.delete('/delete/:id', authMiddleware.authAdminMiddleware, typeController.deleteType);
//all
router.get('/get-all', typeController.getAllType);

export default router;
