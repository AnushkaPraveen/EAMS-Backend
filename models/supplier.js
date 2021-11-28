const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
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
    },
    product_item: {
        type: String,
    },
    brand: {
        type: String,
    }
}, { timestamps: true });
const Supplier = mongoose.model('supplier', supplierSchema);
module.exports = Supplier;