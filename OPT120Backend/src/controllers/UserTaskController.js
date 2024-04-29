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
            database.select("*").table("usuario_atividade").then(atividades => { 
                // Converter o id_atividade para string
                atividades.forEach(atividade => {
                    atividade.id_atividade = atividade.id_atividade.toString();
                });
                console.log(atividades)
                response.json(atividades);
            }).catch(error => {
                console.log("Database error:", error);
                response.status(500).json({error: 'um erro ocorreu ao puxar todas as task'});
            });
        }
        

    atualizarUserTask(request, response) {
        const {id_user, id_atividade, dt_entrega, nr_nota} = request.body;
        database('usuario_atividade')
            .where({ id_user, id_atividade })
            .update({ dt_entrega, nr_nota })
            .then(data => {
                response.json({ message: "Tarefa do usuário atualizada com sucesso" });
            }).catch(error => {
                console.log(error);
                response.status(500).json({error: 'Erro ao atualizar tarefa do usuário'});
            });
    }
    
    deletarUserTask(request, response) {
        const {id_user, id_atividade} = request.body;
        database('usuario_atividade')
            .where({ id_user, id_atividade })
            .del()
            .then(data => {
                response.json({ message: "Tarefa do usuário deletada com sucesso" });
            }).catch(error => {
                console.log(error);
                response.status(500).json({error: 'Erro ao deletar tarefa do usuário'});
            });
    }
}
module.exports = new UserTaskController();