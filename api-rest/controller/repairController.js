const dbConnection = require("../utils/dbConnection");

exports.saveRepair = (repair)=>{
    var connection = dbConnection.openConnection();
    var query = "INSERT INTO repairs SET ?";
    var value = { 
        date:repair.repair_date,
        description: repair.repair_description,
        observations: repair.repair_observations ,
        price: repair.repair_price,
        state: repair.repair_state,
        part_pay: repair.repair_part_price,
        balance: repair.repair_balance,
        clientPhone_id_client_phone: repair.repair_id_phone,
        };
    return new Promise((resolve,reject)=>{
        connection.query(query,value,(err,res)=>{
            if(!err){
                resolve(true);
            }else{
                console.log("Error al guardar: "+err);
            }  
        })
        connection.end();
    });
 
}


exports.getAllRepairs = ()=>{
    var connection = dbConnection.openConnection();
    var query = "SELECT * FROM repairs";
    var repairs = [];
    connection.query(query,(err,listRepairs)=>{
         if(!err){
                for(let repair of listRepairs){
                    repairs.push(repair);
                }
         }else{
             console.log("Error al traer los datos: "+err);
         }

    })
    connection.end();
    return repairs;
}