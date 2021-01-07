const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 55321321,
        lag: 14.3232,
        lng: 34.9233321    
    }
};

//console.table( persona );

//Clonando objetos

/*Mala manera*/
//const persona2 = persona;
//persona2.nombre = "Peter";

//Si descomentas, acá se repite el objeto, ya que es una referencia
//console.log(persona);
//console.log(persona2);

//Creamos un nuevo objeto, aplicamos el operador spread(...) operadores más abajo le cambiamos el nombre
const persona2 = { ...persona};
persona2.nombre = 'Peter';

console.log(persona2);