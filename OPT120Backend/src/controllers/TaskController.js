const database = require('../database/connection');

class TaskController {
    novaTask(request, response) {
        const {id_atividade,ds_titulo,ds_atividade,dt_limite } = request.body;

        console.log(id_atividade,ds_titulo,ds_atividade,dt_limite)

        database.insert({id_atividade,ds_titulo,ds_atividade,dt_limite }).table("atividade").then(data => {
            console.log(data);
            response.json({ message: "Atividade criada com sucesso" });
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
        const id = request.params
        const {descricao} = params.body
        console.log(id)
        database.where(id).update({descricao:descricao}).table("atividade").then(atividade => { 
            response.json("atividade atualizada com sucesso");
        }).catch(error => {
            console.log("Database error:", error);
            response.status(500).json({error: 'ao atualizar uma tarefa'});
        });
    }


}

module.exports = new TaskController();