const employeeModel = require("../models/employee");

const employeeOperations = {
    add(regEmployee, res) {
        console.log(regEmployee)
        employeeModel.create(regEmployee, (err) => {
            if(err) {
                console.log(err)
                res.send('Error occured during registration');
            }
            else {
                res.send('Employee Record Added....');
            }
        })
    }
}

module.exports = employeeOperations;