const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');


router.get('/products', productController.getProduct)
router.post('/createproduct', productController.createProduct)
router.delete('/deleteproduct/:id', productController.deleteProduct)
router.patch('/updateproduct/:id', productController.updateProduct)


module.exports = router;