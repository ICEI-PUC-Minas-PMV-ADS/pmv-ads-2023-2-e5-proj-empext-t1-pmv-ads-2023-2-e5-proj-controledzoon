const express = require('express')
const session = require('express-session')

const port = 3000
var path = require('path')
const app = express()
const bodyParser = require('body-parser')

var login = ''
var password = ''

app.use(session({ secret: 'Login' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))

app.post('/', (req, res) => {
  if (req.body.password == password && req.body.login == login) {
    //logado com sucesso!
    req.session.login = login
    res.render('registro', { login: login })
  } else {
    res.render('login')
  }
})

app.get('/', (req, res) => {
  if (req.session.login) {
    res.render('logado')
    console.log('O meu usuário é: + req.session.login')
  } else {
    res.render('index')
  }
})

app.listen(port, () => {
  console.log('servidor rodando')
})
