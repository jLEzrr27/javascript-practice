/*Funciones*/

// function saludar(name){
//     return `Hola, ${name}`;
// }
/*Fernando Herrera dice que no se recomienda hacer funciones así*/

//saludar = 30;

/*
const saludar = function(name){
    return `Hola, ${name}`; 
}*/


/*No se puede asignar un valor a una constante */
//saludar = 20;

//console.log(saludar("John!"));

/*Las 2 funcione (2 y 3) son basicamente lo mismo*/
const saludar2 = (name) => {
    return `Hola, ${name}`; 
}
const saludar3 = (name) => `Hola, ${name}`; 


const saludar4 = () => (`Hola Mundo`);

const getUser = () => ({
    uid: 'ABC123', username: 'jLEzrr27'
});

console.log(saludar2("John!"));
console.log(saludar3("John!"));
console.log(saludar4());
console.log(getUser());

const user = getUser();
console.log(user);

/*Tarea*/
/*1- Transformar a función de flecha */
/*2. Tiene que retornar un objeto implícito*/
/*3. Probar*/

/*
function getUsuarioActivo(name){
    return {
        uid: 'ABC567', username: name,
    } 
}

const usuarioActivo = getUsuarioActivo("John Lemuel");

console.log(usuarioActivo);*/

/*Haciendo tarea (yo): Creando una función tipo flecha y retornando un objeto implícito*/

/*
const getUsuarioActivo = (name) => ({
    uid: 'ABC567', username: name
});

console.log(getUsuarioActivo("John Lemuel!"));*/

/*Haciendo tarea como la hizo Fernando H.*/
const getUsuarioActivo = (name) => ({
    uid: 'ABC567', username: name
});
console.log(getUsuarioActivo("John Lemuel!"));