const dbConnection = require("../utils/dbConnection");
let phoneService = require('../services/phoneService');
exports.loadAllTrademarks = () => {
  var connection = dbConnection.openConnection();
  var query = "SELECT * FROM sistemacelulares.trademarks";
  var trademarks = [];
  connection.query(query, (err, allTrademarks) => {
    if (err) {
      console.log("Error al traer los datos: " + err);
    } else {
      for (let trademark of allTrademarks) {
        trademarks.push(trademark);
      }
    }
  })
  connection.end();
  return trademarks;
}

exports.loadAllPhones = () => {
  var connection = dbConnection.openConnection();
  var query = "SELECT * FROM phones";
  var phones = [];
  connection.query(query, (err, allPhones) => {
    if (err) {
      console.log("Error al traer los datos: " + err);
    } else {
      for (let phone of allPhones) {
        phones.push(phone);
      }
    }
  })
  connection.end();
  return phones;
}

exports.savePhoneClient = (phoneClient) => {
  return phoneService.savePhoneClient(phoneClient);
}


exports.getPhonesById = (id) => {
  var connection = dbConnection.openConnection();
  var query = "SELECT * FROM mobileCustomer, phones, trademarks WHERE mobileCustomer.clients_id_client = " + id + " AND phones.id_phone = mobileCustomer.phones_id_phone AND trademarks.id_trademark = phones.trademark_id_trademark";
  var phones = [];
  connection.query(query, (err, listPhones) => {
    if (!err) {
      for (let phone of listPhones) {
        phones.push(phone);
      }
    } else {
      console.log("Error al traer los datos: " + err);
    }

  })
  connection.end();
  return phones;
}
