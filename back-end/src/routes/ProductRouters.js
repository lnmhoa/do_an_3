import express from 'express'
import productController from '../controllers/ProductControllers.js'
import middleware from '../middleware/authMiddlewares.js'

const router = express.Router();

router.post('/create', productController.createProduct);
router.put('/update/:id', middleware.authAdminMiddleware, productController.updateProduct);
router.delete('/delete/:id', middleware.authAdminMiddleware, productController.deleteProduct);

router.get('/get-detail/:id', productController.getDetailProduct);
router.get('/get-all', productController.getAllProduct);

export default router;
