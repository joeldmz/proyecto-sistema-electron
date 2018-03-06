const mySql = require("mysql");
var connection = null;

createConnection = ()=>{
      connection = mySql.createConnection({
        host: "localhost",
        user: "root",
        password: "123456789",
        database: "sistemacelulares"
      });
}

exports.openConnection = () =>{
      createConnection();
      connection.connect((err)=>{
        if(err){
          console.log("los sentimos a ocurrido un error: " + err);
        }else{
          console.log("conexion aceptada");
        }
      });
      return connection;
}


