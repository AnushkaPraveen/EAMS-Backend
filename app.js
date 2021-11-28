const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');


const adminRoutes = require('./routes/admin')
const productRoutes = require('./routes/product')
const employeeRoutes = require('./routes/employee')
const serviceRoutes = require('./routes/service')
const supplierRoutes = require('./routes/supplier')
const warrantyRoutes = require('./routes/warranty')

const app = express();
app.use(bodyparser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, authorization, Authorization");
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('allow-credentials', "true");
    next();
});


app.use(adminRoutes);
app.use(productRoutes);
app.use(employeeRoutes);
app.use(serviceRoutes);
app.use(supplierRoutes);
app.use(warrantyRoutes);


const mongodb = 'mongodb+srv://EAMS:eamsadbs123@cluster0.mw7zj.mongodb.net/EAMS?retryWrites=true&w=majority';

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));


app.listen(4000, () => { console.log("server running"); });