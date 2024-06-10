// server.js

// Importa o módulo express para criar o servidor
const express = require("express");

// Importa o módulo cors para permitir requisições de diferentes origens
const cors = require("cors");

// Importa as rotas de produtos definidas em outro arquivo
const productRoutes = require("./routes/ConsultaRouter");

// Cria uma instância do servidor express
const app = express();

// Define a porta em que o servidor vai rodar, usando a variável de ambiente PORT ou a porta 3000
const PORT = process.env.PORT || 3000;

// Usa o middleware cors para permitir requisições de diferentes origens
app.use(cors());

// Usa o middleware express.json para analisar o corpo das requisições como JSON
app.use(express.json());

// Define que todas as rotas que começam com "/api" serão tratadas pelas rotas de produtos
app.use("/api", productRoutes);

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo deu errado!' });
});

// Inicia o servidor na porta definida e exibe uma mensagem no console
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});