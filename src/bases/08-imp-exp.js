/*Importaciones y exportaciones*/

//import { heroes } from './data/heroes';

//import { heroes } from './data/heroes';

import heroes, {owners} from "../data/heroes"; //Exportación por defecto

//console.log(owners);

/*Tarea de usar el .find en heroes*/

/*YO:*/
/*Función para obtener por objeto del arreglo según la propiedad, en este caso el ID*/
/*const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id == id);
}*/

/*Fernando Herrera, de forma larga*/
/*const getHeroeById = (id) => {
    return heroes.find( (heroe) =>{
        if(heroe.id == id){
            return true;
        }else{
            return false;
        }
    });
}*/

/*Fernando Herrera, de forma más corta */
export const getHeroeById = (id) => {
    return heroes.find( (heroe) => heroe.id === id);
}

//console.log( getHeroeById(2) );

//usando filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

//console.log(getHeroesByOwner('DC'));