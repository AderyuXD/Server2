import { Low, JSONFile } from 'lowdb'; 
const adapter = new JSONFile("./banco.json");
const db = new Low(adapter);
db.read();

// Cria um controlador que é como se fosse uma classe, ele possui algumas funções como showList, add e outras   
const controller = {
    //showList é a função que retorna para o client os dados obtidos através do arquivo json
    showList: function(req, res){
        res.status(200).json(db.data.filmes); 
    },
    //add é uma função que corresponde ao método post
    // ela pega os dados (id, name, country e style) vindos do client e adiciona ao arquivo json
    add: function(req, res){
        let id = req.body.id;
        let name = req.body.name;
        db.data.filmes[id] = {id, name}; // adiciona os dados ao arquivo json
        db.write();
        res.status(200).json(db.data.filmes);  // devolve para o client o arquivo json atualizado
    },
    // update é a função que corresponde ao método patch
    // pega os dados enviados pelo client e atualiza o arquivo json
    update: function(req, res){
        let {id, name} = req.body;
        db.data.filmes[id] = {id, name};
        db.write();
        res.status(200).json(db.data.filmes); // devolve um json atualizado
    },
    // remove é a função que corresponde ao método delete
    // remove do arquivo json a banda correspondente ao id informado
    remove: function(req, res){
        let id = req.body.id;
        delete db.data.filmes[id];
        db.write(); 
        res.status(200).json(db.data.filmes); 
    }
};

// Quando importar o arquivo bandas-rock.js, o objeto controller criado acima será retornado
export default controller;