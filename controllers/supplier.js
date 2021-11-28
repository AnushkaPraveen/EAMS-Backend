const Supplier = require('../models/supplier');


const getSupplier = async(req, res) => {
    let supplier;
    try {
        supplier = await Supplier.find({});
        res.send(supplier)
    } catch (err) {
        res.send({ err })
    }

    console.log("your function is working");
}



const createSupplier = async(req, res) => {
    const { name, telephone, product_item, email, brand, address } = req.body;

    const createSupplier = new Supplier({
        name,
        telephone,
        product_item,
        email,
        brand,
        address

    });

    try {
        await createSupplier.save();
        res.send("Supplier details added");

    } catch (err) {
        res.send({ err });
    }
}

const updateSupplier = async(req, res) => {
    const { name, telephone, product_item, email, brand, address } = req.body;
    const supplierId = req.params.id;
    let supplier;
    try {
        supplier = await Supplier.findById(supplierId);
    } catch (err) {
        res.send({ err });
    }


    supplier.name = name;
    supplier.email = email;
    supplier.address = address;
    supplier.telephone = telephone;
    supplier.product_item = product_item;
    supplier.brand = brand;
    try {
        await supplier.save();
        res.send("Supplier details updated");
    } catch (err) {
        res.send({ err });
    }
}


const deleteSupplier = async(req, res) => {
    const supplierId = req.params.id;

    console.log(supplierId);
    let supplier;
    try {
        supplier = await Supplier.findById(supplierId);
    } catch (err) {
        res.send({ err });
    }
    try {
        await supplier.remove();
        res.send("Supplier deleted")
    } catch (err) {
        res.send({ err });
    }

}



exports.getSupplier = getSupplier;
exports.createSupplier = createSupplier;
exports.deleteSupplier = deleteSupplier;
exports.updateSupplier = updateSupplier