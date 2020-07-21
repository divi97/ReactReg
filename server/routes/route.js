const express = require('express');
const router = express.Router();
const employeeModel = require('../models/employee');
const employeeOperations = require('../controllers/employeeOperations');

router.post('/register', (req, res) => {
    const regEmployee = req.body
    console.log(regEmployee)
    employeeOperations.add(regEmployee, res);
})

router.post('/view', (req, res) => {
    // For searching and viewing a particular employee (employee id received in req.body)
})

router.get('/list', (req, res) => {
    // For getting list of all registered employees    
})

module.exports = router;