import React, {usestate, createContext} from 'react'
import { useState } from 'react/cjs/react.development';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([

        {
            name: 'Harry Potter',
            price: '$10',
            id: 226
        },

        {
            name: 'Game of throne',
            price: '$20',
            id: 2267
        },

        {
            name: 'Inception',
            price: '$90',
            id: 2263
        },
    ])

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}