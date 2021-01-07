/*Desestructuración de arreglos*/

const personajes = ['Goku', 'Vegeta', 'Trunks'];

/*Forma pajera de imprimir*/
// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [ , ,p3 ] = personajes;

console.log(p3);

const retornaArreglo = () =>{
    return['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1. El primer valor del arr se llamará nombre
//2. se llamará setNombre
const UseState = ( valor ) => {
    return [valor, ()=>{ console.log("Hola mundo!") } ];
}

//setNombre es la función que está dentro del array retornado en UseSate
const [nombre, setNombre] = UseState('Goku');

console.log(nombre);
setNombre();