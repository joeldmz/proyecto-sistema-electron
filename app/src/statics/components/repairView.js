
Vue.component('repair-component', {
  template:
    `<div>
            <div>
                <div v-if="addRepair" class="alert alert-success alert-dismissible" id="info">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong v-if="btnSaveClient">Cliente agregado!</strong>
                    <strong v-if="btnSavePhone">Celular agregado!</strong>
                    <strong v-if="btnSaveRepair">Reparacion agregada!</strong>
                </div>
            </div>

            <div>
                <div v-if="alertInfo" class="alert alert-success alert-dismissible" id="preventInfo">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Debe elegir un cliente!</strong>
                </div>
            </div>

           <div class="container" id="tbl" >
           <h4>Clientes</h4>
           <hr>
           <div class="panel panel-default" id="pnlSpare">
                                <div class="panel-body" id="pnlSparesBody">
                                    <div class="col-md-6" id="body1">
                                            <button class="btn btn-success" v-on:mouseover="saveClientAndPhone" v-on:click="saveClientAndPhone" data-toggle="modal" data-target="#saveRepairModal">Nuevo</button>
                                    </div>
                                    <div class="col-md-6" id="body2">
                                           <div class="col-md-0" id="filter">

                                            </div>
                                           <div class="col-md-12" id="search">
                                                <input type="text" class="form-control" list="searchClient" id="exampleInputEmail1" placeholder="Buscar cliente" v-model="selectedNameClient" v-on:change="resetAll(1)">
                                                <datalist id="searchClient">
                                                            <option v-for="client in clients">{{client.name}}</option>
                                                </datalist>
                                                <button class="btn btn-success" v-on:click="selectedClient" ><span class="glyphicon glyphicon-search"></span></button>
                                           </div>

                                    </div>

                                </div>
            </div>
            <div class="panel panel-default" id="pnlClients">


                <div>

                    <div class="panel panel-default col-md-6" id="pnlDataPhone">
                            <div class="panel panel-header">
                              <h5>Datos del cliente</h5>
                            </div>
                            <div class="col-md-2" >
                                <div>
                                    <label>Cliente:</label>
                                </div>
                                <div>
                                     <label>Domicilio:</label>
                                </div>
                            </div>
                            <div class="col-md-10">
                                <div>
                                    <input v-model="inputClientName" type="text" class="form-control"  placeholder="no hay datos para mostrar">
                                </div>
                                <div >
                                    <input v-model="inputClientAddress" type="text" class="form-control"  placeholder="no hay datos para mostrar">
                                </div>
                            </div>


                            <div id="listPhonesClient">
                                        <label for="email">Celulares registrados:</label>
                                        <div class="panel panel-default" id="tablePhones">
                                            <table class="table table-condensed" >
                                            <tbody>
                                            <tr v-for="phone in phonesOfClient">
                                                <td>{{phone.trademark}}</td>
                                                <td>{{phone.phone_model}}</td>
                                                <td>
                                                    <buttom class="btn btn-default"><span class="glyphicon glyphicon-pencil"></buttom>
                                                    <buttom class="btn btn-default" v-on:mouseover="phoneAddRepair" v-on:click="phoneAddRepair(phone)" data-toggle="modal" data-target="#saveRepairModal"><span class="glyphicon glyphicon-plus"></buttom>
                                                    <buttom class="btn btn-default" v-on:mouseover="resetAll(2)" v-on:click="selectedPhone(phone)"><span class="glyphicon glyphicon-share"></buttom>
                                                </td>

                                            </tr>
                                            </tbody>
                                            </table>
                                        </div>
                                        <button class="btn btn-success" v-on:mouseover="savePhoneAndRepair" v-on:click="savePhoneAndRepair" data-toggle="modal" data-target="#saveRepairModal">Agregar celular</button>
                            </div>
                        </div>
                    </div>



                    <div class="panel panel-default col-md-6 row" id="pnlDataPhone">
                            <div class="panel panel-header" id="phoneHeader">
                                    <h5>Datos del celular</h5>
                            </div>
                            <div id="listRepairsClient">
                                 <div>
                                    <label>Trabajos realizados:</label>
                                        <div class="panel panel-default" id="pnlRepairsPhone">
                                                    <table class="table table-hover" >
                                                    <tbody>
                                                    <tr v-for="repair in repairsOfPhone">
                                                        <td id="tdRepair">{{repair.description}}</td>
                                                        <td id="tdButtons">
                                                        <buttom class="btn btn-default"><span class="glyphicon glyphicon-pencil"></buttom>
                                                        <buttom class="btn btn-default" v-on:click="selectedRepair(repair)"><span class="glyphicon glyphicon-share"></buttom>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                    </table>
                                        </div>
                                    <hr>
                                    <form class="form-inline">
                                                        <div class="form-group">
                                                            <label>Fecha:</label>
                                                            <input v-model="inputPhoneDate" type="date" class="form-control" id="inputDisplayDate">
                                                        </div>
                                    </form >
                                    <label>Observaciones:</label>
                                    <textarea v-model="inputPhoneObservation" class="form-control" rows="2" id="comment"></textarea>
                                    <form class="form-inline">
                                                        <div class="form-group">
                                                            <label>Estado:</label>
                                                            <input v-model="inputPhoneState" type="email" class="form-control" id="inputDisplayState" placeholder="no hay datos para mostrar">
                                                        </div>
                                    </form >
                                    <form class="form-inline">
                                                        <label id="lblDispalyPrice">Precio:</label>
                                                        <div class="input-group">
                                                                <span class="input-group-addon"><i class="glyphicon glyphicon-usd"></i></span>
                                                                <input type="number" v-model="inputPhonePrice" class="form-control" id="inputDisplayPrice" placeholder="0,00">
                                                            </div>
                                                        </div>
                                    </form >
                                    <form class="form-inline">
                                                        <label id="lblDisplayPartPrice">Seña:</label>
                                                        <div class="input-group">
                                                                <span class="input-group-addon"><i class="glyphicon glyphicon-usd"></i></span>
                                                                <input v-model="inputPhonePartPrice" type="number" class="form-control" id="inputDisplayPartPrice" placeholder="0,00">
                                                        </div>
                                                        <label id="lblDisplayBalance">Saldo:</label>
                                                        <div class="input-group">
                                                                <span class="input-group-addon"><i class="glyphicon glyphicon-usd"></i></span>
                                                                <input v-model="inputPhoneBalance" type="number" class="form-control"  id="inputDisplayBalance" placeholder="0,00">
                                                        </div>
                                    </form >

                        </div>
                    </div>
                </div>



                <!-- Modal -->
                <div v-if="modalForm" class="modal fade" id="saveRepairModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                   <div>
                                          <form class="form-inline" id="date">
                                                <div class="form-group">
                                                    <label>Fecha:</label>
                                                    <input type="date" v-model="repair_date"  class="form-control" id="email" v-bind:style="{ 'border-color': fieldDate }">
                                                </div>
                                          </form >
                                          <form v-if="inputSaveClient" class="form-inline" id="nameClient">
                                                <div class="form-group">
                                                    <label>Titular:</label>
                                                    <input type="text" class="form-control" v-model="repair_client_name" v-bind:style="{ 'border-color': fieldNameClient }">
                                                </div>
                                          </form >
                                          <form  v-if="inputSaveClient" class="form-inline" id="address">
                                                <div class="form-group">
                                                    <label>Domicilio:</label>
                                                    <input type="email" class="form-control" v-model="repair_client_address" >
                                                </div>
                                          </form >

                                          <form v-if="inputSavePhone" class="form-inline" id="phoneRepairData">
                                                <div class="form-group">
                                                    <label for="recipient-name" class="col-form-label" id="label1" >Marca:</label>
                                                    <select  v-model="phone_trademark"  class="form-control" id="inputFilter" v-on:change="selectedModel" v-bind:style="{ 'border-color': fieldPhoneTademark }">
                                                    <option v-for="trademark in trademarks">{{trademark.trademark}}</option>

                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label for="recipient-name" class="col-form-label">Modelo:</label>
                                                    <input type="text" class="form-control" list="models" v-model="phone_model" v-bind:style="{ 'border-color': fieldPhoneModel }"/>
                                                    <datalist id="models">
                                                            <option v-for="phone in phoneModel">{{phone.phone_model}}</option>
                                                    </datalist>
                                                </div>

                                          </form >
                                </div>





                                <div class="form-group">
                                        <label for="comment">Trabajo a realizar:</label>
                                        <textarea class="form-control" rows="2" v-model="repair_description" v-bind:style="{ 'border-color': fieldDescription }" ></textarea>
                                </div>
                                <div class="form-group">
                                        <label for="comment">Observaciones:</label>
                                        <textarea class="form-control" rows="1" v-model="repair_observations"></textarea>
                                </div>
                                <form class="form-inline" id="priceRepair">
                                        <div class="form-group">
                                            <label for="email">Precio:</label>
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="glyphicon glyphicon-usd"></i></span>
                                                <input type="number" class="form-control" name="email" v-model="repair_price" placeholder="0,00" v-bind:style="{ 'border-color': fieldPrice }">
                                            </div>
                                        </div>
                                </form >
                                <form class="form-inline" id="state">
                                        <div class="form-group">
                                            <label for="email">Estado:</label>
                                            <select class="form-control" v-model="repair_state" v-on:change="selectedFormPrice()" v-bind:style="{ 'border-color': fieldState }" >
                                                                        <option>En reparacion</option>
                                                                        <option>En reparacion / con seña</option>
                                                                        <option>En reparacion / pagado</option>
                                                                        <option>Entregado / sin reparacion</option>
                                                                        <option>Entregado / pagado</option>
                                                                        </select>
                                        </div>

                                </form>

                                <form v-if="partPrice" class="form-inline" id="pricePart">
                                    <div class="form-group">
                                        <label for="email" id="labelFee">Seña:</label>
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-usd"></i></span>
                                            <input type="number" class="form-control" name="email" v-on:change="calculateBalance" v-model="repair_part_price" placeholder="0,00" v-bind:style="{ 'border-color': fieldPartPrice }">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="email">Saldo:</label>
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-usd"></i></span>
                                            <input type="number" class="form-control" name="email" placeholder="0,00" v-model="repair_balance" v-bind:style="{ 'border-color': fieldBalance }" disabled>
                                        </div>
                                    </div>
                                </form >



                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" id="btnA" data-dismiss="modal">Cancelar</button>
                        <button v-if="btnSaveClient" type="button" class="btn btn-success" id="btnB" v-on:mouseover="checkClientAndPhone" v-on:click="checkClientAndPhone" data-toggle="modal" data-target="#saveRepairConfirm">Guardar</button>
                        <button v-if="btnSavePhone" type="button" class="btn btn-success"  id="btnB" v-on:mouseover="checkPhoneAndRepair" v-on:click="checkPhoneAndRepair" data-toggle="modal" data-target="#saveRepairConfirm">Guardar</button>
                        <button v-if="btnSaveRepair" type="button" class="btn btn-success" id="btnB" v-on:mouseover="checkRepair" v-on:click="checkRepair" data-toggle="modal" data-target="#saveRepairConfirm">Guardar</button>
                    </div>
                    </div>
                </div>
                </div>



                <!-- Modal -->
                <div v-if="modalConfirm" class="modal fade" id="saveRepairConfirm" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Se agregara una nueva reparacion... Continuar?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" id="btnA" data-dismiss="modal">Cancelar</button>
                        <button v-if="btnSaveClient" type="button" class="btn btn-success" id="btnB" v-on:click="saveClient" data-toggle="modal" data-target="#saveRepairModal" data-dismiss="modal" >Guardar</button>
                        <button v-if="btnSavePhone"  type="button" class="btn btn-success" id="btnB" v-on:click="savePhone"  data-toggle="modal" data-target="#saveRepairModal" data-dismiss="modal" >Guardar</button>
                        <button v-if="btnSaveRepair" type="button" class="btn btn-success" id="btnB" v-on:click="saveRepair" data-toggle="modal" data-target="#saveRepairModal" data-dismiss="modal" >Guardar</button>
                    </div>
                    </div>
                </div>
                </div>



    <!--div final-->
    </div>`,

  data() {
    return {
      //controllers
      clientController: null,
      phoneController: null,
      repairController: null,
      //lists
      trademarks: [],
      clients: [],
      phones: [],
      repairs: [],
      phoneModel: [],
      phonesOfClient: [],
      repairsOfPhone: [],
      partPrice: false,
      fieldDate: "",
      fieldNameClient: "",
      fieldPhoneTademark: "",
      fieldPhoneModel: "",
      fieldDescription: "",
      fieldPrice: "",
      fieldState: "",
      fieldPartPrice: "",
      fieldBalance: "",
      //alerts
      addRepair: false,
      alertInfo: false,
      //display data client
      inputClientName: "",
      inputClientAddress: "",
      //display data phone
      inputPhoneDate: "",
      inputPhoneObservation: "",
      inputPhoneState: "",
      inputPhonePrice: "",
      inputPhonePartPrice: "",
      inputPhoneBalance: "",
      //admin components
      modalForm: true,
      modalConfirm: false,
      inputSaveClient: true,
      inputSavePhone: true,
      btnSavePhone: false,
      btnSaveRepair: false,
      btnSaveClient: false,
      //input search
      selectedNameClient: "",
      //client data
      phoneClient_id_client: 0,
      phoneClient_id_phone: 0,
      //phone data
      phone_trademark: "",
      phone_model: "",
      //repair data
      repair_id_client_phone: 0,
      repair_client_name: "",
      repair_client_address: "",
      repair_state: "",
      repair_date: "",
      repair_description: "",
      repair_observations: "",
      repair_part_price: 0,
      repair_balance: 0,
      repair_price: 0,

    }
  },

  created: function () {
    //this.loadAllPhones();
    this.loadAllClients();
    this.loadAllRepairs();
  },
  mounted: function () {
    this.loadAllPhones();
  },
  methods: {
    loadAllClients: function () {
      this.clientController = require("../api-rest/controller/clientController");
      this.clients = this.clientController.getAllClients();
    },

    loadAllPhones: function () {
      //var phoneController = require("../api-rest/controller/phoneController");
      this.phoneController = require("../api-rest/controller/phoneController");
      this.phoneController.loadAllPhones()
      .then(data => this.phones = data);
      this.phoneController.loadAllTrademarks()
      .then(data => this.trademarks = data);
    },

    loadAllRepairs: function () {
      //var repairController = require("../api-rest/controller/repairController");
      this.repairController = require("../api-rest/controller/repairController");
      this.repairs = this.repairController.getAllRepairs();
    },


    saveClientAndPhone: function () {
      this.modalForm = true;
      this.clearFields();
      this.repair_client_address = "-------------------------";
      this.btnSavePhone = false;
      this.btnSaveRepair = false;
      this.inputSaveClient = true;
      this.inputSavePhone = true;
      this.btnSaveClient = true;
    },


    savePhoneAndRepair: function () {
      this.modalForm = false;
      if (this.phoneClient_id_client != 0) {
        this.modalForm = true;
        this.clearFields();
        this.inputSaveClient = false;
        this.btnSaveRepair = false;
        this.btnSaveClient = false;
        this.inputSavePhone = true;
        this.btnSavePhone = true;
      } else {
        this.alertInfo = true;
        this.addConfirm();
      }

    },


    phoneAddRepair: function (phone) {
      this.modalForm = true;
      this.clearFields();
      this.inputSaveClient = false;
      this.inputSavePhone = false;
      this.btnSavePhone = false;
      this.btnSaveClient = false;
      this.btnSaveRepair = true;
      this.repair_id_client_phone = phone.id_client_phone;
    },




    //alta cliente
    saveClient: function () {
      var client = {
        name: this.repair_client_name,
        address: this.repair_client_address
      }
      this.clientController.saveClient(client)
        .then((res) => {
          this.phoneClient_id_client = res;
          this.loadAllClients();
        }).then(this.savePhone);
    },



    //guardar telefono
    savePhone: function () {
      var phoneClient = {
        id_client: this.phoneClient_id_client,
        id_phone: this.phoneClient_id_phone,
      };

      this.phoneController.savePhoneClient(phoneClient)
        .then((res) => {
          this.repair_id_client_phone = res;
        })
        .then(this.saveRepair);
    },



    //guardar reparacion
    saveRepair: function () {
      var repair = {
        repair_date: this.repair_date,
        repair_description: this.repair_description,
        repair_observations: this.repair_observations,
        repair_state: this.repair_state,
        repair_part_price: this.repair_part_price,
        repair_balance: this.repair_balance,
        repair_price: this.repair_price,
        repair_id_phone: this.repair_id_client_phone,
      }

      this.repairController.saveRepair(repair)
        .then((res) => {
          this.addRepair = res;
          this.addConfirm();
          this.selectedClient();
          this.loadAllRepairs();
        });
    },


    //busca id del cliente y extrae todos sus telefonos de la bd
    selectedClient: function () {
      var id = 0;
      for (let client of this.clients) {
        if (client.name == this.selectedNameClient) {
          id = client.id_client;
          this.inputClientName = client.name;
          this.inputClientAddress = client.address;
        }
      }
      //guradando id del cliente
      this.phoneClient_id_client = id;

      //var phoneController = require("../api-rest/controller/phoneController");
      this.phonesOfClient = this.phoneController.getPhonesById(id);
    },

    selectedLastClientInsert: function (num) {
      this.loadAllClients();
      console.log("insertt " + num);
      var n = "";
      for (let client of this.clients) {
        if (client.id_client == num) {
          n = client.name;
        }
      }
      this.selectedNameClient = n;
    },

    //agrega a la lista de  modelos de acuerdo a la marca
    selectedModel: function () {
      var id = 0;
      this.phone_model = "";
      this.phoneModel = [];
      for (let trademark of this.trademarks) {
        if (trademark.trademark == this.phone_trademark) {
          id = trademark.id_trademark;
        }
      }

      for (let phone of this.phones) {
        if (phone.trademark_id_trademark == id) {
          this.phoneModel.push(phone);
        }
      }
    },

    //estrae el id del modelo de la lita de modelos
    getIdModel: function () {
      var idModel = 0;
      for (let phone of this.phones) {
        if (phone.phone_model == this.phone_model) {
          idModel = phone.id_phone;
        }
      }

      this.phoneClient_id_phone = idModel;
    },


    //agrega a lista de reparaciones de los celulares del cliente
    selectedPhone: function (phone) {
      this.repairsOfPhone = [];
      for (let repair of this.repairs) {
        if (phone.id_client_phone == repair.clientPhone_id_client_phone) {
          this.repairsOfPhone.push(repair);
        }
      }
    },

    selectedRepair: function (repair) {

      this.inputPhoneDate = repair.date.toISOString().slice(0, 10);
      if (repair.observations == "") {
        this.inputPhoneObservation = "sin observaciones";
      } else {
        this.inputPhoneObservation = repair.observations;
      }
      this.inputPhoneState = repair.state;
      this.inputPhonePrice = repair.price;
      this.inputPhonePartPrice = repair.part_pay;
      this.inputPhoneBalance = repair.balance;
    },


    checkClientAndPhone: function () {
      this.getIdModel();
      this.modalConfirm = false;
      if (this.repair_date == "") {
        this.fieldDate = "#F1948A";
      } else {
        if (this.repair_client_name == "") {
          this.fieldNameClient = "#F1948A";
        } else {
          if (this.phone_trademark == "") {
            this.fieldPhoneTademark = "#F1948A";
          } else {
            if (this.phone_model == "") {
              this.fieldPhoneModel = "#F1948A";
            } else {
              if (this.repair_description == "") {
                this.fieldDescription = "#F1948A";
              } else {
                if (this.repair_price <= 0) {
                  this.fieldPrice = "#F1948A";
                } else {
                  if (this.repair_state == "") {
                    this.fieldState = "#F1948A";
                  } else {
                    if (this.partPrice == true) {
                      if (this.repair_part_price <= 0) {
                        this.fieldPartPrice = "#F1948A";
                      } else {
                        if (this.repair_balance <= 0) {
                          this.fieldBalance = "#F1948A";
                        } else {
                          this.modalConfirm = true;
                        }
                      }
                    } else {
                      this.modalConfirm = true;
                    }
                  }
                }
              }
            }
          }
        }
      }
    },


    checkPhoneAndRepair: function () {
      this.getIdModel();
      this.modalConfirm = false;
      if (this.repair_date == "") {
        this.fieldDate = "#F1948A";
      } else {
        if (this.phone_trademark == "") {
          this.fieldPhoneTademark = "#F1948A";
        } else {
          if (this.phone_model == "") {
            this.fieldPhoneModel = "#F1948A";
          } else {
            if (this.repair_description == "") {
              this.fieldDescription = "#F1948A";
            } else {
              if (this.repair_price <= 0) {
                this.fieldPrice = "#F1948A";
              } else {
                if (this.repair_state == "") {
                  this.fieldState = "#F1948A";
                } else {
                  if (this.partPrice == true) {
                    if (this.repair_part_price <= 0) {
                      this.fieldPartPrice = "#F1948A";
                    } else {
                      if (this.repair_balance <= 0) {
                        this.fieldBalance = "#F1948A";
                      } else {
                        this.modalConfirm = true;
                      }
                    }
                  } else {
                    this.modalConfirm = true;
                  }
                }
              }
            }
          }
        }
      }
    },


    checkRepair: function () {
      this.getIdModel();
      this.modalConfirm = false;
      if (this.repair_date == "") {
        this.fieldDate = "#F1948A";
      } else {
        if (this.repair_description == "") {
          this.fieldDescription = "#F1948A";
        } else {
          if (this.repair_price <= 0) {
            this.fieldPrice = "#F1948A";
          } else {
            if (this.repair_state == "") {
              this.fieldState = "#F1948A";
            } else {
              if (this.partPrice == true) {
                if (this.repair_part_price <= 0) {
                  this.fieldPartPrice = "#F1948A";
                } else {
                  if (this.repair_balance <= 0) {
                    this.fieldBalance = "#F1948A";
                  } else {
                    this.modalConfirm = true;
                  }
                }
              } else {
                this.modalConfirm = true;
              }
            }
          }
        }
      }
    },

    //mustra los campos seña y saldo
    selectedFormPrice: function () {
      if (this.repair_state == "En reparacion / con seña") {
        this.partPrice = true;
        this.repair_part_price = 0;
        this.repair_balance = 0;
      } else {
        this.partPrice = false;
        this.repair_part_price = 0;
        this.repair_balance = 0;
      }
    },

    calculateBalance: function () {
      this.repair_balance = this.repair_price - this.repair_part_price;
    },

    clearFields: function () {
      this.phone_trademark = "";
      this.phone_model = "";
      this.repair_client_name = "";
      this.repair_client_address = "";
      this.repair_state = "";
      this.repair_date = "";
      this.repair_description = "";
      this.repair_observations = "";
      this.repair_part_price = 0;
      this.repair_balance = 0;
      this.repair_price = 0;
      this.partPrice = false;

      this.fieldDate = "";
      this.fieldNameClient = "";
      this.fieldPhoneTademark = "";
      this.fieldPhoneModel = "";
      this.fieldDescription = "";
      this.fieldPrice = "";
      this.fieldState = "";
      this.fieldPartPrice = "";
      this.fieldBalance = "";
    },


    resetAll: function (op) {
      if (op == 1) {
        this.modalForm = false;
        this.inputClientName = "";
        this.inputClientAddress = "";
        this.phoneClient_id_client = 0;
        this.phonesOfClient = [];
        this.repairsOfPhone = [];
        this.inputPhoneDate = "";
        this.inputPhoneObservation = "";
        this.inputPhoneState = "";
        this.inputPhonePrice = "",
          this.inputPhonePartPrice = "";
        this.inputPhoneBalance = "";
      } else {
        if (op == 2) {
          this.inputPhoneDate = "";
          this.inputPhoneObservation = "";
          this.inputPhoneState = "";
          this.inputPhonePrice = "",
            this.inputPhonePartPrice = "";
          this.inputPhoneBalance = "";
        }
      }
    },

    //mustra dialogo por 5 segundos
    addConfirm: function () {
      setTimeout(() => {
        this.addRepair = false;
        this.alertInfo = false;
      }, 5000);
    }

  }
})
