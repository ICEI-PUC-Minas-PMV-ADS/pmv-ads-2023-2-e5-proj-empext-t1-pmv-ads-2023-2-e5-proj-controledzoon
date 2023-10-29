import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { Sequelize, DataTypes } from 'sequelize'
import createUserModel from './user.js' // Importando o módulo de usuário usando a sintaxe ES6

const index = express()
const port = 3000

index.use(bodyParser.urlencoded({ extended: true }))
index.use(bodyParser.json())
index.use(
  cors({
    origin: 'http://127.0.0.1:5500', // Atualize esta URL com a URL da sua página de login
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true // Isso permite que os cookies sejam enviados na solicitação (se necessário)
  })
)

// Inicialize a conexão com o banco de dados
const sequelize = new Sequelize('usuario', 'root', '141087', {
  host: 'localhost',
  dialect: 'mysql'
})

// Defina o modelo de usuário
const User = createUserModel(sequelize, DataTypes) // Use a função exportada 'createUserModel' para criar o modelo.

// Sincronize o modelo com o banco de dados (sem forçar)
;(async () => {
  try {
    await sequelize.sync()
    console.log(
      'Conexão com o banco de dados estabelecida e modelos sincronizados'
    )
  } catch (error) {
    console.error('Erro na conexão com o banco de dados:', error)
  }
})()

// Rota para cadastrar um novo usuário
index.post('/cadastrar', async (req, res) => {
  try {
    const { nome, sobrenome, email, senha, confirmarSenha } = req.body

    // Verificação se todos os campos estão preenchidos
    if (!nome || !sobrenome || !email || !senha || !confirmarSenha) {
      return res
        .status(400)
        .json({ error: 'Por favor, preencha todos os campos.' })
    }

    // Verificação se senha e confirmarSenha coincidem
    if (senha !== confirmarSenha) {
      return res.status(400).json({ error: 'As senhas não coincidem.' })
    }

    // Criação do usuário no banco de dados
    const newUser = await User.create({
      nome,
      sobrenome,
      email,
      senha,
      confirmarSenha
    })

    res.status(201).json(newUser)
  } catch (error) {
    console.error('Erro ao cadastrar o usuário:', error)
    res.status(500).json({ error: 'Erro ao cadastrar o usuário' })
  }
})

// Rota para verificar o login//

//rota para criar o registro//

index.post( '/registro', async (req, res) => {
  try {
    const { nome_tutor, nome_animal, endereço, CPF, telefone, teste_rapido, teste_sorologico } = req.body

    // Verificação se todos os campos estão preenchidos
    if (!nome_tutor || !nome_animal || !endereço || !CPF || !telefone || !teste_rapido || !teste_sorologico) {
      return res
        .status(400)
        .json({ error: 'Por favor, preencha todos os campos.' })
    }
// banco de dados do registro
    const newUser = await User.create({
      nome_tutor,
      nome_animal,
      endereço,
      telefone,
      CPF,
      teste_rapido,
      teste_sorologico 

    })

    res.status(201).json(newUser)
  } catch (error) {
    console.error('Erro ao cadastrar o usuário:', error)
    res.status(500).json({ error: 'Erro ao cadastrar o usuário' })
  }
})

index.listen(port, () => {
  console.log(`Servidor Node.js iniciado na porta ${port}`)
})


