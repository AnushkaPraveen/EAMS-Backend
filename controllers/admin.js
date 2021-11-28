const Admin = require('../models/adminModel');


const countAdmin = async(req, res) => {
    let count;
    try {
        count = await Admin.estimatedDocumentCount();
        res.sendStatus(count)
    } catch (err) {
        res.send({ err })
    }
}

const getAdmin = async(req, res) => {
    let admin;
    try {
        admin = await Admin.find({});
        res.send(admin)
    } catch (err) {
        res.send({ err })
    }

    console.log("your function is working");
}

const addAdmin = async(req, res) => {
    const { name, email } = req.body;

    const addAdmin = new Admin({
        name,
        email
    });

    try {
        await addAdmin.save();
        res.send("Admin added");

    } catch (err) {
        res.send({ err });
    }
}

const updateAdmin = async(req, res) => {
    const { name, email } = req.body;
    const adminId = req.params.id;
    let admin;
    try {
        admin = await Admin.findById(adminId);
    } catch (err) {
        res.send({ err });
    }

    admin.name = name;
    admin.email = email;
    try {
        await admin.save();
        res.send("Admin details updated");
    } catch (err) {
        res.semd({ err });
    }
}

const deleteAdmin = async(req, res) => {
    const adminId = req.params.id;

    console.log(adminId);
    let admin;
    try {
        admin = await Admin.findById(adminId);
    } catch (err) {
        res.send({ err });
    }
    try {
        await admin.remove();
        res.send("Admin deleted")
    } catch (err) {
        res.send({ err });
    }

}



exports.getAdmin = getAdmin;
exports.addAdmin = addAdmin;
exports.updateAdmin = updateAdmin;
exports.deleteAdmin = deleteAdmin;
exports.countAdmin = countAdmin;