const express = require('express');
const router = express.Router();

const CategoriaFilme = require('../models/CategoriaFilmeModel');

//#region Rotas
    // Cadastrar (Create)
        router.post('/cadastro_categoria_filme', async (requisicao, resposta) => {
            try{
                if (requisicao.body.id) {
                    const {_id, descricao } = requisicao.body;
                    const categoria = await CategoriaFilme.findOneAndUpdate(_id, 
                    {
                        descricao
                    }, 
                    {
                        new: true,
                    });
                    resposta.send(categoria);
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
        router.get('/listar_categoria_filme/:id', async (requisicao, resposta) => {
            try{
                const categoria = await CategoriaFilme.findById(requisicao.params.id);
                return resposta.send(categoria);
            }catch (erro){
                return resposta.status(400).send({error: 'Falha ao carregar categorias. '+erro});
            }
        });
    // Atualizar (Update)
        router.post('/atualizar_categoria_filme', async (requisicao, resposta) => {
            try{
                if (requisicao.body.id) {
                    const {_id, descricao } = requisicao.body;
                    const categoria = await CategoriaFilme.findOneAndUpdate(_id, 
                    { 
                        descricao 
                    }, 
                    {
                        new: true
                    });
                    resposta.send(categoria);
                }else{
                    throw new Error('Update');
                }
            }catch (erro){
                return resposta.status(400).send({error: 'Falha ao cadastrar ou atualizar categoria. '+erro});
            }
        });
    // Excluir (Delete)
        router.post('/excluir_categoria_filme', async (requisicao, resposta) => {
            try{
                if (requisicao.body.id) {
                    const {_id, descricao } = requisicao.body;
                    await CategoriaFilme.deleteOne(_id)
                    resposta.send('Deletado Com Sucesso');
                }else{
                    throw new Error('Delete');
                }
            }catch (erro){
                return resposta.status(400).send({error: 'Falha ao deletar categoria. '+erro});
            }
        });
        router.delete('/excluir_categoria_filme/:id', async (requisicao, resposta) => {
            try{
                if (requisicao.params.id) {
                    await CategoriaFilme.deleteOne(requisicao.params.id)
                    resposta.send({ sucesso: true });
                }else{
                    throw new Error('Delete');
                }
            }catch (erro){
                return resposta.status(400).send({error: 'Falha ao deletar categoria. '+erro});
            }
        });
//#endregion

//#region Rota Raiz
    module.exports = (servidor) => servidor.use('/api', router);
//#endregion