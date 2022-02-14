//carregando as configuracoes do servidor
const servidor = require('./config/servidor')
//carregar o valor de app 
var app = servidor.app
//carregar o valor de porta
var porta = servidor.porta

//carregar a rota index.js
var index = require('./routes/index')(app)

//igar o servidor
app.listen(porta,()=>{
    console.log("servidor em http://localhost"+porta)
})