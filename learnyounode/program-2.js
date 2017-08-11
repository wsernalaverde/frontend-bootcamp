let arrayNumber = process.argv;

function suma(acum, curr, i){
    if(i>=2){
        
     return Number(acum) + Number(curr)
    }else{ 
        return acum;
    }
}

console.log(arrayNumber.reduce(suma, 0));

