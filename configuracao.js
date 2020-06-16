const bodyParser = require('body-parser');
const cors = require('cors');

const express = require('express');
const servidor = express();

//#region Configuração dos Módulos
    // BodyParser
        servidor.use(bodyParser.json());
        servidor.use(bodyParser.urlencoded({extended: false}));
    
    // Configuração do CORS via Middleware
        servidor.use((requisicao, resposta, next) => {
            resposta.header('Access-Control-Allow-Origin', 'http://localhost:8081')
            resposta.header('Access-Control-Allow-Headers', '*')
            servidor.use(cors());
            next();
        });
//#endregion

//#region Importação de Rotas
    // CategoriaFilme
        require("./src/controllers/CategoriaFilmeController")(servidor);
//#endregion

//#region Configuração de Rotas
//#endregion

//#region Configuração do Servidor
    const PORTA = 8082;
    servidor.listen(PORTA, () => {
        console.log(`Servidor executando no endereço http://localhost:${PORTA}`);
    });
//#endregion