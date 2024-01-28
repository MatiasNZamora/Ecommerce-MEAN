const Admin = require('../models/admin.js');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../helpers/jwt.js');


const registroAdmin = async function (req, res){
    const data = req.body;
    let admin_arr = [];

    // verifico y busco el email 
    admin_arr = await Admin.find({ email:data.email });

    // creo un cliente
    if(admin_arr.length == 0){
        if(data.password){
            bcrypt.hash(data.password, null, null, async function(err, hash){
                if(hash){
                    data.password = hash;
                    const reg = await Admin.create(data);
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

const loginAdmin = async function(req, res) {
    const data = req.body;
    let admin_arr = [];

    admin_arr = await Admin.find({email: data.email});

    if(admin_arr.length == 0 ){
        res.status(200).send({message: 'no se encontro el correo'});
    } else {
        const user = admin_arr[0];

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


module.exports = {
    registroAdmin,
    loginAdmin,
};