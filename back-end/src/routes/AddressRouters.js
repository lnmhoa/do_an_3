import express from 'express'
import addressController from '../controllers/AddressController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()
// admin
router.post('/create', authMiddleware.authUserMiddleware, addressController.createAddress);
router.put('/update/:id', authMiddleware.authUserMiddleware, addressController.updateAddress);
router.delete('/delete/:id', authMiddleware.authUserMiddleware, addressController.deleteAddress);
//user
router.get('/get-all-address/:id', authMiddleware.authUserMiddleware, addressController.getAllAddress);

export default router;
