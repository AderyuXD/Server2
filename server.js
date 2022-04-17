// Após instalar o pacote config npm install config, criamos uma pasta config no projeto e um arquivo default.json
// require = import e config é a variável que possui os dados do pack que busca na pasta que criamos
const config = require("config")

// Importa o módulo express, direto da pasta node_modules
const express = require("express")

// Importa o módulo body-parser, direto da pasta node_modules
const bodyParser = require('body-parser')

// Printa na tela uma mensagem sobre o servidor (pra afirmar que está funcionando)
console.log('Abrindo super hiper servidor!!!');

// Busca no arquivo default.json o valor do objeto server, atributo port e atribui à variavel port
let port = config.get("server.port");

// Cria o servidor atribuindo ele à variável app, express() é a classe do express que utiliza os métodos do 
// package express
const app = express();

// Professor não explicou uso disso
app.use(express.json());
app.use(express.urlencoded({extended: true})); // nem isso

const bandRoute = require("./routes/bandas-rock")   
bandRoute(app, config)

app.listen(port, function(){
    console.log(`Servidor rodando na porta ${port}`)
});