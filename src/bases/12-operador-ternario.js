/*Operadores ternarios: Formas de hacer un 'if' */

const activo = true;

let mensaje = '';

// if (activo) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

//const mensaje = (activo) ? 'Activo' : 'Inactivo';
//const mensaje = (activo) ? 'Activo' : null;
//const mensaje = !activo && 'Activo';
const mensaje = activo && 'Activo';

console.log(mensaje);