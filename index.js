const prompt = require('prompt-sync')();
let busca = require('./busca.js');
console.log("Digite um numero");
let numero = prompt();

busca.sequencial(numero);
busca.binaria(numero)