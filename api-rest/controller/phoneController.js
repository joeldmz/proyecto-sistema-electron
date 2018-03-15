let phoneService = require('../services/phoneService');
exports.loadAllTrademarks = () => {
  return phoneService.loadAllTrademarks();
}

exports.loadAllPhones = () => {
  return phoneService.loadAllPhones();
}

exports.savePhoneClient = (phoneClient) => {
  return phoneService.savePhoneClient(phoneClient);
}


exports.getPhonesById = (id) => {
  return phoneService.getPhonesById(id);
}
