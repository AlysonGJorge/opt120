const database = require('../database/connection');

class UserTaskController {
    usuarioFezTarefa(request, response) {
        const {id_user,id_atividade,dt_entrega,nr_nota} = request.body;

        database.insert({ id_user, id_atividade, dt_entrega, nr_nota }).table("usuario_atividade").then(data => {
            response.json({ message: "Usuário fez atividade" });
        }).catch(error => {
            console.log(error);
        });
    };

        todosUsuariosFizeramTask(request, response) {
            const id_atividade = request.params.id_atividade;
            database
                .select("usuario.id_user", "usuario.nm_user")
                .from("usuario")
                .join("usuario_atividade", "usuario.id_user", "=", "usuario_atividade.id_user")
                .where("usuario_atividade.id_atividade", id_atividade)
                .then(results => {
                    response.json(results);
                }).catch(error => {
                    response.status(500).json({error: 'Ninguém fez essa atividade'});
                });
        }
    
        todasTarefasUsuarioFez(request, response) {
            const id_user = request.params.id_user;
            database
                .select("atividade.id_atividade", "atividade.ds_titulo")
                .from("atividade")
                .join("usuario_atividade", "atividade.id_atividade", "=", "usuario_atividade.id_atividade")
                .where("usuario_atividade.id_user", id_user)
                .then(results => {
                    response.json(results);
                }).catch(error => {
                    console.log("Database error:", error);
                    response.status(500).json({error: 'Usuário não fez nenhuma tarefa'});
                });
        }
    tudotudao(request, response) {
        const id_user = request.params.id_user;
        database
            .select("*")
            .from("usuario_atividade")
            .then(results => {
                response.json(results);
            }).catch(error => {
                console.log("Database error:", error);
                response.status(500).json({error: 'Usuário não fez nenhuma tarefa'});
            });
    }
}
module.exports = new UserTaskController();