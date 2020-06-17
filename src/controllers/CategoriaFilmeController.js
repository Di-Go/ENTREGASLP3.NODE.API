const express = require('express');
const router = express.Router();

const CategoriaFilme = require('../models/CategoriaFilmeModel');

//#region Rotas
    // Cadastro
        router.post('/cadastro_categoria_filme', async (requisicao, resposta) => {
            try{
                if (requisicao.body.id) {
                    // IMPLEMENTAR UPDATE
                    console.log(requisicao.body);
                    resposta.send(requisicao.body);
                }
                else{
                    console.log(requisicao.body);
                    var categoria = await CategoriaFilme.create(requisicao.body);
                    resposta.send(categoria);
                }
            }catch (erro){
                return resposta.status(400).send({error: 'Falha ao cadastrar ou atualizar categoria. '+erro});
            }
        });
//#endregion

//#region Rota Raiz
    module.exports = (servidor) => servidor.use('/api', router);
//#endregion