'use strict';

let cq = require('./commonQuery');

function savePhoneClient() {
  return cq.insertQuery('mobilecustomer');
}

module.exports = {
  savePhoneClient
}