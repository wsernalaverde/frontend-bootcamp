const url=""

fetch(url){
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(json){
        console.log(json);
    })
}

/** /*console.log("hola");

setTimeout(() => {
  console.log("bye");
}, 2000);

console.log("hola de nueo");
*/

/*function saidBye(callback) {
  console.log("paso 2");
  //setTimeout(function () {
    console.log("bye");
    console.log("paso 3");
    callback();
  //}, 2000);
}

console.log("paso 1");
console.log("hi");

function callback() {
  console.log("paso 4");
  console.log("hi again");
}


saidBye(callback);*/

// Ejemplo 2 de callbacks
/*function sumar(a, sumeAyB) {
  var b = 5;
  
  console.log("paso 2");
  sumeAyB(b);
}

var a = 1;
function sumeAyB(b) {
  console.log("paso 3");
  console.log(a + b);
}

console.log("paso 1");
sumar(1, sumeAyB);
*/

// ejemplo 3 de callbacks

/*
function myMap(arr, callback) {
  const _arr = [];
  for (let i = 0; i < arr.length; i++) {
    const res = callback(arr[i]);
    _arr.push(res);
  }
  return _arr;
}


const arr = [1,2,3,4,5];
const powArr = myMap(arr, (val) => val * val);
console.log(powArr);
*/

// ejemplo de un map
/*var x = [ {name: "sergio"},"sergio","myleidy","luisa"];

function mayusculas(elemento) {
  if (typeof elemento == "object") {
   return elemento.name.toUpperCase();
  }
  return elemento.toUpperCase();
}
var y = x.map(mayusculas)

console.log(y);
*/
