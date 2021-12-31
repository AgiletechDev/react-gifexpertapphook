import React, { useState } from 'react'
import PropTypes from 'prop-types';



export const AddCategory = ({setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();//no recarga la pagina completa, implementa funcion de ajax
        console.log('Submit echo');

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats, ] );
            setInputValue('');
        }
    }



    return (
        <>
            {/*  <h2>Add category</h2>
            <h1> {inputValue} </h1> */}

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />

            </form>
        </>
    )
}

AddCategory.propTypes={
    setCategories:  PropTypes.func.isRequired
}