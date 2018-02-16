
Vue.component('repair-component', {   
    template: 
    `<div>
           <div class="container" id="tbl" > 
           <h4>Clientes</h4>
           <hr>
           <div class="panel panel-default" id="pnlPatients">
                                <div class="panel-body" id="pnlPatientsBody">
                                    <div class="col-md-6" id="body1">
                                            <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal1"><span class="glyphicon glyphicon-plus mr-3"></span>Agregar</button>
                                    </div>
                                    <div class="col-md-6" id="body2">
                                           <div class="col-md-0" id="filter">
                                                
                                            </div>
                                           <div class="col-md-12" id="search">
                                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Buscar cliente">
                                                <button class="btn btn-success"><span class="glyphicon glyphicon-search" v-on:click="loadAllPhones()"></span></button>
                                           </div>
                                            
                                    </div>
                                   
                                </div>
            </div>
            <div class="panel panel-default" id="pnlClients">
               

                <div>
                    
                    <!--<form class="form-inline">
                        <div class="col-md-1">
                        <label>Cliente:</label>
                        </div>
                        <div class="col-md-11">
                        <input class="form-control input-sm" id="inputsm" type="text">
                        </div>
                        <div class="col-md-1">
                        <label>Domicilio:</label>
                        </div>
                        <div class="col-md-11">
                        <input type="text" v-model="mensaje" class="form-control" id="inputPassword2" placeholder="no hay datos para mostrar" disabled>
                        </div>
                    </form>-->
                    
                    <div class="panel panel-default col-md-6" id="pnlDataPhone">
                            <div class="panel panel-header">
                              <h5>Datos del cliente</h5>
                            </div>
                            <div class="col-md-2" >
                                <div>
                                    <label for="email">Cliente:</label>
                                </div>
                                <div>
                                     <label for="email">Domicilio:</label>
                                </div>
                            </div>
                            <div class="col-md-10">
                                <div>
                                    <input type="email" class="form-control" id="email" placeholder="no hay datos para mostrar" disabled>
                                </div>
                                <div >
                                    <input type="email"   class="form-control" id="email" placeholder="no hay datos para mostrar" disabled>
                                </div>
                            </div>
                            
                            
                            <div id="listPhonesClient">
                                        <label for="email">Celulares registrados:</label>  
                                        <div class="panel panel-default" id="tablePhones">
                                            <table class="table table-hover" >
                                            <tbody>
                                            <tr>
                                                <td>John</td>
                                                <td>Doe</td>
                                                <td><buttom class="btn btn-default"><span class="glyphicon glyphicon-pencil"></buttom></td>
                                            </tr>
                                            <tr>
                                                <td>Mary</td>
                                                <td>Moe</td>
                                                <td><buttom class="btn btn-default"><span class="glyphicon glyphicon-pencil"></buttom></td>
                                            </tr>
                                            <tr>
                                                <td>July</td>
                                                <td>Dooley</td>
                                                <td><buttom class="btn btn-default"><span class="glyphicon glyphicon-pencil"></buttom></td>
                                            </tr>
                                            <tr>
                                                <td>July</td>
                                                <td>Dooley</td>
                                                <td><buttom class="btn btn-default"><span class="glyphicon glyphicon-pencil"></buttom></td>
                                            </tr>
                                            <tr>
                                                <td>July</td>
                                                <td>Dooley</td>
                                                <td><buttom class="btn btn-default"><span class="glyphicon glyphicon-pencil"></buttom></td>
                                            </tr>
                                            <tr>
                                                <td>July</td>
                                                <td>Dooley</td>
                                                <td><buttom class="btn btn-default"><span class="glyphicon glyphicon-pencil"></buttom></td>
                                            </tr>
                                            
                                            </tbody>
                                            </table>
                                        </div>          
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    <div class="panel panel-default col-md-6" id="pnlDataPhone">
                            <div class="panel panel-header">
                                    <h5>Datos del celular</h5>
                            </div>
                            <div id="listPhonesClient">
                                   <label for="comment">Trabajos realizados:</label>
                                   <div class="panel panel-default" id="pnlRepairsPhone">
                                            <table class="table table-hover" >
                                            <tbody>
                                            <tr>
                                                <td>John</td>
                                                <td>Doe</td>
                                                <td><buttom class="btn btn-default"><span class="glyphicon glyphicon-pencil"></buttom></td>
                                            </tr>
                                            <tr>
                                                <td>Mary</td>
                                                <td>Moe</td>
                                                <td><buttom class="btn btn-default"><span class="glyphicon glyphicon-pencil"></buttom></td>
                                            </tr>
                                            <tr>
                                                <td>July</td>
                                                <td>Dooley</td>
                                                <td><buttom class="btn btn-default"><span class="glyphicon glyphicon-pencil"></buttom></td>
                                            </tr>
                                            <tr>
                                                <td>July</td>
                                                <td>Dooley</td>
                                                <td><buttom class="btn btn-default"><span class="glyphicon glyphicon-pencil"></buttom></td>
                                            </tr>
                                            <tr>
                                                <td>July</td>
                                                <td>Dooley</td>
                                                <td><buttom class="btn btn-default"><span class="glyphicon glyphicon-pencil"></buttom></td>
                                            </tr>
                                            <tr>
                                                <td>July</td>
                                                <td>Dooley</td>
                                                <td><buttom class="btn btn-default"><span class="glyphicon glyphicon-pencil"></buttom></td>
                                            </tr>
                                            
                                            </tbody>
                                            </table>
                                        </div>
                            </div>       
                            <div id="statePrice">       
                                <div class="col-md-2">
                                    <div>
                                        <label for="email">Fecha:</label>
                                    </div>
                                </div>
                                <div class="col-md-10">
                                    <div>
                                        <input type="email" class="form-control" id="email" placeholder="no hay datos para mostrar" disabled>
                                    </div>
                                </div>
                            </div>
                            <div id="listPhonesClient">
                                <label for="comment">Observaciones:</label>
                                <textarea class="form-control" rows="2" id="comment"></textarea>
                            </div>
                            
                            <div class="col-md-2" id="statePrice">
                                <div>
                                    <label for="email">Estado:</label>
                                </div>
                                <div>
                                     <label for="email">Precio:</label>
                                </div>
                            </div>
                            <div class="col-md-10" id="statePrice">
                                <div>
                                    <input type="email" class="form-control" id="email" placeholder="no hay datos para mostrar" disabled>
                                </div>
                                <div >
                                    <input type="email"   class="form-control" id="email" placeholder="no hay datos para mostrar" disabled>
                                </div>
                            </div>
                                
                           
                            </div>
                    </div>
                </div>
                   
 

                <!-- Modal -->
                <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Agregar Reparacion</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                            <form>
                                    <div class="form-group">
                                    <label for="recipient-name" class="col-form-label" >Marca:</label>
                                    <select  v-model="phone_trademark"  class="form-control" id="inputFilter" v-on:change="selectedModel">
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
                                            <input type="text" class="form-control" list="idOfDatalist" v-model="phone_model"/>
                                            <datalist id="idOfDatalist">
                                                  <option  v-for="phone in phoneModel">{{phone.phone_model}}</option>
                                            </datalist>
                                            </select>
                                        </div>
                                    <div>
                                   
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary" v-on:click="savePhone">Guardar</button>
                    </div>
                    </div>
                </div>
                </div>
                

      
    <!--div final-->
    </div>`,
    
    data() {
       return { mensaje:"Dominguez joel",
                phone_trademark: "",
                phone_model:"",
                phone_so:"",
                phone_version:"",
                phone_nameverion:"",
                phone_unlock:"",
                phone_imei_repair:"",
                phones:[],
                phoneModel:[]}
    },

    created: function(){
         this.loadAllPhones();
    },
    
    methods:{
        loadAllPhones: function(){
            var phoneController = require("../api-rest/controller/phoneController");
            this.phones = phoneController.loadAllPhones();
        },
       
        savePhone: function(){
            var phoneController = require("../api-rest/controller/phoneController");
            var phone = {
                phone_trademark:this.phone_trademark,
                phone_model:this.phone_model,
                phone_so:this.phone_so,
                phone_version:this.phone_version,
                phone_nameverion:this.phone_nameverion,
                phone_unlock:this.phone_unlock,
                phone_imei_repair:this.phone_imei_repair
            };
            phoneController.savePhone(phone);
        },

        selectedModel: function(){
            this.phone_model="";
            this.phoneModel=[];
            for(let phone of this.phones){
                if(this.phone_trademark == phone.phone_trademark){
                    this.phoneModel.push(phone);
                }
            }
        }

    }
})


