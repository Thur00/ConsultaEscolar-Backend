//clienteController.js
const Alocacao = require('../models/alocacoesModel');
// Controlador para obter todos os clientes
exports.getAlocacoes = (req, res) => {
    Alocacao.getAlocacoes((err, alocacoes) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(alocacoes);
        }
    });
};