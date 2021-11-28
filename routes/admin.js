const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/admin', adminController.getAdmin);
router.post('/addadmin', adminController.addAdmin);
router.patch('/updateadmin/:id', adminController.updateAdmin);
router.delete('/deleteadmin/:id', adminController.deleteAdmin);
router.get('/count', adminController.countAdmin);

module.exports = router;