const Product = require('../models/product');


const getProduct = async(req, res) => {
    let product;
    try {
        product = await Product.find({});
        res.send(product)
    } catch (err) {
        res.send({ err })
    }

    console.log("your function is working");
}



const createProduct = async(req, res) => {
    const { name, price, category, brand } = req.body;

    const createProduct = new Product({

        name,
        price,
        category,
        brand

    });

    try {
        await createProduct.save();
        res.send("Product details added");

    } catch (err) {
        res.send({ err });
    }
}

const updateProduct = async(req, res) => {
    const { name, price, category, brand } = req.body;
    const productId = req.params.id;
    let product;
    try {
        product = await Product.findById(productId);
    } catch (err) {
        res.send({ err });
    }


    product.name = name;
    product.price = price;
    product.category = category;
    product.brand = brand;
    try {
        await product.save();
        res.send("Product details updated");
    } catch (err) {
        res.send({ err });
    }
}


const deleteProduct = async(req, res) => {
    const productId = req.params.id;

    console.log(productId);
    let product;
    try {
        product = await Product.findById(productId);
    } catch (err) {
        res.send({ err });
    }
    try {
        await product.remove();
        res.send("Product deleted")
    } catch (err) {
        res.send({ err });
    }

}



exports.getProduct = getProduct;
exports.createProduct = createProduct;
exports.deleteProduct = deleteProduct;
exports.updateProduct = updateProduct;