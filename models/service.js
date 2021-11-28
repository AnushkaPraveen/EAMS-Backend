const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    service_item: {
        type: String,
    },
    assigned_employee: {
        type: String,
    },
    brand: {
        type: String,
    },
    category: {
        type: String,
    },
    customer_name: {
        type: String,
    },
    customer_address: {
        type: String,
    },
    customer_telephone: {
        type: String,
    },
    fee: {
        type: Number,
    },
    special_note: {
        type: String,
    },
}, { timestamps: true });
const Service = mongoose.model('service', serviceSchema);
module.exports = Service;