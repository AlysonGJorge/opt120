const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');
const UserController = require('../controllers/UserController');

router.post('/user', UserController.novoUsuario);
router.get('/user', UserController.todosUsuarios);
router.get('/user/:id_user', UserController.umUsuario);


router.post('/task', TaskController.novaTask);
router.get('/task', TaskController.todasTask);
router.get('/task/:id_atividade', TaskController.umaTask);
router.put('/atualizar/task/:id_atividade', TaskController.atualizaTask);


module.exports = router;