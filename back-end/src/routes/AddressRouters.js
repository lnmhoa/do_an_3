import express from 'express'
import addressController from '../controllers/AddressControllers.js'
import authMiddleware from '../middleware/AuthMiddlewares.js'
import addressValidation from '../validations/AddressValidations.js';

const router = express.Router()

router.post('/create', authMiddleware.authUserMiddleware, addressValidation.createAddress, addressController.createAddress);
router.put('/update/:id', authMiddleware.authUserMiddleware, addressValidation.updateAddress, addressController.updateAddress);
router.delete('/delete/:id', authMiddleware.authUserMiddleware, addressController.deleteAddress);

router.get('/get-all-address/:id', authMiddleware.authUserMiddleware, addressController.getAllAddress);

export default router;
