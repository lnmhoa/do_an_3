import express from 'express'
import brandController from '../controllers/BrandControllers.js'
import authMiddleware from '../middleware/authMiddlewares.js';

const router = express.Router()

router.post('/create', authMiddleware.authAdminMiddleware, brandController.createBrand);
router.put('/update/:id', authMiddleware.authAdminMiddleware, brandController.updateBrand);
router.delete('/delete/:id', authMiddleware.authAdminMiddleware, brandController.deleteBrand);

router.get('/get-all', brandController.getAllBrand);

export default router;
