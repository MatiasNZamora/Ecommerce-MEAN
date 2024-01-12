const Cliente = require('../models/cliente.js');
const bcrypt = require('bcrypt-nodejs');



const registroCliente = async function (req, res){
    const data = req.body;
    let clientes_arr = [];

    // verifico y busco el email 
    clientes_arr = await Cliente.find({ email:data.email });

    // creo un cliente
    if(clientes_arr.length == 0){
        if(data.password){
            bcrypt.hash(data.password, null, null, async function(err, hash){
                if(hash){
                    data.password = hash;
                    const reg = await Cliente.create(data);
                    res.status(201).send({data:reg});
                } else {
                    res.status(500).send({message: 'Error Server ', data:undefined});
                };
            });
        } else {
            res.status(400).send({message: 'No hay una contraseña ', data:undefined});
        }
    } else {
        res.status(200).send({message: 'El correo ya existe en la base de datos ', data:undefined});
    };

};



module.exports = {
    registroCliente,
};