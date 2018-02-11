
/*document.getElementById("btnExpand").onclick = function(){
    document.getElementById("nav").classList.toggle("desaparecer")
}*/

/*document.getElementById("btnExpand").onclick = function(){
 
  patients = patientController.getAllPatients();  
  //patients = patientController.getAllPatinets();
  console.log(patients);

}*/


var app = new Vue({
    el: '#app',
    data: {
      spares: [],
      spare:{ phone_model: 'MOTO G4 PLAY',
          type: 'MODULO',
          simple_price: 1200,
          mayor_price: 1100,
          public_price: 0 }
    },
    methods:{
      loadAllPatients: function(){
        var patientController = require("../api-rest/controller/patientController");
        this.spares = patientController.getAllPatients();
        console.log();
      },

      saveSpare: function(){
        var patientController = require("../api-rest/controller/patientController");
        patientController.saveSpare(this.spare);
      }
    }
  })
