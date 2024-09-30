import express from 'express'
import brandController from '../controllers/BrandControllers.js'
import authMiddleware from '../middleware/authMiddlewares.js';
import brandValidation from '../validations/BrandValidations.js'

const router = express.Router()

router.post('/create', authMiddleware.authAdminMiddleware, brandValidation.createBrand, brandController.createBrand);
router.put('/update/:id', authMiddleware.authAdminMiddleware, brandValidation.updateBrand, brandController.updateBrand);
router.delete('/delete/:id', authMiddleware.authAdminMiddleware, brandController.deleteBrand);

router.get('/get-all', brandController.getAllBrand);

export default router;
