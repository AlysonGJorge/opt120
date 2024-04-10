const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const TaskController= require('../controllers/TaskController');

router.post('/user', TaskController.novoUsuario);

router.get('/user', TaskController.todosUsuarios)

module.exports = router;