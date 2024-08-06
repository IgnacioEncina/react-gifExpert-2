import { useState } from 'react';
// import { AddCategory } from './components/index';  // al tener un archivo 'index' este nombre se puede omitir:
import { AddCategory, GifGrid } from './components';
// import { GifGrid } from './components/GifGrid';   // Coment en Video 90 ya que se llama al index


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) => {

    // video 81 validar que no se repita
    if ( categories.includes( newCategory ) ) return;

    // video 80
    console.log(newCategory)
    setCategories( [ newCategory, ...categories] );

    // Tarea agregar Valorant video 76
    // setCategories( [ 'Valorant', ...categories] );  /// esta correcto pero hay otra forma. coment en video 80
    // setCategories( cat => [...cat, 'Valorant'])
  }

  console.log(categories);

  return (
    <>
        {/* Título */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
          // setCategories = { setCategories }  // envia y recibe con el hijo, pero deberia solo recibir el valor por lo que se hara de otramanera en video 80
          onNewCategory = { (event) => onAddCategory(event) }
        />

        {/* Listado de Gifs */}
        {/* <button onClick={ onAddCategory }>Agregar</button> */}
        {/* <ol> */}


          { categories.map( category => (
                // <div key={ category }>       // Coment en video 82 GifGrid
                //   <h3>{ category }</h3>
                //   <li key={ category }>{category}</li>
                // </div>
                <GifGrid 
                  key={ category }
                  category={ category }
                />
              )) 
          }

          
          {/* <li></li> */}
        {/* </ol> */}
          {/* Gif Item */}
    </>
  )
}


