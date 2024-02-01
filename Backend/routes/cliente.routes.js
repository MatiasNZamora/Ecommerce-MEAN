const express = require('express');
const clienteController = require('../controllers/cliente.controller.js');

const api = express.Router();

api.post('/registroCliente', clienteController.registroCliente);
api.post('/loginCliente', clienteController.loginCliente);
api.get('/listar_cliente_filtro_admin/:tipo/:filtro?', clienteController.listar_cliente_filtro_admin);


module.exports = api;