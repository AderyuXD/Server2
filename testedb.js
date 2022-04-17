import { Low, JSONFile } from 'lowdb'; 

const adapter = new JSONFile("banco.json");
const db = new Low(adapter);

db.read().then(function(){
    console.log("OK");    

    db.data.bandasrock.BAN05 = {
        id: 'BAN05',
        name: 'Outra Banda',
        country: 'Brazil',
        style: 'Samba'
    };
    db.write();
    console.log("db.data", db.data);

}).catch(function(e){
    console.log(e);
});