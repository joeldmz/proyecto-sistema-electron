Vue.component('spare-component', {
     template: `
     <div id="pnlMainSpares">
         <div v-if="alert" class="alert alert-success alert-dismissible row">
               <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
               <strong v-if="saveMode">OK Guardado!</strong>
               <strong v-if="updateMode">OK Modificado!</strong>
               <strong v-if="deleteMode">OK Borrado!</strong>
         </div>
         <div id="tbl" > 
                        <h4>Repuestos</h4>
                        <hr>
                    
        </div>
        <div class="panel panel-default" id="pnlSpare">
                                <div class="panel-body" id="pnlSparesBody">
                                    <div class="col-md-6" id="body1">
                                            <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" v-on:click="componentSave">Agregar</button>
                                    </div>
                                    <div class="col-md-6" id="body2">
                                           <div class="col-md-6" id="filter">
                                                <span class="glyphicon glyphicon-filter"></span>
                                                <div class="form-group">
                                                        <select class="form-control" id="inputFilter" aria-placeholder="holll">
                                                          <option>Filtrar..</option>
                                                          <option>Marca</option>
                                                          <option>Modelo</option>
                                                          <option>Precio</option>
                                                        </select>
                                                      </div>
                                            </div>
                                           <div class="col-md-6" id="search">
                                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Buscar">
                                                <button class="btn btn-success"><span class="glyphicon glyphicon-search" v-on:click="timeOut()"></span></button>
                                           </div>
                                            
                                    </div>
                                   
                                </div>
                         </div>
                         <div class="panel panel-default" id="pnlTitleSpares" >
                            <table class="table table-condensed">
                                <thead>
                                    <tr>
                                      <th id="t1">Marca</th>
                                      <th id="t2">Modelo</th>
                                      <th id="t2">Repuesto</th>
                                      <th id="t3">Precio Unitario</th>
                                      <th id="t3">Precio Mayor</th>
                                      <th id="t4">Precio Publico</th>
                                      <th>Acciones</th>
                                    </tr>
                                  </thead>
                            </table>
                          </div>
                          <div class="panel panel-default" id="pnlSpares" >
                                <div class="panel-body" id="pnlBody">
                                        <table class="table table-hover" id="tableSpares">
                                               <tbody>
                                                  <tr v-for="spare in spares">
                                                    <td id="t1">{{spare.trademark}}</td>
                                                    <td id="t2">{{spare.phone_model}}</td>
                                                    <td id="t2">{{spare.type}}</td>
                                                    <td id="t3">$ {{spare.simple_price}}</td>
                                                    <td id="t3">$ {{spare.mayor_price}}</td>
                                                    <td id="t4">$ {{spare.public_price}}</td>
                                                    <td><button class="btn btn-primary" id="btn1" v-on:click="modifySpare(spare)" data-toggle="modal" data-target="#exampleModal"><span class="glyphicon glyphicon-edit"></span></button>
                                                    <button class="btn btn-danger" id="btn2" data-toggle="modal" data-target="#deleteModal" v-on:click="componentDelete(spare)"><span class="glyphicon glyphicon-trash"></span></button></td>
                                                  </tr>
                                                </tbody>
                                          </table>
                                </div>
                          </div>
                          <!--modal-->
                          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h3 v-if="saveMode" class="modal-title" id="exampleModalLabel">Agregar Repuesto</h3>
                                <h3 v-if="updateMode" class="modal-title" id="exampleModalLabel">Modificar Repuesto</h3>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                    <label for="recipient-name" class="col-form-label" >Marca:</label>
                                    <select class="form-control" id="inputFilter" v-on:change="selectedPhoneTrademark" v-model="phone_trademark" :disabled="updateMode">
                                            <option v-for="trademark in trademarks">{{trademark.trademark}}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                            <label class="col-form-label">Modelo:</label>
                                            <input type="text" class="form-control"  list="idOfDatalist" v-model="phone_model" :disabled="updateMode">
                                            <datalist id="idOfDatalist">
                                                            <option v-for="phone in phoneModels">{{phone.phone_model}}</option>
                                            </datalist>
                                        </div>
                                    <div>
                                    <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Tipo:</label>
                                            <select class="form-control" id="inputFilter" v-model="type"> 
                                                <option>MODULO</option>
                                                <option>DISPLAY</option>
                                                <option>TOUCH</option>
                                                <option>PIN DE CARGA</option>
                                                <option>FLEX</option>
                                                <option>BATERIA</option>
                                            </select>
                                    </div>
                                    </div>
                                    <div class="form-group">
                                            <label for="recipient-name" class="col-form-label">Precio por unidad:</label>
                                            <div class="input-group">
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-usd"></i></span>
                                            <input id="email"  type="number" class="form-control" name="email" placeholder="0,00" v-model="simple_price"> 
                                            </div>
                                    </div> 
                                    <div class="form-group">
                                            <label for="recipient-name" class="col-form-label">Precio por mayor:</label>
                                            <div class="input-group">
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-usd"></i></span>
                                            <input id="email" type="number" class="form-control" name="email" placeholder="0,00" v-model="mayor_price">
                                            </div>
                                    </div> 
                                    <div class="form-group">
                                                <label for="recipient-name" class="col-form-label">Precio al publico:</label>
                                                <div class="input-group">
                                                <span class="input-group-addon"><i class="glyphicon glyphicon-usd"></i></span>
                                                <input id="email" type="number" class="form-control" name="email" placeholder="0,00" v-model="public_price">
                                                </div>
                                    </div> 
                                </form>
                                
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" id="btnA">Cancelar</button>
                                <button v-if="saveMode" type="button" class="btn btn-success" data-toggle="modal" data-target="#confirmModal" id="btnB">Agregar</button>
                                <button v-if="updateMode" type="button" class="btn btn-success" data-toggle="modal" data-target="#confirmModal" id="btnB">Modificar</button>
                                </div>
                            </div>
                            </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="confirmModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Confirmar</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p v-if="saveMode">Se agregara un nuevo repuesto!</p>
                                <p v-if="updateMode">Se modificara el repuesto!</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" id="btnA" data-dismiss="modal">Cerrar</button>
                                <button v-if="saveMode" type="button" class="btn btn-primary" id="btnB" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal" v-on:click="saveSpare">Agregar</button>
                                <button v-if="updateMode" type="button" class="btn btn-success" id="btnB" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal" v-on:click="updateSpare">Modificar</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <!-- Modal -->
                        <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Confirmar</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Se eliminara el repuesto!
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" id="btnA" data-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-danger" id="btnA" data-dismiss="modal" v-on:click="deleteSpare">Borrar</button>
                            </div>
                            </div>
                        </div>
                        </div>
    
    
    <!--div final-->                          
    </div>`,
    
    
    created(){
        this.loadAllSpares();
        this.loadAllPhones();
    },
    data(){
        return{
            updateMode:false,
            saveMode:false,
            deleteMode:false,
            alert: false,
            id_spare: 0,
            id_phone: 0 ,
            phone_trademark:"",
            phone_model: "",
            type:"",
            simple_price:0,
            mayor_price:0,
            public_price:0,
            spares:[],
            phones:[],
            trademarks:[],
            phoneModels:[]
        }
    },
    methods:{
        loadAllSpares: function(){
            var spareController = require("../api-rest/controller/spareController");
            this.spares = spareController.getAllPatients();
        },

        loadAllPhones: function(){
            var phoneController = require("../api-rest/controller/phoneController");
            this.phones = phoneController.loadAllPhones();
            this.trademarks = phoneController.loadAllTrademarks();
        },
        
        saveSpare: function(){
            this.selectedPhoneModel();
            var spareController = require("../api-rest/controller/spareController");
            var spare = { 
              type: this.type,
              simple_price: this.simple_price,
              mayor_price: this.mayor_price,
              public_price: this.public_price,
              phones_id_phone: this.id_phone };
    
              spareController.saveSpare(spare)
              .then((res)=>{
                  this.alert = res;
                  this.timeOut();
                  this.loadAllSpares();
              });
    
          },

        selectedPhoneTrademark: function(){
            var id = 0;
            this.phone_model = "";
            this.phoneModels = [];
            for(let trademark of this.trademarks){
                if(this.phone_trademark == trademark.trademark){
                     id = trademark.id_trademark;
                }
            }
            this.id_trademark = id;
            for(let phone of this.phones){
                if(phone.trademark_id_trademark == id){
                    this.phoneModels.push(phone);
                }
            }
        
        }, 
       
        selectedPhoneModel: function(){
             for(let phone of this.phones){
                 if(this.phone_model == phone.phone_model){
                      this.id_phone = phone.id_phone;
                 }
             }
        },
        
        updateSpare: function(){
            
            var spareController = require("../api-rest/controller/spareController");
            var spare = {
                type:this.type,
                simple_price:this.simple_price,
                mayor_price:this.mayor_price,
                public_price:this.public_price
            };
            
            spareController.updateSpare(this.id_spare,spare)
            .then((res)=>{
                this.alert = res;
                this.timeOut();
                this.loadAllSpares();
            })

        },
        
        componentSave: function(){
            this.deleteMode = false;
            this.updateMode = false;
            this.saveMode = true;
        },
        
        modifySpare: function(spare){
            this.deleteMode = false;
            this.saveMode = false;
            this.updateMode = true;
            
            this.id_spare = spare.id_spares;
            this.phone_trademark = spare.trademark;
            this.phone_model = spare.phone_model;
            this.type = spare.type;
            this.simple_price = spare.simple_price;
            this.mayor_price = spare.mayor_price;
            this.public_price = spare.public_price;
        },

        componentDelete: function(spare){
            this.deleteMode = true;
            this.updateMode = false;
            this.saveMode = false;
            this.id_spare = spare.id_spares;
        },

        deleteSpare: function(){
            this.deleteMode = true;
            this.updateMode = false;
            this.saveMode = false;

            var spareController = require("../api-rest/controller/spareController");
            spareController.deleteSpare(this.id_spare)
            .then((res)=>{
                this.alert = res;
                this.timeOut();
                this.loadAllSpares();
            });
        },
        
        timeOut: function(){ 
            setTimeout(()=>{
              this.alert = !this.alert;
            },5000);
          },  
    }
   })