//clienteRoutes.js
const express = require('express');
const router = express.Router();
const alocacoesController = require('../controllers/alocacoesController');
const detalhesController = require('../controllers/detalhesController');
const professoresController = require('../controllers/professoresController');
const salasController = require('../controllers/salasController');
// lembrando que a rota raiz tem clientes, definido no app.js
// Rota para obter todos os clientes
router.get('/alocacoes', alocacoesController.getAlocacoes);

// Rota para obter um único cliente pelo ID
router.get('/detalhes', detalhesController.getAllDetalhes);

// Rota para obter um único cliente pelo ID
router.get('/detalhes/:id', detalhesController.getDetalhe);

// Rota para criar um novo cliente
router.get('/professores', professoresController.getProfessores);

// Rota para atualizar um cliente existente
router.get('/salas', salasController.getSalas);

module.exports = router;