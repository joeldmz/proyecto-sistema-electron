const dbConnection = require("../utils/dbConnection");

exports.getAllPatients = () => { 
    var connection = dbConnection.openConnection();
    var query = "SELECT * FROM spares, phones, trademarks WHERE spares.phones_id_phone = phones.id_phone AND phones.trademark_id_trademark = trademarks.id_trademark";
    var spares = [];
    connection.query(query,(err, allSpares)=>{
        if(err){
            console.log("Error al traer los datos: "+err);
        }else{
           for(let spare of allSpares){
               spares.push(spare);
           }
        }   
    }); 
   return spares; 
}

exports.saveSpare = (spare) => {
    var connection = dbConnection.openConnection();
    var query = "INSERT INTO spares SET ?";
    return new Promise((resolve,reject)=>{
          connection.query(query,spare,(err,resp)=>{
            if(err){
                console.log("Error al guardar: "+err)
            }else{
                console.log(resp);
                 resolve(true); 
            }
        });
    });         
    
}

exports.updateSpare = (id,spare)=>{
    var connection = dbConnection.openConnection();
    var query = "UPDATE spares SET ? WHERE id_spares = "+id;
    return new Promise((resolve,reject)=>{
        connection.query(query,spare,(err,res)=>{
            if(err){
                console.log("Error al Atualizar "+err);
            }else{
                resolve(true);
            }
        });
     
    });
};



exports.deleteSpare = (id) => {
    var connection = dbConnection.openConnection();
    var query = "DELETE FROM spares WHERE id_spares = ?";
    return new Promise((resolve,reject)=>{ 
        connection.query(query, id, (err, resp) => {
            if(err){
                 console.log("Error al eliminar "+ err);
            }else{
                 resolve(true);
            }
        });
    });
    
}


