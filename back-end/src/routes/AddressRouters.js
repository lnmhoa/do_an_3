import express from 'express'
import addressController from '../controllers/AddressController'
import { authMiddleware } from '../middleware/authMiddleware'

const router = express.Router()
// admin
router.post('/create', authMiddleware, addressController.createBrand);
router.put('/update/:id', authMiddleware, addressController.updateBrand);
router.delete('/delete/:id', authMiddleware, addressController.deleteBrand);
//user
router.get('/get-all-address/:id', addressController.getAllBrand);

export default router;
