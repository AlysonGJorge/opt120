const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const TaskController= require('../controllers/TaskController');

router.post('/novouser', TaskController.novoUsuario);

module.exports = router;