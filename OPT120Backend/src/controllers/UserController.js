const database = require('../database/connection');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

class UserController {
    novoUsuario(request, response) {
        console.log(request.body)
        const {nm_user,nm_email,cd_senha} = request.body;

        console.log(nm_user, nm_email, cd_senha)

        database.insert({nm_user, nm_email, cd_senha }).table("usuario").then(data => {
            response.status(201).json({ message: "Usuário criado com sucesso" });
        }).catch(error => {
            console.log(error);
        });
    };

    todosUsuarios(request, response) {
        database.select("*").from("usuario").then(results => {
            response.json(results);
        }).catch(error => {
            console.log("Database error:", error);
            response.status(500).json({error: 'An error occurred while fetching users'});
        });
    }

    umUsuario(request, response) {
        const id = request.params
        console.log(id)
        database.select("*").table("usuario").where(id).then(usuario => { 
            console.log(usuario)
            response.json(usuario);
        }).catch(error => {
            console.log("Database error:", error);
            response.status(500).json({error: 'Um erro ocorreu ao puxar um usuárioS'});
        });
    }
    atualizaUser(request, response) {
        console.log(request.params.id_user)
        const id_user = request.params.id_user;
        const { nm_user, nm_email, cd_senha } = request.body;
        database.where({ id_user }).update({ nm_user, nm_email, cd_senha }).table("usuario").then(usuario => { 
            response.status(200).json({message: 'usuário atualizado com sucesso'});
        }).catch(error => {
            console.log("Database error:", error);
            response.status(500).json({error: 'Erro ao atualizar um usuário'});
        });
    }
    
    deletaUser(request, response) {
        const id = request.params
        database.where(id).del().table("usuario").then(usuario => { 
            response.json("usuário deletado com sucesso");
        }).catch(error => {
            console.log("Database error:", error);
            response.status(500).json({error: 'ao deletar um usuário'});
        });
    }

}
module.exports = new UserController();