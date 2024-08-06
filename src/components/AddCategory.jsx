import { useState } from 'react';



// export const AddCategory = ({ setCategories }) => {     // Video 78  , comentariado en video 80
export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');


    const onInputChange = ( event ) => {
        setInputValue( event.target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        // validaciones
        if (inputValue.trim().length < 1) return;
        // Tarea setCategories(.... inputValue)  enviar y agregar el inputValue - Video 79
        // setCategories( cat => [ inputValue, ...cat ] ); // para conservar los valores se usa fn de callback. coment en video 80
        onNewCategory( inputValue.trim().charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase());   // separamos la 1era letra y se convierte en mayuscula y se le une el resto de caracteres
        // limpiamos el input
        setInputValue('');

    }

  return (
    <>
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    </>
  )
}
