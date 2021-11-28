const Service = require('../models/service');


const getService = async(req, res) => {
    let service;
    try {
        service = await Service.find({});
        res.send(service)
    } catch (err) {
        res.send({ err })
    }

    console.log("your function is working");
}



const createService = async(req, res) => {
    const { service_item, assigned_employee, brand, category, customer_name, customer_address, customer_telephone, fee, special_note } = req.body;

    const createService = new Service({

        service_item,
        assigned_employee,
        brand,
        category,
        customer_name,
        customer_address,
        customer_telephone,
        fee,
        special_note

    });

    try {
        await createService.save();
        res.send("Service details added");

    } catch (err) {
        res.send({ err });
    }
}

const updateService = async(req, res) => {
    const { service_item, assigned_employee, brand, category, customer_name, customer_address, customer_telephone, fee, special_note } = req.body;
    const serviceId = req.params.id;
    let service;
    try {
        service = await Service.findById(serviceId);
    } catch (err) {
        res.send({ err });
    }


    service.service_item = service_item;
    service.assigned_employee = assigned_employee;
    service.category = category;
    service.brand = brand;
    service.customer_name = customer_name;
    service.customer_address = customer_address;
    service.customer_telephone = customer_telephone;
    service.fee = fee;
    service.special_note = special_note;
    try {
        await service.save();
        res.send("Service details updated");
    } catch (err) {
        res.send({ err });
    }
}


const deleteService = async(req, res) => {
    const serviceId = req.params.id;

    console.log(serviceId);
    let service;
    try {
        service = await Service.findById(serviceId);
    } catch (err) {
        res.send({ err });
    }
    try {
        await service.remove();
        res.send("Service deleted")
    } catch (err) {
        res.send({ err });
    }

}



exports.getService = getService;
exports.createService = createService;
exports.deleteService = deleteService;
exports.updateService = updateService;