'use strict';

function insertQuery(table){
  return `INSERT INTO ${table} SET ?`;
}

function initalQuery(columns, table, where){
  return `SELECT ${columns} FROM ${table} ${where?'WHERE':''}`;
}

function equal(column, value){
  return `${column} = ${value} `;
}

function lessThan(column, value){
  return `${column} < ${value} `;
}

function greaterThan(column, value) {
  return `${column} > ${value} `;
}

function lessThanOrEqual(column, value){
  return `${column} <= ${value} `;
}

function greaterThanOrEqual(column, value) {
  return `${column} >= ${value} `;
}

function and(){
  return 'AND ';
}

function or(){
  return 'OR ';
}

module.exports = {
  insertQuery,
  initalQuery,
  equal,
  lessThan,
  greaterThan,
  lessThanOrEqual,
  greaterThanOrEqual,
  and,
  or
}
