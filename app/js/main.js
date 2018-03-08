
var app = new Vue({
    el: '#app',
    created: function(){
        this.loadAll();
    },
    data: {
      userLog:"",
      viewSpare: false,
      viewRepair: false,
      alert: false,
      gifOctopus: false,
      gifBull: false
    },
    methods:{
      loadAll: function(){
        this.getUserLog();
        this.timeOut();
      },
      
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

      getUserLog: function(){
        return new Promise ((resolve,reject)=>{
            require('electron').ipcRenderer.on('ping', (event, user) => {
              this.userLog = user.name;
              resolve();
            })  
        })
                 
      },
      
      getRandomNumber: function(){
        var num = Math.floor(Math.random() * (3 - 1)) + 1;
        console.log(num);
        switch(num){
          case 1 : this.gifOctopus = true;
                  break;
          case 2 : this.gifBull = true;
                  break;        
        }
      },
      timeOut: function(){
          this.getRandomNumber(); 
          setTimeout(()=>{
            this.gifOctopus = false;
            this.gifBull = false;
            this.clickNavOption(1);
          },5000);
          
      }, 
    }
  })
