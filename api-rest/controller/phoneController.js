let phoneService = require('../services/phoneService');

let loadAllTrademarks = () => {
  return new Promise((resolve, reject) => {
    phoneService.loadAllTrademarks()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

let loadAllPhones = () => {
  return new Promise((resolve, reject) => {
    phoneService.loadAllPhones()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

function savePhoneClient(phoneClient) {
  return new Promise((resolve, reject) => {
    phoneService.savePhoneClient(phoneClient)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

function getPhonesById(id) {
  return new Promise((resolve, reject) => {
    phoneService.getPhonesById(id)
      .then(data => resolve(data))
      .catch(err => reject(err));  0
  });
}

module.exports = {
  loadAllTrademarks,
  loadAllPhones,
  savePhoneClient,
  getPhonesById
}