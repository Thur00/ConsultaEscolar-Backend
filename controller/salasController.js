//clienteController.js
const Salas = require('../models/alocacoesModel');
// Controlador para obter todos os clientes
exports.getSalas = (req, res) => {
    Salas.getSalas((err, salas) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(salas);
        }
    });
};