'use strict';

let dbConnection = require('../utils/dbConnection');
let phq = require('../querys/phoneQuery');
let query = '';

function savePhoneClient(phonClient) {
  let con = dbConnection.openConnection();
  query = phq.savePhoneClient();
  let val = {
    clients_id_client: phoneClient.id_client,
    phones_id_phone: phoneClient.id_phone
  };
  return new Promise((resolve, reject) => {
    con.query(query, value, (err, res) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(res.insertId);
      }
    });
  });
  con.end();
}

let loadAllPhones = () => {
  let con = dbConnection.openConnection();
  query = phq.loadAllPhones();
  return new Promise((resolve, reject) => {
    con.query(query, (err, allPhones) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(allPhones);
      }
    })
  });
  con.end();
}

function getPhonesById(id) {
  let con = dbConnection.openConnection();
  query = phq.getPhonesById(id);
  return new Promise((resolve, reject) => {
    con.query(query, (err, allPhones) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(allPhones);
      }
    })
  });
  con.end();
}

let loadAllTrademarks = () => {
  let con = dbConnection.openConnection();
  query = phq.loadAllTrademarks();
  return new Promise((resolve, reject) => {
    con.query(query, (err, allPhones) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(allPhones);
      }
    })
  });
  con.end();
}

module.exports = {
  savePhoneClient,
  loadAllPhones,
  getPhonesById,
  loadAllTrademarks
}