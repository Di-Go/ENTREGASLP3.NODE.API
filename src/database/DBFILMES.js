const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/DBFILMES').then(() => {
    console.log('Servidor conectado ao Banco de Dados.');
}).catch((err) => {
    console.error(`Falha ao se conectar ao Banco de Dados.\n Mensagem de Erro:\n ${err}`);
});

module.exports = mongoose;