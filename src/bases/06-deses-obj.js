/*Desestructuración de Objetos*/
/*Asignación desestructurante*/

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado',
};

//const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

/*Desestruturando desde el argumento*/
/*const returnPerson = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    //console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
    }
}

const avenger = returnPerson(persona);
console.log(avenger);*/

/*Renombrando función*/
const UseContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    //console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        lating: {
            lag: 14.1232, lng: -12.3232
        }
    }
}

/*Extraer objetos de objetos (objetos anidados) */
const {nombreClave, anios, lating:{lag, lng} } = UseContext(persona);

console.log(nombreClave, anios);
console.log(lag, lng);