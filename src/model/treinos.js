import treinosDAO from "../DAO/treinosDAO.js"
import treinosSchema from './schema/treinosSchema.js'

class Treinos {
    constructor(db){
        this.dao = new treinosDAO(db)
    }

    todosTreinos = async () => {
        try {
            return await this.dao.todosTreinos()
        } catch (error) {
            throw new Error(error.mensagem)
        }
    }

    pegaUmAluno = async (aluno) => {
        try {
            return await this.dao.pegaUmAluno(aluno)
        } catch (error) {
            throw new Error(error.mensagem)
        }
    }
    
    pegaAlunoId = async (ID_ALUNO) => {
        try {
            return await this.dao.pegaAlunoId(ID_ALUNO)
        } catch (error) {
            throw new Error(error.mensagem)
        }
    }

    insereTreinos = async (treino) => {
        try {
            const novoTreino = new treinosSchema(treino.aluno, treino.instrutor, treino.série, treino.exercícios)
            return await this.dao.insereTreinos(novoTreino)
        } catch (error) {
            throw new Error (error.mensagem)
        }
    }

    deletaTreino = async (ID_ALUNO) => {
        try {
            await this._verificaTreino(ID_ALUNO)
            return await this.dao.deletaTreino(ID_ALUNO)  
        } catch (error) {
            return {
                "mensagem" : error.message,
                "erro" : true
            }
        }
    }

    atualizaTreino = async (ID_ALUNO, treino) => {
        try {
            await this._verificaTreino(ID_ALUNO)
            const treinoAtualizado = new treinosSchema(treino.aluno, treino.instrutor, treino.série, treino.exercícios)
            return await this.dao.atualizaTreino(ID_ALUNO, treinoAtualizado)
        } catch (error) {
            return ({
                "mensagem" : error.message,
                "erro" : true
            })
        }
    }

 

}

export default Treinos