const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');
const UserController = require('../controllers/UserController');
const UserTaskController = require('../controllers/UserTaskController');
const loginMiddleware = require('../middlewares/loginMiddleware');

router.post('/login', UserController.login);
router.post('/user', UserController.novoUsuario);
router.get('/user', UserController.todosUsuarios);
router.get('/user/:id_user', UserController.umUsuario);
router.put('/atualizar/user/:id_user', UserController.atualizaUser);
router.delete('/deletar/user/:id_user', UserController.deletaUser);

router.post('/task', TaskController.novaTask);
router.get('/task', TaskController.todasTask);
router.get('/task/:id_atividade', TaskController.umaTask);
router.put('/atualizar/task/:id_atividade', TaskController.atualizaTask);
router.delete('/deletar/task/:id_atividade', TaskController.deletaTask);

router.post('/UsuarioFezAtividade', UserTaskController.usuarioFezTarefa);
router.get('/task/:id_atividade/user', UserTaskController.todosUsuariosFizeramTask);
router.get('/user/:id_user/task/', UserTaskController.todasTarefasUsuarioFez);
router.put('/atualizar/Usertask/', TaskController.atualizaTask);
router.delete('/deletar/Usertask/', TaskController.deletaTask);
router.get('/all', UserTaskController.tudotudao);

module.exports = router;
