const dbConnection = require("../utils/dbConnection");

exports.saveRepair = (repair,callback)=>{
    var connection = dbConnection.openConnection();
    var query = "INSERT INTO repairs SET ?";
    var value = { 
        date:repair.repair_date,
        description: repair.repair_description,
        observations: repair.repair_observations ,
        price: repair.repair_price,
        state: repair.repair_state,
        part_pay: repair.repair_price_part,
        balance: repair.repair_balance,
        clientPhone_id_client_phone: repair.repair_id_phone,
        };
    
        connection.query(query,value,(err,res)=>{
            var flag = false;
            if(!err){
                flag = true;
            }else{
                console.log(err);
            }
          callback(flag);  
        })

        connection.end();
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
             console.log("error: "+err);
         }

    })
    connection.end();
    return repairs;
}