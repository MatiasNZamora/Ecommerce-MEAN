const Cliente = require('../models/cliente.js');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../helpers/jwt.js');



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


const loginCliente = async function(req, res) {
    const data = req.body;
    let cliente_arr = [];

    cliente_arr = await Cliente.find({email: data.email});

    if(cliente_arr.length == 0 ){
        res.status(200).send({message: 'no se encontro el correo'});
    } else {
        const user = cliente_arr[0];

        bcrypt.compare(data.password, user.password, async function(error, check){
            if(check){
                res.status(200).send({
                    data: user,
                    token: jwt.createToken(user)
                });
            }else {
                res.status(200).send({message: 'la contraseña no conincide'});
            };
        });
    };
};

const listar_cliente_filtro_admin = async function(req, res){
    
    let tipo = req.params['tipo']; //tipo de filtro apellido
    let filtro = req.params['filtro']; // filtro en si osea el valor "zamora"

    if(tipo = null || tipo == 'null'){
        let reg = await Cliente.find();
        res.status(200).send({data:reg});
    } else {
        if(tipo == 'apellido'){
            let reg = await Cliente.find({apellido: new RegExp(filtro, 'i')});
            res.status(200).send({data:reg});
        } else if (tipo == 'correo') {
            let reg = await Cliente.find({email: new RegExp(filtro, 'i')});
            res.status(200).send({data:reg});
        };
    };
};

module.exports = {
    registroCliente,
    loginCliente,
    listar_cliente_filtro_admin,
};