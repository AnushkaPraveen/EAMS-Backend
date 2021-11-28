const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplier');


router.get('/suppliers', supplierController.getSupplier)
router.post('/createsupplier', supplierController.createSupplier)
router.delete('/deletesupplier/:id', supplierController.deleteSupplier)
router.patch('/updatesupplier/:id', supplierController.updateSupplier)


module.exports = router;