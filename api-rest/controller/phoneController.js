const dbConnection = require("../utils/dbConnection");

exports.loadAllPhones = ()=>{
    var connection = dbConnection.createConnection();
    var query = "SELECT * FROM phones";
    var phones = [];
    connection.query(query,(err, allPhones)=>{
        if(err){
            console.log(err);
        }else{
            for(let phone of allPhones){
                phones.push(phone);
            }
        }
    })

    return phones;
}

exports.savePhone = (phone)=>{
    var connection = dbConnection.createConnection();
    var query = "INSERT INTO phones SET ?";
    var value = { phone_trademark:phone.phone_trademark,
        phone_model:phone.phone_model,
        phone_so: phone.phone_so,
        phone_version:phone.phone_version,
        phone_nameversion:phone.phone_nameversion,
        phone_unlock:phone.phone_unlock,
        phone_imei_repair:phone.phone_imei_repair };
    
    connection.query(query,value,(err,res)=>{
            if(err){
                console.log(err);
            }else{
                console.log("se agrego");
            }

    })
}