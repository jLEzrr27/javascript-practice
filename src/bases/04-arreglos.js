/*Arreglos en js*/

//const arreglo = new Array(100);

const arreglo = [1,2,3,4];
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);

/*usando operador spread*/
let arreglo2 = [...arreglo, 5];
//arreglo2.push(5);

const arreglo3 = arreglo2.map( function(number){
    return number * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

//Revisión por mi parte
for(var i in arreglo3){
    console.log(arreglo3[i]);
}