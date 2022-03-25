import express from "express";

import treinoController from "./src/controller/treinosController.js";




const app = express()

const port = 3000 



treinoController(app)


app.listen(port,()=>{
    console.log(`Servidor aberto na http://localhost:${port}/`)
})