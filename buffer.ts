import {Buffer} from "node:buffer";

//pega um dado e converte para binários de 0 à 255
const buf = Buffer.from('hello world', 'utf8');


//converte o buffer para hexadecimanl
console.log(buf.toString('hex'));

//conver4te para dados binários em um formato de string seguro para transmissão em texto
//...via URL
console.log(buf.toString('base64'));


//converte novamente para padrão hello wordl
console.log(buf.toString('utf8'));

console.log(Buffer.from('fhqwhgads', 'utf8'));
console.log(Buffer.from('fhqwhgads', 'utf16le'));

// --------------------------------------
// --------------------------------------

console.log(' --------------------------------------')
// Cria um Buffer de 4 bytes
const buf01 = Buffer.alloc(4); // <Buffer 00 00 00 00>

// Escreve o byte 100 (0x64 em hexadecimal) na posição de índice 2
buf01[2] = 100;

console.log(buf01); 
// Saída: <Buffer 00 00 64 00>

console.log(buf01.toString('hex'));
// Saída: 00006400
