const mySql = require("mysql");


exports.createConnection = () =>{
    var connection = mySql.createConnection({
        host: "localhost",
        user: "root",
        password: "123456789",
        database: "sistemacelulares"
      });
     
      connection.connect((err)=>{
        if(err){
          console.log("los sentimos a habido un error :(" + err);
        }else{
          console.log("conexion aceptada");
      
        }
      });

      return connection;
}
    
//exports.createConnection;