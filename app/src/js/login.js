const remote = require('electron').remote;
const main = remote.require('./index.js');

document.getElementById("btnlogin").addEventListener("click",() => {
    var mysql = require("mysql");
    let query = "SELECT * FROM users";
    var connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "sistemacelulares"
    });


    connection.connect((err)=>{
      if(err){
        alert("Error al conectar con la base de datos! contactese con el desarrollador");
      }
    });

    connection.query(query,(err,rows,fields)=>{
      if(err){
        console.log("Lo sentimos a ocurrido un error :(");
      }else{
        let row = rows;
        let i;
        let user = document.getElementById("user").value;
        let pass = document.getElementById("password").value;
        var userLog = null;

        function checkUser(){
           var flag = false;
           for(i=0;i<rows.length;i++){
              if(rows[i].user == user && rows[i].password == pass){
                  flag = true;
                  userLog = rows[i];
              }
           }
           return flag;
        }

        if(checkUser()){
           main.openWindows(userLog);
           main.closeWindows();
        }else{
          alert("No registrado");
        }


      }
    });

    connection.end(() => {
        console.log("conexion cerrada");
    });

    });
