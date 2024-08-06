

// Creado en video 83


export const getGifs = async ( category ) => {  // Fetch API - Video 83

    const url = `https://api.giphy.com/v1/gifs/search?api_key=ji1Hj5zlQ6kksn3MVci77VKmpa6x7mCt&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data  } = await resp.json();
  
    const gifs = data.map( img => ({
      id: img.id,
      title: img. title,
      url: img.images.downsized_medium.url
    }));

    // console.log(url)
    // console.log(gifs)
    return gifs;
  
  }
  