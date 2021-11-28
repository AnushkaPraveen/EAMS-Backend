const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const warrantySchema = new Schema({
    product_name: {
        type: String,
    },
    customer_name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    address: {
        type: String,
    },
    warranty_time: {
        type: String,
    },
    purchase: {
        type: String,
    }
}, { timestamps: true });
const Warranty = mongoose.model('warranty', warrantySchema);
module.exports = Warranty;