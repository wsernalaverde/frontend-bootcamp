function calcularEdad(edad){
    if(edad <= 17){
        console.log('Eres menor de edad');
    }else if(edad >= 18 && edad < 60){
        console.log('Eres mayor de edad')
    }else{
        console.log('Tienes más de 60 años');
    }
}

// Ejercicio Bank

let balance = 1000;
let cantTransferir;
let balance2;

function imprimir(balance){
    console.log('Su balance es ' + balance);
}

function retirarDinero(dinero){
    if(dinero < balance){
        console.log('Puedes retirar');
        balance -= dinero;
        console.log('Usted acaba de retirar ' + dinero);
    }else{
        console.log('No tienes los fondos suficientes para retirar esta cantidad: ' +dinero+ ' de dinero');
    }
}

function transferir(balance, cantTransferir, balance2){
    balance = balance - cantTransferir;
    balance2 += cantTransferir;
    imprimir(balance2);
}

function retirarTodosFondos(fondos){
    //Función para retirar todos los fondos pero de 100 en 100
    let retiro= 100;
    fondos = balance + balance2;
    while(fondos > 0){
        fondos -= retiro;
        console.log('Acabó de retirar 100');
    }
}