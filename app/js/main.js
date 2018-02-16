



var app = new Vue({
    el: '#app',
    created: function(){
       this.loadAllPatients();
       this.clickNavOption(1);
    },
    data: {
      phone_trademark:"",
      phone_model:"",
      type:"",
      simple_price: 0,
      mayor_price:  0,
      public_price: 0,
      viewSpare: false,
      viewRepair: false,
      alert: false,
      delSpare:{},
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

      clickNavOption: function(op){
            console.log(op)
            switch(op){
              case 1: this.viewSpare = true
                      this.viewRepair = false ;
                      break;
              case 2: this.viewRepair = true
                      this.viewSpare = false;  
                      break;      
              }
              
      },

      saveSpare: function(){
        var patientController = require("../api-rest/controller/patientController");
        //var phone = this.phone_trademark +" "+this.phone_model;
        var spare = { 
          phone_trademark: this.phone_trademark,
          phone_model: this.phone_model,
          type: this.type,
          simple_price: this.simple_price,
          mayor_price: this.mayor_price,
          public_price: this.public_price };

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
      },

      deleteSpare: function(spare){
          this.delSpare = spare;
          console.log(this.delSpare);
      },

      confirmAction: function(){
        var patientController = require("../api-rest/controller/patientController");
        patientController.deleteSpare(this.delSpare.id_spares);
        this.spares.splice(this.spares.indexOf(this.delSpare),1);
      },

      modifSpare: function(spare){
           this.phone_trademark = spare.phone_trademark;
           this.phone_model = spare.phone_model;
           this.type = spare.type;
           this.simple_price = spare.simple_price;
           this.mayor_price = spare.mayor_price;
           this.public_price = spare.public_price;
      }
    }
  })
