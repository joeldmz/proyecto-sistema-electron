
var app = new Vue({
    el: '#app',
    created: function(){
      
       this.clickNavOption(1);
    },
    data: {
      viewSpare: true,
      viewRepair: true,
      alert: false
    },
    methods:{
      clickNavOption: function(op){
              switch(op){
              case 1: this.viewSpare = true
                      this.viewRepair = false ;
                      break;
              case 2: this.viewRepair = true
                      this.viewSpare = false;  
                      break;      
              }
      }, 
    }
  })
