import express from 'express'
import brandController from '../controllers/BrandController'
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router()
// admin
router.post('/create', authMiddleware, brandController.createBrand);
router.put('/update/:id', authMiddleware, brandController.updateBrand);
router.delete('/delete/:id', authMiddleware, brandController.deleteBrand);
//user
router.get('/get-details', brandController.getDetailBrand);
router.get('/get-all', brandController.getAllBrand);

export default router;
