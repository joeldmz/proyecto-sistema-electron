const dbConnection = require("../utils/dbConnection");

exports.saveClient = (client) =>{
    var connection = dbConnection.createConnection();
    var query = "INSERT INTO clients SET ?";
    var value = { name:client.name,
        address:client.address };
    
    return new Promise((resolve,reject)=>{
        connection.query(query,value,(err,res)=>{
            if(!err){
                resolve(res.insertId);
            }
        })
    });
    
}


exports.getAllClients = ()=>{
    var connection = dbConnection.createConnection();
    var query = "SELECT * FROM clients";
    var clients = [];
    connection.query(query,(err, allClients)=>{
        if(err){
            console.log(err);
        }else{
            for(let client of allClients){
                clients.push(client);
            }
        }
    })

    return clients;
}