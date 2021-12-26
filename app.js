const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
//Rotas
app.get("/", async (req, res)=>{

    const db = require('./models/db');
    const bancos = await db.selectCustomers();
    dados_bancos = JSON.stringify(bancos);
    
    return res.send(dados_bancos);
});

app.get("/:codigo", async (req, res) => {
    codigo = req.params.codigo;
    const db = require('./models/db');
    const consulta = await db.selectCustomer(codigo);
    dados_consulta = JSON.stringify(consulta);

    return res.send(dados_consulta);
});


app.listen(8080, function(){
    console.log("Rodando servidor na url http://localhost:8080");
});