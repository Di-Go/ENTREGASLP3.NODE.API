const express = require('express');
const router = express.Router();

const CategoriaFilme = require('../models/CategoriaFilmeModel');

//#region Rotas
    // Cadastro
        router.post('/cadastro_categoria_filme', async (requisicao, resposta) => {
            try{
                var categoria = await CategoriaFilme.create(requisicao.body);
            }catch (erro){
                return resposta.status(400).send({error: 'Falha ao registrar'});
            }
            resposta.send(categoria);
        });
//#endregion

//#region Rota Raiz
    module.exports = (servidor) => servidor.use('/api', router);
//#endregion