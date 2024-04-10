const database = require('../database/connection');

class TaskController {
    novoUsuario(request, response) {
        const {id_user, nm_user, nm_email, cd_senha } = request.body;

        console.log(id_user, nm_user, nm_email, cd_senha)

        database.insert({ id_user, nm_user, nm_email, cd_senha }).table("usuario").then(data => {
            console.log(data);
            response.json({ message: "Usuário criado com sucesso" });
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

    novaTask(request, response) {
        const {id_user, nm_user, nm_email, cd_senha } = request.body;

        console.log(id_user, nm_user, nm_email, cd_senha)

        database.insert({ id_user, nm_user, nm_email, cd_senha }).table("usuario").then(data => {
            console.log(data);
            response.json({ message: "Usuário criado com sucesso" });
        }).catch(error => {
            console.log(error);
        });
    };

    todasTask(request, response) {
        database.select("*").from("usuario").then(results => {
            response.json(results);
        }).catch(error => {
            console.log("Database error:", error);
            response.status(500).json({error: 'An error occurred while fetching users'});
        });
    }


}
module.exports = new TaskController();