import express from 'express'
import productController from '../controllers/ProductController.js'
import middleware from '../middleware/authMiddleware.js'

const router = express.Router();
// admin
router.post('/create', productController.createProduct);
router.put('/update/:id', middleware.authAdminMiddleware, productController.updateProduct);
router.delete('/delete/:id', middleware.authAdminMiddleware, productController.deleteProduct);
//user
router.get('/get-detail/:id', productController.getDetailProduct);
router.get('/get-all', productController.getAllProduct);

export default router;
