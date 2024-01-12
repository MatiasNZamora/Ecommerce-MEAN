const express = require('express');
const adminController = require('../controllers/admin.controller.js');

const api = express.Router();

api.post('/registroAdmin', adminController.registroAdmin);


module.exports = api;