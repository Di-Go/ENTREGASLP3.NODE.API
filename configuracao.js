const bodyParser = require('body-parser');
const express = require('express');
const servidor = express();

//#region Configuração dos Módulos
    // BodyParser
    servidor.use(bodyParser.json());
    servidor.use(bodyParser.urlencoded({extended: false}));
//#endregion

//#region Configuração de Rotas

//#endregion

//#region Configuração do Servidor
    const PORTA = 8082;
    servidor.listen(PORTA, () => {
        console.log(`Servidor executando no endereço http://localhost:${PORTA}`);
    });
//#endregion