const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const AdminSchema = Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    telefono:{type: String, required: true},
    rol:{type: String, required: true},
    dni:{type: String, required: true},
});

module.exports = mongoose.model('admin', AdminSchema);