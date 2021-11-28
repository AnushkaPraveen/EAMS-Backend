const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/service');


router.get('/services', serviceController.getService)
router.post('/createservice', serviceController.createService)
router.delete('/deleteservice/:id', serviceController.deleteService)
router.patch('/updateservice/:id', serviceController.updateService)


module.exports = router;