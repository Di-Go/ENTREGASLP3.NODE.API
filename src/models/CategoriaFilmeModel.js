const mongoose = require('../database/DBFILMES');
const Esquema = mongoose.Schema;

const CategoriaFilmeEsquema = new Esquema({
    descricao: {
        type: String,
        required: true,
    }
});

const CategoriaFilme = mongoose.model('CategoriaFilme', CategoriaFilmeEsquema);

module.exports = CategoriaFilme;