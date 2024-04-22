const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
const { authMiddleware } = require('../middleware/authMiddleware');
// admin
router.post('/create', authMiddleware, productController.createProduct);
router.put('/update/:id', authMiddleware, productController.updateProduct);
router.delete('/delete/:id', authMiddleware, productController.deleteProduct);
//user
router.get('/get-details', productController.getDetailProduct);
router.get('/get-all', productController.getAllProduct);

module.exports = router;
