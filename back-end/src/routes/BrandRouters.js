import express from 'express'
import brandController from '../controllers/BrandController.js'
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router()
// admin
router.post('/create', authMiddleware.authAdminMiddleware, brandController.createBrand);
router.put('/update/:id', authMiddleware.authAdminMiddleware, brandController.updateBrand);
router.delete('/delete/:id', authMiddleware.authAdminMiddleware, brandController.deleteBrand);
//all
router.get('/get-all', brandController.getAllBrand);

export default router;
