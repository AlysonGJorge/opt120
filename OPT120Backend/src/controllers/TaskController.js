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
    }
}

module.exports = new TaskController();