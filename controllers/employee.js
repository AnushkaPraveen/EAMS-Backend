const Employee = require('../models/employee');


const getEmployee = async(req, res) => {
    let employee;
    try {
        employee = await Employee.find({});
        res.send(employee)
    } catch (err) {
        res.send({ err })
    }

    console.log("your function is working");
}



const createEmployee = async(req, res) => {
    const { nic, name, email, telephone, address } = req.body;

    const createEmployee = new Employee({
        nic,
        name,
        email,
        telephone,
        address
    });

    try {
        await createEmployee.save();
        res.send("Employee details added");

    } catch (err) {
        res.send({ err });
    }
}

const updateEmployee = async(req, res) => {
    const { nic, name, email, telephone, address } = req.body;
    const employeeId = req.params.id;
    let employee;
    try {
        employee = await Employee.findById(employeeId);
    } catch (err) {
        res.send({ err });
    }

    employee.nic = nic;
    employee.name = name;
    employee.email = email;
    employee.telephone = telephone;
    employee.address = address;
    try {
        await employee.save();
        res.send("Employee details updated");
    } catch (err) {
        res.send({ err });
    }
}


const deleteEmployee = async(req, res) => {
    const employeeId = req.params.id;

    console.log(employeeId);
    let employee;
    try {
        employee = await Employee.findById(employeeId);
    } catch (err) {
        res.send({ err });
    }
    try {
        await employee.remove();
        res.send("Employee deleted")
    } catch (err) {
        res.send({ err });
    }

}



exports.getEmployee = getEmployee;
exports.createEmployee = createEmployee;
exports.deleteEmployee = deleteEmployee;
exports.updateEmployee = updateEmployee;