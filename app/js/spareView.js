Vue.component('spare-component', {
     template: `
     <div id="pnlMainSpares">
         <div v-if="alert" class="alert alert-success alert-dismissible">
               <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
               <strong>OK!</strong> El repuesto se agrego correctamente!.
         </div>
         <div id="tbl" > 
                        <h4>Repuestos</h4>
                        <hr>
                    
        </div>
        <div class="panel panel-default" id="pnlSpare">
                                <div class="panel-body" id="pnlSparesBody">
                                    <div class="col-md-6" id="body1">
                                            <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Agregar</button>
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
                                                    <td><button class="btn btn-primary" id="btn1" v-on:click="modifSpare(spare)" data-toggle="modal" data-target="#exampleModal"><span class="glyphicon glyphicon-edit"></span></button>
                                                    <button class="btn btn-danger" id="btn2" data-toggle="modal" data-target="#deleteModal" v-on:click="deleteSpare(spare)"><span class="glyphicon glyphicon-trash"></span></button></td>
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
                                <h3 class="modal-title" id="exampleModalLabel">Agregar Repuesto</h3>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                    <label for="recipient-name" class="col-form-label" >Marca:</label>
                                    <select class="form-control" id="inputFilter">
                                            <option>SAMSUNG</option>
                                            <option>MOTOROLA</option>
                                            <option>LG</option>
                                            <option>SONY</option>
                                            <option>ALCATEL</option>
                                            <option>HUAWEI</option>
                                            <option>NOKIA</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                            <label for="recipient-name" class="col-form-label">Modelo:</label>
                                            <input type="text" class="form-control" id="recipient-name" placeholder="ej: J7 J700M">
                                        </div>
                                    <div>
                                    <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Tipo:</label>
                                            <select class="form-control" id="inputFilter"> 
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
                                            <input id="email"  type="number" class="form-control" name="email" placeholder="0,00"> 
                                            </div>
                                    </div> 
                                    <div class="form-group">
                                            <label for="recipient-name" class="col-form-label">Precio por mayor:</label>
                                            <div class="input-group">
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-usd"></i></span>
                                            <input id="email" type="number" class="form-control" name="email" placeholder="0,00">
                                            </div>
                                    </div> 
                                    <div class="form-group">
                                                <label for="recipient-name" class="col-form-label">Precio al publico:</label>
                                                <div class="input-group">
                                                <span class="input-group-addon"><i class="glyphicon glyphicon-usd"></i></span>
                                                <input id="email" type="number" class="form-control" name="email" placeholder="0,00">
                                                </div>
                                    </div> 
                                </form>
                                
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#confirmModal">Agregar</button>
                                </div>
                            </div>
                            </div>
                        </div>
    
    
    <!--div final-->                          
    </div>`,
    
    
    created(){
        this.loadAllSpares();
    },
    data(){
        return{
            alert: false,
            spares:[]
        }
    },
    methods:{
        loadAllSpares: function(){
            var spareController = require("../api-rest/controller/spareController");
            this.spares = spareController.getAllPatients();
        },
        
        saveSpare: function(){
            var patientController = require("../api-rest/controller/spareController");
            var spare = { 
              phone_trademark: this.phone_trademark,
              phone_model: this.phone_model,
              type: this.type,
              simple_price: this.simple_price,
              mayor_price: this.mayor_price,
              public_price: this.public_price };
    
            this.alert = patientController.saveSpare(spare);
            //console.log(ok);
            /*if(patientController.saveSpare(spare)){
                console.log("hola "+ ok)
                this.alert = !this.alert;
                this.timeOut();
                this.spares.push(spare);
              }*/
    
          },
          
        timeOut: function(){
            console.log("hola time")
            setTimeout(()=>{
              this.alert = !this.alert;
            },5000);
          },  
    }
   })