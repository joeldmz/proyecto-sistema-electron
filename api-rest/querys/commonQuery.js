'use strict';

function initalQuery(columns, table){
  return `SELECT ${columns} FROM ${table} WHERE`;
}

module.exports = {
  initalQuery
}
