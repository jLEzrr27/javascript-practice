/*Fetch Api*/

/*Hacemos una petición a la Api de Giphy*/

const apiKey = 'pojyz9dL5nNdFiqUE51yGiOlKooSJLo2';

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

request
    .then(r => r.json())
    .then( ({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        
        document.body.append( img );
    })
    .catch( console.warn )

// request.then( r => {
//     r.json().then( data => {
//         console.log(data);
//     });
// });