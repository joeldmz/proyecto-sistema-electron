const dbConnection = require("../utils/dbConnection");

exports.getAllPatients = () => { 
    var connection = dbConnection.createConnection();
    var query = "SELECT * FROM spares";
    var spares = [];
    connection.query(query,(err, allSpares)=>{
        if(err){
            console.log("errar al traer los datos");
        }else{
           for(let spare of allSpares){
               spares.push(spare);
           }
        }   
    }); 
   return spares; 
}

exports.saveSpare = (spare) => {
    console.log(spare);
    var connection = dbConnection.createConnection();
    var query = "INSERT INTO spares SET ?";
    var value = { phone_trademark:spare.phone_trademark,
                  phone_model:spare.phone_model,
                  type: spare.type,
                  simple_price:spare.simple_price,
                  mayor_price:spare.mayor_price,
                  public_price:spare.public_price };
    connection.query(query,value,(err,resp) => {
            if(err){
                console.log(err)
            }else{
                  
            }

    });
    
    return true;
}

exports.deleteSpare = (id) => {
    console.log(id);
    var connection = dbConnection.createConnection();
    var query = "DELETE FROM spares WHERE id_spares = ?";
    connection.query(query, id, (err, resp) => {
        if(err)
        console.log(err);
    });
}


