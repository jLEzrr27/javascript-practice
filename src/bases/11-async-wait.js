
// const getImagePromesa = () => new Promise( resolve => resolve('https://estoesunaprueba.com') );
// getImagePromesa().then( console.log );

const getImange = async() => {

    try {
        const apiKey = 'pojyz9dL5nNdFiqUE51yGiOlKooSJLo2';
        const request = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    
        /*De esta forma hice yo la tarea:*/
        //Desesctructuramos la respuesta, obteniendo el objeto data y también le extramos la url
        /*
        const res = await request.json();
        const { data } = res;
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        
        document.body.append( img );*/
    
        /*De esta forma hice yo la tarea:*/
        //Desesctructuramos la respuesta, obteniendo el objeto data y también le extramos la url
        const { data } = await request.json();
        const { url } = data.images.original;
        const img = document.createElement('img'); //Colocamos la imagen en el <img>
        img.src = url;
        
        document.body.append( img );
    }catch(e){
        // Manejo de error
        console.error(e);
    }
};

getImange();