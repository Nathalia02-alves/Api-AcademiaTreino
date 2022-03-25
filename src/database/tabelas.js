import sqlite3 from "sqlite3";
sqlite3.verbose()
import{ dirname } from 'path'
import { fileURLToPath } from "url";
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'
const db = new sqlite3.Database(filePath);

const TREINOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "TREINOS"(
    "ID_ALUNO" INTEGER PRIMARY KEY AUTOINCREMENT,
    "ALUNO" VARCHAR(100),
    "INSTRUTOR" VARCHAR(100),
    "SÉRIE" VARCHAR(50),
    "EXERCÍCIOS" VARCHAR(100)
    );`;

    const ADD_TREINOS = `
    INSERT INTO TREINOS (ID_ALUNO, ALUNO, INSTRUTOR, SÉRIE, EXERCÍCIOS)
    VALUES

        (1, 'Karina', 'Felipe', 'A', 'Abdutora, Esteira, Abdominal'),
        (2, 'Nathalia', 'Felipe', 'B', 'Abdutora, Esteira, Abdominal')

    `
    function criaTabela() {
        db.run(TREINOS_SCHEMA, (error)=>{
            if (error) console.log("Erro ao criar tabela");
        });

    }

    function populaTabela() {
        db.run(ADD_TREINOS, (error)=>{
            if (error) console.log("Erro ao popular tabela");
        });
    }

    db.serialize( ()=> {
        criaTabela();
        populaTabela();
        });