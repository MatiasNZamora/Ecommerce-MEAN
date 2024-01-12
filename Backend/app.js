'use strict';
const  express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.PORT || 4000;

const app = express()

const clienteRoute = require('./routes/cliente.routes.js');
const adminRoute = require('./routes/admin.routes.js');


mongoose.connect('mongodb://127.0.0.1:27017/shop', {});

app.listen(port, function(){
    console.log(`server running on port: ${port}`);
});

// analiza el cuerpo de las peticiones y lo r
app.use(bodyparser.urlencoded({ extended:true }));
app.use(bodyparser.json({limit: '50mb', extended: true }));

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/api', clienteRoute);
app.use('/api', adminRoute);



module.exports = app;