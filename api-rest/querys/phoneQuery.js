'use strict';

let cq = require('./commonQuery');

function savePhoneClient() {
  return cq.insertQuery('mobilecustomer');
}

function loadAllPhones() {
  return cq.initalQuery('*', 'phones', false);
}

function getPhonesById(id) {
  let query = '';
  query += cq.initalQuery('*', 'mobileCustomer, phones, trademarks', true);
  query += cq.equal('mobileCustomer.clients_id_client', id);
  query += cq.and() + cq.equal('phones.id_phone', 'mobileCustomer.phones_id_phone');
  query += cq.and() + cq.equal('trademarks.id_trademark', 'phones.trademark_id_trademark');
  return query;
}

function loadAllTrademarks() {
  return cq.initalQuery('*','trademarks',false);
}

module.exports = {
  savePhoneClient,
  loadAllPhones,
  getPhonesById,
  loadAllTrademarks
}