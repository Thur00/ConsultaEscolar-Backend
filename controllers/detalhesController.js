//clienteController.js
const Detalhes = require('../models/detalhesModel');
// Controlador para obter todos os clientes
exports.getAllDetalhes = (req, res) => {
    Detalhes.getAllDetalhes((err, detalhes) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(detalhes);
        }
    });
};

exports.getDetalhe = (req, res) => {
    const id  = req.params.id;

    Detalhes.getDetalhe(id, (err, detalhes) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(detalhes);
        }
    });
};