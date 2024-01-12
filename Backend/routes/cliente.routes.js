const express = require('express');
const clienteController = require('../controllers/cliente.controller.js');

const api = express.Router();

api.post('/registroCliente', clienteController.registroCliente);


module.exports = api;