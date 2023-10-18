import {createServer} from 'node:http'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const usuarios = [];

app.post('/cadastrar', (req, res) => {
    const { nome, sobrenome, email, senha, data } = req.body;
    usuarios.push({ nome, sobrenome, email, senha, data });
    res.status(200).send('Usuário cadastrado com sucesso.');
});

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
