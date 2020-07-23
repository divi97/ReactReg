const express = require('express');
const router = express.Router();
const employeeModel = require('../models/employee');
const employeeOperations = require('../controllers/employeeOperations');

router.post('/register', (req, res) => {
    const regEmployee = req.body
    employeeOperations.add(regEmployee, res);
})

router.post('/view/:id', (req, res) => {
    const id = req.params.id
    employeeOperations.view(id, res);
})

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    employeeOperations.delete(id, res);
})

router.get('/list', (req, res) => {
    employeeOperations.get_all(req, res)
})

router.delete('/clearall', (req, res) => {
    employeeOperations.clearAll(req, res);
})

module.exports = router;