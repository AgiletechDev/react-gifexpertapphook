import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['OP', 'SX', 'DB'];
  
    const [categories, setCategories] = useState(['ONE PUSH MAN']);
    
  /*   const handleAdd = ()=>{
        //setcategories([...categories, 'value']);
        setcategories(cats =>[...cats, 'value']);
        
        console.log(categories);

    } */

  //  console.log(categories);

    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories= {setCategories} />
            <hr/>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
               {
               categories.map(category=> (
                  /*  (<li key={category}> {category}</li>) */
                  <GifGrid
                    key={category}
                    category={category}
                    />
                    ))
               }

            </ol>
        

        </>
    )
}

