'use strict';

let con = require('../utils/dbConnection');
let phq = require('../querys/phoneQuery');
let query = '';

function savePhoneClient(phonClient) {
  con.openConnection();
  query = phq.savePhoneClient();
  let val = {
    clients_id_client: phoneClient.id_client,
    phones_id_phone: phoneClient.id_phone
  };
  con.query(query, value, (err, res) => {
    if (err) {
      console.log("Error al guardar: " + err);
      return err;
    } else {
      return res.insertId;
    }
  });
  con.end();
}

module.exports = {
  savePhoneClient
}