//Ejercicio cuatro
var fs = require('fs');

let file = fs.readFile(process.argv[2], (err, data)=>{
    if(err){
        console.log('error');
    }
    else{
    let str=data.toString();
    let array= str.split('\n');
    console.log(array.length-1);
    }
});