const database = require('../database/connection');

class TaskController {
    novaTask(request, response) {
        const {ds_titulo,ds_atividade,dt_limite } = request.body;

        console.log(ds_titulo,ds_atividade,dt_limite)

        database.insert({ds_titulo,ds_atividade,dt_limite }).table("atividade").then(data => {
            console.log(data);
            response.status(201).json({ message: "Atividade criada com sucesso" });
        }).catch(error => {
            console.log(error);
        });
    };

    todasTask(request, response) {
        database.select("*").table("atividade").then(atividades => { 
            console.log(atividades)
            response.json(atividades);
        }).catch(error => {
            console.log("Database error:", error);
            response.status(500).json({error: 'um erro ocorreu ao puxar todas as task'});
        });
    }

    umaTask(request, response) {
        const id = request.params
        console.log(id)
        database.select("*").table("atividade").where(id).then(atividade => { 
            console.log(atividade)
            response.json(atividade);
        }).catch(error => {
            console.log("Database error:", error);
            response.status(500).json({error: 'um erro ocorreu ao puxar uma task'});
        });
    }

    atualizaTask(request, response) {
        const id_atividade = request.params.id_atividade;
        const { ds_titulo, ds_descricao, dt_entrega } = request.body;
        database.where({ id_atividade }).update({ ds_titulo, ds_descricao, dt_entrega }).table("atividade").then(atividade => { 
            response.json("atividade atualizada com sucesso");
        }).catch(error => {
            console.log("Database error:", error);
            response.status(500).json({error: 'Erro ao atualizar uma tarefa'});
        });
    }

    deletaTask(request, response) {
        console.log(request.params)
        const id = request.params
        database.where(id).del().table("atividade").then(atividade => { 
            response.json("atividade deletada com sucesso");
        }).catch(error => {
            console.log("Database error:", error);
            response.status(500).json({error: 'ao deletar uma tarefa'});
        });
    }

}

module.exports = new TaskController();