const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee');


router.get('/employees', employeeController.getEmployee)
router.post('/addemployee', employeeController.createEmployee)
router.delete('/deleteemployee/:id', employeeController.deleteEmployee)
router.patch('/updateemployee/:id', employeeController.updateEmployee)


module.exports = router;