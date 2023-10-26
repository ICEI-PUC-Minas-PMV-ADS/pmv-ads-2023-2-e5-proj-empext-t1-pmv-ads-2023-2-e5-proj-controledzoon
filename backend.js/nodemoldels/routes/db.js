/*import mysql from 'mysql'

const express = require('express')
const mysql = require('mysql')

const index = express();
const port = 3000;
index.use(express.json());

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '141087',
  database: 'leishsoftware'
})

db.connect(err => {
  if (err) {
    console.error('Erro na conexão com o banco de dados: ' + err)
  } else {
    console.log('Conexão com o banco de dados estabelecida')
  }
})

index.post('/cadastrar', (req, res) => {
  const { nome, email, senha, confirmar_senha } = req.body
  /*
  const inserirQuery =
    'INSERT INTO usuário (nome, email, senha, confirmar_senha)VALUES(gabriel, gabrieloliveira1@hotmail.com, 123456, 123456)'*/
/*if(!nome || !email || !senha || !confirmar_senha){
      return res.status(400).json({ message: 'Campos obrigatórios não preenchidos' });
    }
    res.status(201).json({ message: 'Cadastro realizado com sucesso' });
});

usuário.query(
  inserirQuery,
  [nome, email, senha, confirmar_senha],
  err => {
    if (err) {
      console.error('Erro ao inserir dados no banco de dados: ' + err)
      res.status(500).send('Erro ao inserir dados')
    } else {
      console.log('Dados inseridos com sucesso')
      res.status(200).send('Dados inseridos com sucesso')
    }
  }
)

index.listen(port, () => {
  console.log(`Servidor Node.js rodando na porta ${port}`)
})*/
