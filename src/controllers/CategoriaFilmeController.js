const express = require('express');
const router = express.Router();

const CategoriaFilme = require('../models/CategoriaFilmeModel');

//#region Rotas
    // Cadastrar (Create)
        router.post('/cadastro_categoria_filme', async (requisicao, resposta) => {
            try{
                if (requisicao.body.id) {
                    // IMPLEMENTAR UPDATE
                    resposta.send(requisicao.body);
                }
                else{
                    var categoria = await CategoriaFilme.create(requisicao.body);
                    resposta.send(categoria);
                }
            }catch (erro){
                return resposta.status(400).send({error: 'Falha ao cadastrar ou atualizar categoria. '+erro});
            }
        });
    // Listar (Read)
        router.get('/listar_categoria_filme', async (requisicao, resposta) => {
            try{
                const categorias = await CategoriaFilme.find();
                return resposta.send({ categorias });
            }catch (erro){
                return resposta.status(400).send({error: 'Falha ao carregar categorias. '+erro});
            }
        });
    // Atualizar (Update)
        router.put('/atualizar_categoria_filme', async (requisicao, resposta) => {
            try{
                
            }catch (erro){
                return resposta.status(400).send({error: 'Falha ao cadastrar ou atualizar categoria. '+erro});
            }
        });
    // Excluir (Delete)
        router.delete('/excluir_categoria_filme', async (requisicao, resposta) => {
            try{
                
            }catch (erro){
                return resposta.status(400).send({error: 'Falha ao cadastrar ou atualizar categoria. '+erro});
            }
        });
//#endregion

//#region Rota Raiz
    module.exports = (servidor) => servidor.use('/api', router);
//#endregion