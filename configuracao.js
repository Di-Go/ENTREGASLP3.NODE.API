const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const servidor = express();

//#region Importação de Rotas
    // Cadastros
        const cadastros = require("./src/routes/cadastros");
//#endregion

//#region Configuração dos Módulos
    // BodyParser
        servidor.use(bodyParser.json());
        servidor.use(bodyParser.urlencoded({extended: false}));
    // Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost/DBFILMES').then(() => {
            console.log('Servidor conectado ao Banco de Dados.');
        }).catch((err) => {
            console.error(`Falha ao se conectar ao Banco de Dados.\n Mensagem de Erro:\n ${err}`);
        });
//#endregion

//#region Configuração de Rotas
    // Cadastros
        servidor.use('/api',cadastros);
//#endregion

//#region Configuração do Servidor
    const PORTA = 8082;
    servidor.listen(PORTA, () => {
        console.log(`Servidor executando no endereço http://localhost:${PORTA}`);
    });
//#endregion