const remote = require('electron').remote;
const main = remote.require('./index.js');

document.getElementById("btnlogin").addEventListener("click",() => {
    var mysql = require("mysql");
    var connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "123456789",
      database: "sistemahemoterapiabd"
    });
    
    
    connection.connect((err)=>{
      if(err){
        console.log("los sentimon a habido un err :(" + err);
      }else{
        console.log("conexion aceptada");
    
      }
    });
    
    let query = "SELECT * FROM users";
    
    connection.query(query,(err, rows, fields)=>{
      if(err){
        console.log("Lo sentimos a ocurrido un error :(");
      }else{
        let row = rows;
        let i;
        let user = document.getElementById("user").value;
        let pass = document.getElementById("password").value;
    
    
        function checkUser(){
           var flag = false;
           for(i=0;i<rows.length;i++){
              if(rows[i].user_username == user && rows[i].user_password == pass){
                  flag = true;
              }
           }
    
           return flag;
        }
    
        if(checkUser()){
           main.openWindows();
           main.closeWindows();
        }else{
          alert("fail :(");
        }
    
    
      }
    });
    
    connection.end(()=>{
        console.log("conexion cerrada");
    });
    
    });
    