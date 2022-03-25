class treinosDAO{
    constructor(db){

        this.db = db
    }
    todosTreinos = ()=>{
        return new Promisse((resolve, reject)=>{
            this.db.all('SELECT * FROM TREINOS', (error, rows)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "treinos": rows,
                        "erro": false
                    })
                }
            })
        })
    }

pegaUmAluno = (aluno)=>{
    return new Promise((resolve, reject)=>{
        this.db.all('SELECT * FROM TREINOS WHERE ALUNO = ?',
        aluno,
        (error, rows)=>{
            if(error){
                reject({
                    "mensagem": error.message,
                    "erro": true
                })
            }else{
                resolve({
                    "treinos": rows,
                    "erro": false
                })
            }
        })
    })
}

pegaAlunoId = (ID_ALUNO)=>{
    return new Promise((resolve, reject)=>{
        this.db.all('SELECT * FROM TREINOS WHERE ID_ALUNO = ?',
        ID_ALUNO,
        (error, rows)=>{
            if(error){
                reject(error)
            }else{
                resolve({
                    "treinos": rows,
                    "erro": false
                })
            }
        })
    })
}

insereTreinos = (novoTreino) =>{

    return new Promise((resolve, reject)=>{
        this.db.run("INSERT INTO TREINOS (ALUNO, INSTRUTOR, SÉRIE, EXERCÍCIOS) VALUES (?, ?, ?, ?)",
        novoTreino.aluno, novoTreino.instrutor, novoTreino.série, novoTreino.exercícios,
            (error)=>{
            if(error){
                reject({
                    "mensagem":error.message,
                    "erro": true
                })
            }else{
                resolve({
                    "mensagem":`Treino inserido com sucesso! Obrigada ${novoTreino.aluno}.`,
                    "treino": novoTreino,
                    "erro": true
                })
            }
        })
    })

}

deletaTreino = (ID_ALUNO)=>{
    return new Promise((resolve, reject)=>{
        this.db.run('DELETE FROM TREINOS WHERE ID_ALUNO = ?',
        ID_ALUNO,
        (error)=>{
            if(error){
                reject({
                    "mensagem":error.message,
                    "erro": true
                })
            }else{
                resolve({
                    "treinos": `Seu id ${ID_ALUNO} foi deletado com sucesso`,
                    "erro": false
                })
            }
        })
    })
}

atualizaTreino = (ID_ALUNO, treino)=>{
    return new Promise((resolve, reject)=>{
        this.db.run('UPDATE TREINO SET ALUNO = ?, INSTRUTOR = ?, SÉRIE = ?, EXERCÍCIOS = ?',
        treino.aluno, treino.instrutor, treino.série, treino.exercícios,
        ID_ALUNO,
        (error)=>{
            if(error){
                reject(error)
            }else{
                resolve({
                    "mensagem": `Olá ${treino.aluno}, seu treino de id ${ID_ALUNO} foi atualizado com sucesso`,
                    "treinos": treino,
                    "erro": false
                })
            }
        })
    })
}

}

export default treinosDAO