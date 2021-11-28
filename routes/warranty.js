const express = require('express');
const router = express.Router();
const warrantyController = require('../controllers/warranty');


router.get('/warranty', warrantyController.getWarranty)
router.post('/createwarranty', warrantyController.createWarranty)
router.delete('/deletewarranty/:id', warrantyController.deleteWarranty)
router.patch('/updatewarranty/:id', warrantyController.updateWarranty)


module.exports = router;