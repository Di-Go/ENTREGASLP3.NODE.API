const mongoose = require('mongoose');

//#region Configuração do Banco de Dados
    const mongodbEnderecoLocal = 'mongodb://localhost/DBFILMES';
    const mongodbConfiguracao = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
//#endregion

//#region Conexão com Banco de Dados
    mongoose.Promise = global.Promise;
    mongoose.connect(mongodbEnderecoLocal, mongodbConfiguracao)
        .then(() => {
            console.log('Servidor conectado ao Banco de Dados.');
        }).catch((err) => {
            console.error(`Falha ao se conectar ao Banco de Dados.\n Mensagem de Erro:\n ${err}`);
        });
//#endregion

module.exports = mongoose;