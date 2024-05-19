const express = require('express');
const router = express.Router();
const typeController = require('../controllers/TypeController');
const { authMiddleware } = require('../middleware/authMiddleware');
// admin
// router.post('/create', authMiddleware, brandController.createType);
// router.put('/update/:id', authMiddleware, brandController.updateType);
// router.delete('/delete/:id', authMiddleware, brandController.deleteType);
//user
router.get('/get-all', typeController.getAllType);

module.exports = router;
