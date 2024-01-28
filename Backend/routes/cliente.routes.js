const express = require('express');
const clienteController = require('../controllers/cliente.controller.js');

const api = express.Router();

api.post('/registroCliente', clienteController.registroCliente);
api.post('/loginCliente', clienteController.loginCliente)


module.exports = api;