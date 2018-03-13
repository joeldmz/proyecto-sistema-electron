const mySql = require("mysql");
var connection = null;
let yml = require('js-yaml');
let fs   = require('fs');
let conf = {};
try {
  conf = yml.safeLoad(fs.readFileSync('./api-rest/properties/dbConection.yml', 'utf8'));
  console.log(conf);
} catch (e) {
  console.log(e);
}
createConnection = ()=>{
      connection = mySql.createConnection({
        host: conf.conecction.host,
        user: conf.conecction.user,
        password: conf.conecction.password,
        database: conf.conecction.database
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
