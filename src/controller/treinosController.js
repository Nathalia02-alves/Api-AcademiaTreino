import Treinos from "../model/treinos.js"

const treinosController = (app, bancoDeDados) => {

    const treinosModel = new Treinos(bancoDeDados)

    app.get('/treinos', async (req, res) => {
        try {
            const resposta = await treinosModel.todosOsTreinos()
            res.status(200).json({
                "treinos" : resposta,
                "erro" : false
            })
        } catch (error) {
            res.status(400).json ({
                "mensagem" : error.message,
                "erro" : true
            })
        }    
    })

    app.get('/treinos/alunos/:alunos', async (req, res) => {
            const aluno = req.params.aluno
            res.json(await treinosModel.pegaUmAluno(aluno))
    })

    app.get('/treinos/ID_ALUNO/:ID_ALUNO', async (req, res) => {
        const ID_ALUNO = req.params.ID_ALUNO
        res.json(await treinosModel.pegaAlunoId(ID_ALUNO))
})


    app.post('/treinos', async (req, res) => {
        const body = req.body
        try {
            const resposta = await treinosModel.insereTreinos(body)
            res.status(201).json({
                "mensagem" : resposta,
                "erro" : false
            })
        } catch (error) {
            res.status(400).json({
                "mensagem": error.message,
                "erro": true
            })
        }   
    })

    app.delete('/treinos/ID_ALUNO/:ID_ALUNO', async (req, res) => {
        const id = req.params.ID_ALUNO
        res.json(await treinosModel.deletaTreinos(id))
    })

    app.put('/treinos/ID_ALUNO/:ID_ALUNO', async (req, res) => {
        const id = req.params.ID_ALUNO 
        const body = req.body
        res.json(await treinosModel.atualizaTreino(id, body))
    })
}

export default treinosController