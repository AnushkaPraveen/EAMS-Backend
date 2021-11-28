const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    nic: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    telephone: {
        type: Number,
    },
    address: {
        type: String,
    }
}, { timestamps: true });
const Employee = mongoose.model('employee', employeeSchema);
module.exports = Employee;