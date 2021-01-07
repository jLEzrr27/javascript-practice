import { getHeroeById } from "./bases/08-imp-exp"; //Exportación por defecto

/*Promesas*/

// const promesa = new Promise( (resolve, reject)  => {
//     setTimeout(() => {
//         //Tarea
//         //Importen el getHeroeById() de 08-imp-exp.js
//         const h = getHeroeById(2);
//         resolve( h );
//         reject('No se pudo encontrar el héroe');
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log('Then de la promesa', heroe);
// })
// .catch(er => console.warn(er));

const getHeroeByAsync = (id) => {

    return new Promise( (resolve, reject)  => {
        setTimeout(() => {
            //Tarea
            //Importen el getHeroeById() de 08-imp-exp.js
            const h = getHeroeById( id );
            if (h){
                resolve(h)
            }else{
                reject('Héroe no encontrado');
            }
            //resolve( h );
            //reject('No se pudo encontrar el héroe');
        }, 2000);
    });
};

// getHeroeByAsync(2)
//     .then( heroe => console.log('Heroe', heroe))
//     .catch(e => console.warn(e));

getHeroeByAsync(2)
    .then( console.log )
    .catch(e => console.warn(e));