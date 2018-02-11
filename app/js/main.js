


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
      phone_trademark:"",
      phone_model:"",
      type:"",
      simple_price: 0,
      mayor_price:  0,
      public_price: 0,
      alert: false,
      spares: [],
      /*spare:{ phone_model: 'MOTO G4 PLAY',
          type: 'MODULO',
          simple_price: 1200,
          mayor_price: 1100,
          public_price: 0 }*/
    },
    methods:{
      loadAllPatients: function(){
        var patientController = require("../api-rest/controller/patientController");
        this.spares = patientController.getAllPatients();
      },

      saveSpare: function(){
        var patientController = require("../api-rest/controller/patientController");
        var phone = this.phone_trademark +" "+this.phone_model;
        console.log(phone)
        var spare = { phone_model: phone,
          type: this.type,
          simple_price: this.simple_price,
          mayor_price: this.mayor_price,
          public_price: this.public_price };
        //console.log(spare);
          var ok = patientController.saveSpare(spare);
          console.log(ok);
          if(ok){
            this.alert = !this.alert;
            this.timeOut();
            this.spares.push(spare);
          }

      },
      
      timeOut: function(){
        setTimeout(()=>{
          this.alert = !this.alert;
        },5000);
      }
    }
  })
