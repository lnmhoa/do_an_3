const express = require('express');
const router = express.Router();
const brandController = require('../controllers/BrandController');
const { authMiddleware } = require('../middleware/authMiddleware');
// admin
router.post('/create', authMiddleware, brandController.createBrand);
router.put('/update/:id', authMiddleware, brandController.updateBrand);
router.delete('/delete/:id', authMiddleware, brandController.deleteBrand);
//user
router.get('/get-details', brandController.getDetailBrand);
router.get('/get-all', brandController.getAllBrand);

module.exports = router;
