const express = require('express');
const router = express.Router();

router.get('/cadastro_categoria_filmes', (requisicao, resposta) => {
    resposta.send("Rota de Cadastros Funcionando");
});

module.exports = router;