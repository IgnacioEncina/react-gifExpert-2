
// Este Custom Hook solo es codigo javascript por eso es js pero perfectamente podria ser .jsx
// Un HOOK no es mas que una funcion que regresa algo

// Este Custom Hook extrae la logica de cargar y manejar las imagenes

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';



export const useFetchGifs = ( category ) => {

    // Copiado en video 88 desde GifGrid.jsx, reemplazamos ese codigo con este Custom Hook
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);  // Creado en Video 88 custom hook

    const getImages = async() => {
      const newImages = await getGifs( category );
      setImages(newImages);
      setIsLoading(false);
    }

    useEffect( () => {
      getImages();
    }, [])
    // fin de copiado - video 88

    return {
        images,   // (es lo mismo que) images: images,
        isLoading   // (es lo mismo que) isLoading: isLoading
    }
}

 
