const express = require('express');
const adminController = require('../controllers/admin.controller.js');

const api = express.Router();

api.post('/registroAdmin', adminController.registroAdmin);
api.post('/loginAdmin', adminController.loginAdmin);


module.exports = api;