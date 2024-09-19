import express from 'express'
import productController from '../controllers/ProductController'
import { authMiddleware } from '../middleware/authMiddleware'

const router = express.Router();
// admin
router.post('/create', productController.createProduct);
router.put('/update/:id', authMiddleware, productController.updateProduct);
router.delete('/delete/:id', authMiddleware, productController.deleteProduct);
//user
router.get('/get-detail/:id', productController.getDetailProduct);
router.get('/get-all', productController.getAllProduct);

export default router;
