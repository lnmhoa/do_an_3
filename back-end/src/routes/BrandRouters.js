import express from 'express'
import brandController from '../controllers/BrandController'
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router()
// admin
router.post('/create', authMiddleware, brandController.createBrand);
router.put('/update/:id', authMiddleware, brandController.updateBrand);
router.delete('/delete/:id', authMiddleware, brandController.deleteBrand);
//all
router.get('/get-all', brandController.getAllBrand);

export default router;
