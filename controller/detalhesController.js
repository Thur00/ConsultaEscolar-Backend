//clienteController.js
const Detalhes = require('../models/detalhesModel');
// Controlador para obter todos os clientes
exports.getDetalhes = (req, res) => {
    Detalhes.getDetalhes((err, detalhes) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(detalhes);
        }
    });
};