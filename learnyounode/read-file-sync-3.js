//Ejercicio tres
var fs = require('fs');

let ruta='./prueba';

let file = fs.readFileSync(process.argv[2]);

let str=file.toString();

let array= str.split('\n');

console.log(array.length-1);




