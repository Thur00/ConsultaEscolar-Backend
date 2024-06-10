//clienteController.js
const Professores = require('../models/professorerModel');
// Controlador para obter todos os clientes
exports.getProfessores = (req, res) => {
    Professores.getProfessores((err, professores) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(detalhes);
        }
    });
};