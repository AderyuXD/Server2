// Após instalar o pacote config npm install config, criamos uma pasta config no projeto e um arquivo default.json
// require = import e config é a variável que possui os dados do pack que busca na pasta que criamos
//const config = require("config") pode ser substituido por import config from "config";
import config from "config";

// Importa o módulo express, direto da pasta node_modules
//const express = require("express") pode ser substituido por import express from "express";
import express from "express";

// Importa o módulo body-parser, direto da pasta node_modules
//const bodyParser = require('body-parser') pode ser substituido por import bodyParser from "body-parser";
import bodyParser from "body-parser";

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

//const bandRoute = require("./routes/bandas-rock")   
import bandRoute from "./routes/bandas-rock.js";
bandRoute(app, config)

app.listen(port, function(){
    console.log(`Servidor rodando na porta ${port}`)
});