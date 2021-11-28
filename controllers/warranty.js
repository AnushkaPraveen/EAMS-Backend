const Warranty = require('../models/warranty');


const getWarranty = async(req, res) => {
    let warranty;
    try {
        warranty = await Warranty.find({});
        res.send(warranty)
    } catch (err) {
        res.send({ err })
    }

    console.log("your function is working");
}



const createWarranty = async(req, res) => {
    const { product_name, customer_name, email, phone, address, warranty_time, purchase } = req.body;

    const createWarranty = new Warranty({

        product_name,
        customer_name,
        email,
        phone,
        address,
        warranty_time,
        purchase

    });

    try {
        await createWarranty.save();
        res.send("Warranty details added");

    } catch (err) {
        res.send({ err });
    }
}

const updateWarranty = async(req, res) => {
    const { product_name, customer_name, email, phone, address, warranty_time, purchase } = req.body;
    const warrantyId = req.params.id;
    let warranty;
    try {
        warranty = await Warranty.findById(warrantyId);
    } catch (err) {
        res.send({ err });
    }


    warranty.product_name = product_name;
    warranty.customer_name = customer_name;
    warranty.email = email;
    warranty.phone = phone;
    warranty.address = address;
    warranty.warranty_time = warranty_time;
    warranty.purchase = purchase;
    try {
        await warranty.save();
        res.send("Warranty details updated");
    } catch (err) {
        res.send({ err });
    }
}


const deleteWarranty = async(req, res) => {
    const warrantyId = req.params.id;

    console.log(warrantyId);
    let warranty;
    try {
        warranty = await Warranty.findById(warrantyId);
    } catch (err) {
        res.send({ err });
    }
    try {
        await warranty.remove();
        res.send("Warranty deleted")
    } catch (err) {
        res.send({ err });
    }

}



exports.getWarranty = getWarranty;
exports.createWarranty = createWarranty;
exports.deleteWarranty = deleteWarranty;
exports.updateWarranty = updateWarranty;