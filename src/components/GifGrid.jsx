// import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';  // coment en video 88



// const getGifs = async ({ category }) => {  // Fetch API - Video 83 se traslado a helpers/getgifs.js

//   const url = `https://api.giphy.com/v1/gifs/search?api_key=ji1Hj5zlQ6kksn3MVci77VKmpa6x7mCt&q=${ category }&limit=10`;
//   const resp = await fetch( url );
//   const { data = [] } = await resp.json();

//   const gifs = data.map( img => ({
//     id: img.id,
//     title: img. title,
//     url: img.images.downsized_medium.url
//   }));

  // console.log(gifs)
// }


// Functional Component
export const GifGrid = ({ category }) => {

    // Custom Hook - Video 88
    const { images, isLoading } = useFetchGifs( category ) ;
    // console.log({  isLoading });

    // Comentariado en Video 88 - Custom Hook  
    // const [images, setImages] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);  // Creado en Video 88 custom hook

    // const getImages = async() => {
    //   const newImages = await getGifs( category );
    //   setImages(newImages);
    //   setIsLoading(false);
    // }

    // useEffect( () => {
    //   getImages();
    // }, [])


    return (
        <>
          <h3>{ category }</h3>
          {
            isLoading && (<h2 >Cargando...</h2>) 
          }
          
          <div className='card-grid'>
            {
              images.map( ( images ) => (
                <GifItem 
                  key={ images.id }
                  { ...images }
                />
              ))
            }
          </div>
          
        </>
    )
    

}
