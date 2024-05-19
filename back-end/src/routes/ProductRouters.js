const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
const { authMiddleware } = require('../middleware/authMiddleware');
// admin
router.post('/create', productController.createProduct);
router.put('/update/:id', authMiddleware, productController.updateProduct);
router.delete('/delete/:id', authMiddleware, productController.deleteProduct);
//user
router.get('/get-details/:id', productController.getDetailProduct);
router.get('/get-all', productController.getAllProduct);

module.exports = router;
