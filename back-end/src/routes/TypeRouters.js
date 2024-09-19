import express from 'express'
import typeController from '../controllers/TypeController'
import { authMiddleware } from '../middleware/authMiddleware'

const router = express.Router();
//admin
router.post('/create', authMiddleware, typeController.createType);
router.put('/update/:id', authMiddleware, typeController.updateType);
router.delete('/delete/:id', authMiddleware, typeController.deleteType);
//user
router.get('/get-all', typeController.getAllType);

export default router;
