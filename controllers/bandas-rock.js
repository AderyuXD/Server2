import { Low, JSONFile } from 'lowdb'; 
const adapter = new JSONFile("./banco.json");
const db = new Low(adapter);
db.read();

import bandasRockDB from "../data/bandas-rock.js";

// Cria um controlador que é como se fosse uma classe, ele possui algumas funções como showList, add e outras   
const controller = {
    //showList é a função que retorna para o client os dados obtidos através do arquivo json
    showList: function(req, res){
        res.status(200).json(db.data.bandasrock); 
    },
    //add é uma função que corresponde ao método post
    // ela pega os dados (id, name, country e style) vindos do client e adiciona ao arquivo json
    add: function(req, res){
        let id = req.body.id;
        let name = req.body.name;
        let country = req.body.country;
        let style = req.body.style;
        db.data.bandasrock[id] = { id, name, country, style }; // adiciona os dados ao arquivo json
        db.write();
        res.status(200).json(db.data.bandasrock);  // devolve para o client o arquivo json atualizado
    },
    // update é a função que corresponde ao método patch
    // pega os dados enviados pelo client e atualiza o arquivo json
    update: function(req, res){
        let {id, name, country, style} = req.body;
        db.data.bandasrock[id] = {id, name, country, style};
        db.write();
        res.status(200).json(db.data.bandasrock); // devolve um json atualizado
    },
    // remove é a função que corresponde ao método delete
    // remove do arquivo json a banda correspondente ao id informado
    remove: function(req, res){
        let id = req.body.id;
        delete db.data.bandasrock[id];
        db.write(); 
        res.status(200).json(db.data.bandasrock); 
    }
};

// Quando importar o arquivo bandas-rock.js, o objeto controller criado acima será retornado
export default controller;