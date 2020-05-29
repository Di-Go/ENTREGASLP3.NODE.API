const bodyParser = require('body-parser');

const express = require('express');
const appServer = express();

// Inicialização dos Módulos
appServer.use(bodyParser.json());
appServer.use(bodyParser.urlencoded({extended: false}));

// Rotas


// Inicialização do Servidor
appServer.listen(8082, () => {
    console.log("Servidor executando no endereço http://localhost:8082");
});