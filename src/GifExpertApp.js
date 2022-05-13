import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
 
    // const categories = ['One Puch Man', 'Shingeki no kyojin', 'Chainsaw man']
 
    const [categories, setCategories] = useState(['Chainsaw man']);
    
    // const handleAdd = () => {
    //     // Opcion 1 para agregar un elemento en el estado
    //     // setCategories( ['Monster', ...categories] );
        
    //     // Opcion 2 para agregar un elemento en el estado
    //     setCategories( cat => [...categories, 'Monster'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory  setCategories= { setCategories }/>
            <hr/>

            <ol>
                { 
                    categories.map( category => (
                        <GifGrid key={category} category={category}/>
                    ))
                }
            </ol>
        </>
        
    )
}

export default GifExpertApp;